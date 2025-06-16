import { useEffect, useState } from 'react';
import { Terminal, Server, Cloud, GitBranch, Zap, Database, Code, Settings, Globe, Shield } from 'lucide-react';

export const HeroContent = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentTech, setCurrentTech] = useState(0);
  const [codeLineIndex, setCodeLineIndex] = useState(0);
  const roles = ['DevOps Engineer', 'Cloud Architect', 'Automation Expert', 'Infrastructure Specialist'];
  const technologies = ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'GitLab CI'];
  
  const codeSnippets = [
    'kubectl apply -f deployment.yaml',
    'terraform plan -out=tfplan',
    'docker-compose up -d',
    'ansible-playbook deploy.yml',
    'helm install app ./chart',
    'aws ecs update-service'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(techInterval);
  }, []);

  useEffect(() => {
    const codeInterval = setInterval(() => {
      setCodeLineIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2500);

    return () => clearInterval(codeInterval);
  }, []);

  const scatteredIcons = [
    { Icon: Terminal, x: '5%', y: '10%', delay: '0s', size: 20 },
    { Icon: Server, x: '90%', y: '15%', delay: '0.5s', size: 16 },
    { Icon: Cloud, x: '8%', y: '35%', delay: '1s', size: 24 },
    { Icon: GitBranch, x: '95%', y: '40%', delay: '1.5s', size: 18 },
    { Icon: Zap, x: '3%', y: '60%', delay: '2s', size: 22 },
    { Icon: Database, x: '85%', y: '70%', delay: '2.5s', size: 20 },
    { Icon: Code, x: '12%', y: '80%', delay: '3s', size: 16 },
    { Icon: Settings, x: '92%', y: '85%', delay: '3.5s', size: 18 },
    { Icon: Globe, x: '6%', y: '25%', delay: '4s', size: 20 },
    { Icon: Shield, x: '88%', y: '30%', delay: '4.5s', size: 16 },
    { Icon: Terminal, x: '15%', y: '50%', delay: '5s', size: 18 },
    { Icon: Cloud, x: '80%', y: '55%', delay: '5.5s', size: 22 },
    { Icon: Database, x: '10%', y: '75%', delay: '6s', size: 19 },
    { Icon: Code, x: '75%', y: '20%', delay: '6.5s', size: 17 },
    { Icon: Settings, x: '20%', y: '90%', delay: '7s', size: 21 },
  ];

  return (
    <>
      {/* Scattered Background Icons - Fixed z-index to stay behind everything */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {scatteredIcons.map(({ Icon, x, y, delay, size }, index) => (
          <div
            key={index}
            className="absolute text-cyan-400/10 animate-pulse hidden md:block"
            style={{
              left: x,
              top: y,
              animationDelay: delay,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Icon size={size} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-left space-y-4 sm:space-y-6 relative order-2 lg:order-1 z-30">
            {/* Main Title with Gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 animate-fade-in relative z-30">
              <span className="bg-gradient-to-r from-white via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
                KRISHNA
              </span>
              <span className="block text-cyan-400 mt-2 relative drop-shadow-lg">
                MITTAL
                <div className="absolute -bottom-2 left-0 w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse"></div>
              </span>
            </h1>

            {/* Animated Role with Terminal Effect */}
            <div className="h-10 sm:h-12 md:h-14 lg:h-16 flex items-center relative z-30">
              <div className="flex items-center space-x-2 flex-wrap">
                <Terminal className="text-green-400 animate-pulse flex-shrink-0" size={18} />
                <span className="text-green-400 font-mono text-sm sm:text-base flex-shrink-0">~/career$</span>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-300 font-mono">
                  <span
                    key={currentRole}
                    className="inline-block animate-fade-in text-green-400"
                  >
                    {roles[currentRole]}
                  </span>
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
            </div>

            {/* Command Line Simulator */}
            <div className="bg-gray-900/90 rounded-lg p-3 sm:p-4 border border-cyan-400/30 backdrop-blur-sm font-mono text-xs sm:text-sm relative z-30">
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="ml-2 text-xs sm:text-sm">terminal</span>
              </div>
              <div className="text-green-400 break-all overflow-hidden">
                <span className="text-cyan-400">krishna@devops</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/infrastructure</span>
                <span className="text-white">$ </span>
                <span
                  key={codeLineIndex}
                  className="animate-fade-in"
                >
                  {codeSnippets[codeLineIndex]}
                </span>
                <span className="animate-pulse">_</span>
              </div>
            </div>

            {/* Tech Stack Ticker */}
            <div className="bg-gray-800/70 rounded-lg p-3 sm:p-4 border border-cyan-400/20 backdrop-blur-sm relative z-30">
              <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap gap-y-2">
                <span className="text-gray-400 text-xs sm:text-sm flex-shrink-0">Currently working with:</span>
                <span
                  key={currentTech}
                  className="text-cyan-400 font-semibold animate-fade-in text-sm sm:text-base"
                >
                  {technologies[currentTech]}
                </span>
                <div className="flex space-x-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse animation-delay-200"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse animation-delay-300"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Tagline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed relative z-30 drop-shadow-md">
              Orchestrating <span className="text-cyan-400 font-semibold">scalable infrastructure</span> through 
              <span className="text-green-400 font-semibold"> automation</span>, 
              <span className="text-orange-400 font-semibold"> containerization</span>, and 
              <span className="text-purple-400 font-semibold"> continuous delivery</span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 pointer-events-auto relative z-30">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <GitBranch size={16} className="group-hover:rotate-12 transition-transform flex-shrink-0" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 border-2 border-gray-600 hover:border-cyan-400 text-gray-200 hover:text-cyan-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get In Touch</span>
                  <Zap size={16} className="group-hover:text-yellow-400 transition-colors flex-shrink-0" />
                </span>
              </button>
            </div>

            {/* Enhanced Stats with Icons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8 pointer-events-auto relative z-30">
              <div className="group text-left bg-gray-800/50 p-2 sm:p-3 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                  <Server className="text-cyan-400 flex-shrink-0" size={12} />
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-cyan-400">1+</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="group text-left bg-gray-800/50 p-2 sm:p-3 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                  <Cloud className="text-green-400 flex-shrink-0" size={12} />
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-green-400">10+</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Deployed</div>
              </div>
              <div className="group text-left bg-gray-800/50 p-2 sm:p-3 rounded-lg border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                  <Zap className="text-orange-400 flex-shrink-0" size={12} />
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-orange-400">95.5%</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Uptime Achieved</div>
              </div>
            </div>

            {/* Additional Tech Highlight */}
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-6 relative z-30">
              {['CI/CD', 'Monitoring', 'Security', 'Scalability'].map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center space-x-2 bg-gray-800/60 px-2 sm:px-3 py-1 rounded-full border border-gray-700/50 text-xs sm:text-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Photo placeholder with proper z-index */}
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2 z-30">
            <div className="relative group">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full border-4 border-cyan-400/30 flex items-center justify-center backdrop-blur-sm group-hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden">
                <div className="text-center text-gray-300 z-10 px-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mx-auto mb-2 sm:mb-4 bg-gradient-to-br from-gray-600/50 to-gray-700/50 rounded-full flex items-center justify-center border-2 border-gray-500/30">
                    <img
                      src="/path/to/your-photo.jpg"
                      alt="Krishna Mittal"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      draggable={false}
                    />
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    {/* </svg> */}
                  </div>
                  <p className="text-xs sm:text-sm font-mono"></p>
                  <p className="text-xs text-gray-500 mt-1 hidden sm:block">Click to add your photo</p>
                </div>
              </div>
              
              {/* Enhanced Decorative elements with proper z-index */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-cyan-400 rounded-full animate-pulse flex items-center justify-center z-40">
                <Terminal size={10} className="text-gray-900 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-400 rounded-full animate-pulse animation-delay-200 flex items-center justify-center z-40">
                <Server size={8} className="text-gray-900 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-orange-400 rounded animate-pulse animation-delay-300 z-40"></div>
              <div className="absolute top-1/4 -left-3 sm:-left-4 md:-left-6 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-purple-400 rounded-full animate-pulse animation-delay-100 z-40"></div>
            </div>

            {/* Additional floating elements - Hidden on mobile and small tablets with proper z-index */}
            <div className="absolute top-8 left-8 w-12 h-12 border-2 border-cyan-400/20 rounded-lg rotate-12 animate-pulse hidden xl:block z-30"></div>
            <div className="absolute bottom-12 right-12 w-10 h-10 border-2 border-green-400/20 rounded-full -rotate-12 animate-pulse animation-delay-300 hidden xl:block z-30"></div>
          </div>
        </div>
      </div>
    </>
  );
};
