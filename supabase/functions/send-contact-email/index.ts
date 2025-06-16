
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    console.log("Processing contact form submission:", { name, email });

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Store the submission in the database
    const { data: submission, error: dbError } = await supabaseClient
      .from("contact_submissions")
      .insert({
        name,
        email,
        message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store submission");
    }

    console.log("Submission stored successfully:", submission.id);

    // Send confirmation email to the user
    console.log("Attempting to send confirmation email to:", email);
    const userEmailResponse = await resend.emails.send({
      from: "Krishna Mittal <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #06b6d4;">Thank you for reaching out, ${name}!</h1>
          <p>I have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your message:</h3>
            <p style="color: #6b7280; line-height: 1.6;">${message}</p>
          </div>
          
          <p>I typically respond within 24 hours. For urgent infrastructure issues, I'll prioritize your request.</p>
          
          <p style="color: #6b7280;">
            Best regards,<br>
            <strong>Krishna Mittal</strong><br>
            DevOps Engineer
          </p>
        </div>
      `,
    });

    if (userEmailResponse.error) {
      console.error("Error sending confirmation email:", userEmailResponse.error);
      throw new Error(`Failed to send confirmation email: ${userEmailResponse.error.message}`);
    }

    console.log("Confirmation email sent successfully:", userEmailResponse.data?.id);

    // Send notification email to you (Krishna)
    console.log("Attempting to send notification email");
    const notificationEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["krishnamittal30062004@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ef4444;">New Contact Form Submission</h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Submission ID:</strong> ${submission.id}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This is an automated notification from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (notificationEmailResponse.error) {
      console.error("Error sending notification email:", notificationEmailResponse.error);
      // Don't throw here - confirmation email was sent successfully
    } else {
      console.log("Notification email sent successfully:", notificationEmailResponse.data?.id);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
        submissionId: submission.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Failed to send message",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
