import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectOverview from './components/ProjectOverview';
import ProjectFocusAndAchievements from './components/ProjectFocusAndAchievements';
import HowProjectWorks from './components/HowProjectWorks';
import AcademicSupervision from './components/AcademicSupervision';
import GraphsAndData from './components/GraphsAndData';
import ComparativeBenchmarks from './components/ComparativeBenchmarks';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ImageLightboxModal from './components/ImageLightboxModal';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleOpenImage = (imgData) => {
    setActiveImage(imgData);
  };

  const handleCloseImage = () => {
    setActiveImage(null);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#0f172a] flex flex-col font-sans selection:bg-[#0062ff] selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Sections - Structured and Dense Pacing */}
      <main className="flex-1 divide-y divide-slate-200/60">
        <ProjectOverview 
          onOpenSearch={() => setIsSearchOpen(true)} 
          onOpenImage={handleOpenImage} 
        />
        <ProjectFocusAndAchievements 
          onOpenImage={handleOpenImage} 
        />
        <HowProjectWorks 
          onOpenImage={handleOpenImage} 
        />
        <GraphsAndData 
          onOpenImage={handleOpenImage} 
        />
        <ComparativeBenchmarks />
        <AcademicSupervision />
      </main>

      {/* Clean Footer */}
      <Footer onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Modal Quick Search */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Research Asset Lightbox Modal */}
      <ImageLightboxModal
        isOpen={!!activeImage}
        onClose={handleCloseImage}
        imageData={activeImage}
      />
    </div>
  );
}
