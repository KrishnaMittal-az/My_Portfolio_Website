import React from 'react';

const PipelineSection = () => {
  const pipelineSteps = [
    {
      name: "Source",
      description: "Code repository with Git hooks",
      tools: ["GitHub", "GitLab", "Bitbucket"],
      color: "#f59e0b"
    },
    {
      name: "Build",
      description: "Automated testing and compilation",
      tools: ["Jenkins", "GitHub Actions", "GitLab CI"],
      color: "#3b82f6"
    },
    {
      name: "Test",
      description: "Unit, integration, and security tests",
      tools: ["Jest", "SonarQube", "OWASP ZAP"],
      color: "#10b981"
    },
    {
      name: "Package",
      description: "Container image creation and registry",
      tools: ["Docker", "Harbor", "ECR"],
      color: "#8b5cf6"
    },
    {
      name: "Deploy",
      description: "Automated deployment to environments",
      tools: ["Kubernetes", "Helm", "ArgoCD"],
      color: "#ef4444"
    },
    {
      name: "Monitor",
      description: "Real-time monitoring and alerting",
      tools: ["Prometheus", "Grafana", "ELK Stack"],
      color: "#06b6d4"
    }
  ];

  return (
    <section id="cicd" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CI/CD Pipeline
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Interactive visualization of a complete DevOps pipeline showcasing automated workflows 
            from code commit to production deployment.
          </p>
        </div>

        {/* Simple Pipeline Visualization */}
        <div className="mb-16 p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
          <div className="relative">
            {/* Pipeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transform -translate-y-1/2 opacity-50"></div>
            
            {/* Moving Light Dot */}
            <div className="absolute top-1/2 h-4 w-4 bg-cyan-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-cyan-400/50 animate-[move-light_6s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>

            {/* Pipeline Steps */}
            <div className="relative flex justify-between items-center">
              {pipelineSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 relative"
                    style={{ backgroundColor: step.color }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* Step Label */}
                  <div className="mt-4 text-center">
                    <h3 className="text-sm font-semibold text-white mb-1">{step.name}</h3>
                    <p className="text-xs text-gray-400 max-w-20">{step.description.split(' ').slice(0, 3).join(' ')}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pipeline Steps Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pipelineSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.name}</h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {step.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-cyan-400">Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {step.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes move-light {
          0% { left: 0%; }
          16.66% { left: 22%; }
          33.33% { left: 40%; }
          50% { left: 58%; }
          66.66% { left: 78%; }
          83.33% { left: 100%; }
          100% { left: 0%; }
        }
      `}</style>
    </section>
  );
};

export { PipelineSection as CICDPipelineSection };
