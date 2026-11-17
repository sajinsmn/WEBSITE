import React from 'react';
import { ArrowUp, Search, Mail, ExternalLink, ShieldCheck, ArrowUpRight, Building2 } from 'lucide-react';
import { projectInfo } from '../data/projectData';

export default function Footer({ onOpenSearch }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 text-xs border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Call to Action Row (Formal Documentation Header) */}
        <div className="pb-12 border-b border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-full inline-block shadow-2xs">
              M.TECH THESIS DOCUMENTATION ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Thesis Documentation & Empirical Verification
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Access verified empirical performance curves, confusion matrices, and end-to-end cyber-physical system architecture blueprints.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="gapsy-btn-primary"
            >
              <span>Search Thesis Corpus</span>
              <div className="gapsy-btn-arrow">
                <Search className="w-3.5 h-3.5" />
              </div>
            </button>
            <button
              onClick={scrollToTop}
              className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors flex items-center gap-2 cursor-pointer border border-slate-200/80 shadow-2xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-slate-200/80">
          
          {/* Col 1: Project Identity & Institution (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
                Hardware-Free Cyber-Physical Digital Twin
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Pre-Symptomatic Disease Risk Forecasting & Adaptive Agronomic Mitigation
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Master of Technology research thesis submitted to the Department of Computer Science and Engineering, Amrita School of Computing, Coimbatore.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 max-w-sm shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0062ff] flex items-center justify-center shrink-0 border border-blue-100">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight text-slate-600">
                <span className="text-[#0062ff] block text-[9px] font-mono font-bold uppercase">Academic Institution:</span>
                <strong className="text-slate-900 font-semibold block">Amrita Vishwa Vidyapeetham</strong>
                <span>Amrita School of Computing, Coimbatore</span>
              </div>
            </div>
          </div>

          {/* Col 2: Authorship & Guidance (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
              AUTHORSHIP & GUIDANCE
            </span>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs shadow-2xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-mono font-bold">Lead Author & Project Owner</span>
                <div className="flex items-center justify-between mt-0.5">
                  <strong className="text-slate-900 text-sm font-bold">{projectInfo.author.name}</strong>
                  <span className="font-mono text-[10px] text-[#0062ff] bg-blue-50 px-2 py-0.5 rounded font-bold border border-blue-200">
                    {projectInfo.author.rollNo}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  M.Tech Candidate, Computer Science & Engineering
                </p>
                <a 
                  href={`mailto:${projectInfo.author.email}`}
                  className="font-mono text-[11px] text-[#0062ff] hover:underline flex items-center gap-1 mt-1 font-semibold transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  {projectInfo.author.email}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-slate-500 block text-[10px] uppercase font-mono font-bold">Thesis Advisor & Research Guide</span>
                <strong className="text-slate-900 font-bold">{projectInfo.guide.name}</strong>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  {projectInfo.guide.designation}, {projectInfo.guide.department}
                </p>
                <a 
                  href={`mailto:${projectInfo.guide.email}`}
                  className="font-mono text-[11px] text-[#0062ff] hover:underline flex items-center gap-1 mt-1 font-bold transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  {projectInfo.guide.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
              QUICK SECTIONS
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#overview" className="hover:text-[#0062ff] transition-colors">Project Overview</a>
              </li>
              <li>
                <a href="#focus" className="hover:text-[#0062ff] transition-colors">Research Objectives & Outcomes</a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-[#0062ff] transition-colors">System Methodology & Pipeline</a>
              </li>
              <li>
                <a href="#graphs" className="hover:text-[#0062ff] transition-colors">Experimental Results & Data</a>
              </li>
              <li>
                <a href="#benchmarks" className="hover:text-[#0062ff] transition-colors">Comparative Benchmarks</a>
              </li>
              <li>
                <a href="#supervision" className="hover:text-[#0062ff] transition-colors">Faculty Supervision & Mentorship</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="font-semibold text-slate-900">
            © 2026 Sajin Simon. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>M.Tech Research Project</span>
            <span>•</span>
            <span>Amrita School of Computing, Coimbatore</span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              NAAC A++ Institution
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
