
const skills = [
  { name: 'Docker', level: 95, color: 'bg-blue-500', category: 'Containerization' },
  { name: 'Kubernetes', level: 88, color: 'bg-blue-600', category: 'Orchestration' },
  { name: 'AWS', level: 92, color: 'bg-orange-500', category: 'Cloud' },
  { name: 'Jenkins', level: 85, color: 'bg-red-500', category: 'CI/CD' },
  { name: 'Terraform', level: 90, color: 'bg-purple-500', category: 'IaC' },
  { name: 'Prometheus', level: 87, color: 'bg-orange-600', category: 'Monitoring' },
  { name: 'Python', level: 89, color: 'bg-yellow-500', category: 'Scripting' },
  { name: 'Linux', level: 94, color: 'bg-gray-600', category: 'OS' },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          <p className="text-lg sm:text-xl text-gray-400 mt-6 max-w-3xl mx-auto px-4">
            Comprehensive expertise across the DevOps toolchain and cloud ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              <div className="text-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#00d4ff"
                      strokeWidth="2"
                      strokeDasharray={`${skill.level}, 100`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-cyan-400">{skill.level}%</span>
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <span className="inline-block px-2 sm:px-3 py-1 bg-gray-700 text-cyan-400 text-xs rounded-full">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
            Certifications & <span className="text-green-400">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-xl">AWS</span>
              </div>
              <h4 className="text-white font-semibold text-sm sm:text-base">AWS Solutions Architect</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">Professional Level</p>
            </div>
            
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-xl">K8s</span>
              </div>
              <h4 className="text-white font-semibold text-sm sm:text-base">Certified Kubernetes Admin</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">CKA Certified</p>
            </div>
            
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 text-center sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0 sm:max-w-xs md:max-w-none">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-xl">TF</span>
              </div>
              <h4 className="text-white font-semibold text-sm sm:text-base">Terraform Associate</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">HashiCorp Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
