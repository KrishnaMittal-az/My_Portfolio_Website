
const projects = [
  {
    id: 1,
    title: "Microservices CI/CD Pipeline",
    description: "Automated deployment pipeline for microservices architecture using Jenkins, Docker, and Kubernetes",
    technologies: ["Jenkins", "Docker", "Kubernetes", "AWS EKS", "Terraform"],
    achievements: ["Reduced deployment time by 70%", "Zero-downtime deployments", "Auto-scaling implementation"],
    color: "from-blue-500 to-cyan-500",
    status: "Production"
  },
  {
    id: 2,
    title: "Infrastructure as Code",
    description: "Complete AWS infrastructure provisioning using Terraform with multi-environment support",
    technologies: ["Terraform", "AWS", "CloudFormation", "Ansible", "GitOps"],
    achievements: ["100% automated provisioning", "Cost optimization of 40%", "Multi-region deployment"],
    color: "from-green-500 to-emerald-500",
    status: "Active"
  },
  {
    id: 3,
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring solution with Prometheus, Grafana, and ELK stack",
    technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "AlertManager"],
    achievements: ["99.9% uptime monitoring", "Real-time alerting", "Performance optimization"],
    color: "from-purple-500 to-pink-500",
    status: "Production"
  },
  {
    id: 4,
    title: "Container Orchestration",
    description: "Kubernetes cluster management with auto-scaling and service mesh implementation",
    technologies: ["Kubernetes", "Istio", "Helm", "Docker", "Prometheus"],
    achievements: ["High availability setup", "Service mesh implementation", "Resource optimization"],
    color: "from-orange-500 to-red-500",
    status: "Active"
  },
  {
    id: 5,
    title: "Automated Testing Pipeline",
    description: "End-to-end testing automation with security scanning and quality gates",
    technologies: ["GitHub Actions", "SonarQube", "OWASP ZAP", "Selenium", "Jest"],
    achievements: ["Automated security scans", "Quality gate enforcement", "Parallel test execution"],
    color: "from-indigo-500 to-blue-500",
    status: "Production"
  },
  {
    id: 6,
    title: "Cloud Migration Strategy",
    description: "Large-scale migration from on-premises to AWS cloud with minimal downtime",
    technologies: ["AWS", "Docker", "RDS", "CloudFront", "Route53"],
    achievements: ["Zero downtime migration", "50% cost reduction", "Improved performance"],
    color: "from-teal-500 to-cyan-500",
    status: "Completed"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Real-world DevOps implementations that demonstrate scalability, reliability, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 overflow-hidden"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {project.status}
                  </span>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-lg transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 text-sm font-semibold rounded-lg transition-colors">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
