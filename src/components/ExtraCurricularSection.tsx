
import { Award, Users, Code, Lightbulb, Trophy, Heart } from 'lucide-react';

export const ExtraCurricularSection = () => {
  const activities = [
    {
      title: "Open Source Contributor",
      organization: "Kubernetes Community",
      period: "2023 - Present",
      description: "Active contributor to Kubernetes documentation and tooling projects. Contributed to improving cluster management utilities and best practices guides.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      achievements: ["15+ merged PRs", "Documentation improvements", "Community recognition"]
    },
    {
      title: "Techstars Startup Weekend Organizer",
      organization: "Techstars",
      period: "2025 - Present",
      description: "Organized monthly meetups for 200+ DevOps professionals, featuring industry experts and hands-on workshops on cloud technologies.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      achievements: ["50+ events organized", "500+ community members", "Industry partnerships"]
    },
    {
      title: "Hackathon Winner",
      organization: "DevsHouse 2025",
      period: "2025",
      description: "First place winner for developing an automated disaster recovery solution using serverless architecture and infrastructure as code.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      achievements: ["1st Place", "$10K Prize", "AWS Credits"]
    },
    {
      title: "Technical Mentor",
      organization: "CSED Club, E-Cell GLAU",
      period: "2025 - Present",
      description: "Volunteer mentor helping underrepresented groups learn DevOps practices and cloud technologies through hands-on projects.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      achievements: ["30+ mentees", "Career transitions", "Skill development"]
    },
    {
      title: "President",
      organization: "Entrepreneurship Cell, GLAU",
      period: "2025 - Present",
      description: "Lead a team exploring emerging technologies like serverless computing, edge deployment, and AI/ML ops integration.",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop",
      achievements: ["5 prototypes", "Patent filing", "Research publications"]
    },
    {
      title: "DevOps Trainer",
      organization: "CSED Club",
      period: "2025 - Present",
      description: "Developed and delivered training programs for AWS and Azure certifications, helping 100+ professionals advance their careers.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      achievements: ["95% pass rate", "100+ certified", "Course development"]
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond <span className="text-green-400">Work</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Contributing to the tech community and exploring innovative solutions outside of work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 bg-green-400/20 rounded-full backdrop-blur-sm">
                  <activity.icon className="text-green-400" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-green-400 text-sm font-semibold">{activity.organization}</p>
                  <p className="text-gray-500 text-xs">{activity.period}</p>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {activity.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-white text-sm font-semibold">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-1">
                    {activity.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-green-400/10 text-green-400 rounded text-xs border border-green-400/20"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in <span className="text-green-400">Collaboration?</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to new opportunities, speaking engagements, and collaborative projects 
              that push the boundaries of DevOps and cloud technologies.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
