import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Command } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) && 
          document.activeElement.tagName !== 'INPUT' && 
          document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Objectives', href: '#focus' },
    { name: 'Pipeline', href: '#workflow' },
    { name: 'Results', href: '#graphs' },
    { name: 'Benchmarks', href: '#benchmarks' },
    { name: 'Supervision', href: '#supervision' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        
        {/* Brand: Clean Minimal Academic Title */}
        <a href="#overview" className="flex items-center gap-2.5 shrink-0 group">
          <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight group-hover:text-[#0062ff] transition-colors">
            Cyber-Physical Crop Twin
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200/80">
            M.Tech Thesis
          </span>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Search Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 text-xs font-medium border border-slate-200/80 transition-all cursor-pointer shadow-2xs"
            title="Search thesis documentation (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline text-xs">Search</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">
              <Command className="w-2.5 h-2.5" />K
            </kbd>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu (Clean Frosted Drawer) */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 my-2 p-4 rounded-2xl bg-white border border-slate-200 shadow-lg animate-in fade-in zoom-in-95 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#0062ff] hover:bg-blue-50/60 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-100">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-[#0062ff] bg-blue-50 rounded-xl flex items-center justify-between border border-blue-200/60"
              >
                <span>Search Documentation</span>
                <kbd className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-blue-200">⌘K</kbd>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
