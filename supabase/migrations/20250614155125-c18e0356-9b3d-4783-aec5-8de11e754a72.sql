
-- Create a table to store contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (optional, but good practice)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL Security;

-- Create a policy to allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy to allow viewing submissions (you can restrict this later)
CREATE POLICY "Allow viewing contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (true);
