import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function ImageLightboxModal({ isOpen, onClose, imageData }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageData) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl transition-all duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl studio-modal overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.08] bg-[#f7f7f9]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs font-mono font-bold text-[#62626e] uppercase tracking-wider ml-2">
              {imageData.tag || "High-Resolution Research Asset"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-[#62626e] hover:text-[#0d0d11] rounded-lg bg-white hover:bg-[#e6e6ec] text-xs px-2.5 font-mono font-bold transition-colors cursor-pointer border border-black/[0.06]"
            >
              ESC
            </button>
          </div>
        </div>

        {/* High-Res Image Canvas Viewport */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 bg-[#0d0d11] flex items-center justify-center">
          <img
            src={imageData.src}
            alt={imageData.title}
            className="w-auto h-auto max-h-[62vh] max-w-full object-contain rounded-xl shadow-md border border-white/[0.10] bg-white"
          />
        </div>

        {/* Caption & Metadata Footer */}
        <div className="px-6 py-4.5 border-t border-black/[0.08] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <h4 className="text-sm font-bold text-[#0d0d11]">
              {imageData.title}
            </h4>
            <p className="text-xs text-[#62626e] mt-0.5 max-w-2xl">
              {imageData.description}
            </p>
          </div>
          <a
            href={imageData.src}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#0d0d11] text-white hover:bg-[#0052cc] text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>Open Raw Image</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
