
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import { Navigation } from '../components/Navigation';
import { HeroContent } from '../components/HeroContent';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ExtraCurricularSection } from '../components/ExtraCurricularSection';
import { CICDPipelineSection } from '../components/CICDPipelineSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { DevOpsScene } from '../components/DevOpsScene';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorBoundary } from '../components/ErrorBoundary';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with 3D Scene - Fixed z-index and spacing */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ErrorBoundary>
            <Canvas
              camera={{ position: [0, 0, 8], fov: 60 }}
              style={{ width: '100%', height: '100%' }}
              gl={{ 
                antialias: true, 
                alpha: true,
                powerPreference: "high-performance"
              }}
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
            >
              <Suspense fallback={null}>
                <Environment preset="night" />
                <Stars 
                  radius={300} 
                  depth={60} 
                  count={5000} 
                  factor={7} 
                  saturation={0} 
                  fade 
                  speed={1} 
                />
                <DevOpsScene />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.3}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 3}
                />
              </Suspense>
            </Canvas>
          </ErrorBoundary>
        </div>
        
        <HeroContent />
        
        {/* Scroll Indicator - Fixed z-index */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-cyan-400 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ExtraCurricularSection />
      <CICDPipelineSection />
      <ProjectsSection />
      <ContactSection />

      <Suspense fallback={<LoadingSpinner />}>
        {/* Additional loading states handled by Suspense */}
      </Suspense>
    </div>
  );
};

export default Index;
