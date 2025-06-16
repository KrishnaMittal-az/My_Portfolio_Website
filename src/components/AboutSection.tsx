
export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate DevOps engineer with over 5 years of experience in building 
              and maintaining scalable cloud infrastructure. My expertise spans across 
              automation, containerization, and continuous integration/deployment.
            </p>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I specialize in transforming complex deployment processes into streamlined, 
              automated pipelines that enable rapid, reliable software delivery. My approach 
              combines cutting-edge technology with proven methodologies to deliver robust, 
              scalable solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-gray-700">
                <h4 className="text-cyan-400 font-semibold mb-2 text-sm sm:text-base">Cloud Platforms</h4>
                <p className="text-gray-300 text-xs sm:text-sm">AWS, Azure, GCP</p>
              </div>
              <div className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-gray-700">
                <h4 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Containers</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Docker, Kubernetes</p>
              </div>
              <div className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-gray-700">
                <h4 className="text-orange-400 font-semibold mb-2 text-sm sm:text-base">CI/CD</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Jenkins, GitHub Actions</p>
              </div>
              <div className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-gray-700">
                <h4 className="text-purple-400 font-semibold mb-2 text-sm sm:text-base">Monitoring</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Prometheus, Grafana</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm sm:text-base">Infrastructure Automation</span>
                  <span className="text-green-400 text-sm sm:text-base">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-2 rounded-full w-[95%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm sm:text-base">Cloud Architecture</span>
                  <span className="text-green-400 text-sm sm:text-base">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-2 rounded-full w-[90%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm sm:text-base">Container Orchestration</span>
                  <span className="text-green-400 text-sm sm:text-base">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-2 rounded-full w-[88%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm sm:text-base">Monitoring & Alerting</span>
                  <span className="text-green-400 text-sm sm:text-base">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-2 rounded-full w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
