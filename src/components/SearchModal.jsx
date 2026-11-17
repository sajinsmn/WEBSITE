import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft, BookOpen, ShieldCheck, Cpu } from 'lucide-react';
import { projectInfo } from '../data/projectData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const inputRef = useRef(null);

  const categories = ['All', 'Advisors', 'Physics', 'Sequence AI', 'Computer Vision', 'Bio-Safety', 'Edge Compilation'];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = projectInfo.searchCorpus.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesQuery = query === '' || 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.snippet.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl studio-modal overflow-hidden flex flex-col max-h-[82vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="flex items-center gap-3.5 px-6 py-5 border-b border-black/[0.08] bg-white">
          <Search className="w-5 h-5 text-[#0052cc] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guide, Amrita, models (YOLO, LSTM, SLM), physics, safety rules..."
            className="w-full bg-transparent text-[#0d0d11] placeholder-[#a0a0ab] text-[15px] focus:outline-none font-medium"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-[#62626e] hover:text-[#0d0d11] p-1 rounded-md transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#62626e] hover:text-[#0d0d11] rounded-lg bg-[#f0f0f4] hover:bg-[#e6e6ec] text-xs px-2.5 font-mono font-bold transition-colors cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Filter Categories Horizontal Pill Bar */}
        <div className="px-6 py-3.5 border-b border-black/[0.06] bg-[#f7f7f9] overflow-x-auto flex items-center gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#0062ff] to-[#4f46e5] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 text-[#62626e]">
              <div className="w-12 h-12 rounded-2xl bg-[#f0f0f4] mx-auto flex items-center justify-center text-[#62626e] mb-3">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-[#0d0d11]">No matching research topics found</p>
              <p className="text-xs text-[#a0a0ab] mt-1">Try querying "Anbazhagan", "LSTM", "YOLO", "Amrita", or "Safety".</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={onClose}
                className="block p-4 rounded-2xl bg-[#f7f7f9] hover:bg-white border border-black/[0.06] hover:border-black/[0.18] hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0052cc] bg-[#eef4ff] px-2.5 py-0.5 rounded-full border border-[#cce0ff]">
                    {item.category}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#a0a0ab] group-hover:text-[#0052cc] group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-sm font-bold text-[#0d0d11] group-hover:text-[#0052cc] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#62626e] mt-1 leading-relaxed line-clamp-2">
                  {item.snippet}
                </p>
              </a>
            ))
          )}
        </div>

        {/* Modal Footer Hotkey Hint */}
        <div className="px-6 py-3.5 border-t border-black/[0.06] bg-white flex items-center justify-between text-[11px] text-[#62626e]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Search corpus updated with latest thesis research benchmarks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#a0a0ab]">Press ESC to close</span>
          </div>
        </div>

      </div>
    </div>
  );
}
