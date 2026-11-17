import React from 'react';
import { Award, GraduationCap, Building2, UserCheck, CheckCircle2, HeartHandshake, ShieldCheck, Mail, Sparkles, FileText } from 'lucide-react';
import { projectInfo } from '../data/projectData';

export default function AcademicLeadership() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Academic Supervision & Institutional Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Amrita Vishwa Vidyapeetham & Research Guidance
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Carried out under the rigorous academic mentorship of the Department of Computer Science and Engineering, Amrita School of Computing, Coimbatore.
          </p>
        </div>

        {/* Leadership Grid: Guide + Amrita Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Guide Card (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full -z-10" />

            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-900 via-rose-950 to-slate-800 border-2 border-amber-400/50 flex items-center justify-center p-1 shadow-lg shrink-0">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center text-amber-400">
                    <UserCheck className="w-9 h-9" />
                    <span className="text-[9px] font-mono font-bold mt-0.5 text-slate-300">ADVISOR</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {projectInfo.guide.name}
                    </h3>
                    <span className="px-2 py-0.5 text-[11px] font-semibold rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      Thesis Advisor
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-rose-300 mt-0.5">
                    {projectInfo.guide.designation}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {projectInfo.guide.department}, {projectInfo.guide.school}
                  </p>
                  <p className="text-xs text-slate-300 font-medium">
                    {projectInfo.guide.institution}
                  </p>
                </div>
              </div>

              {/* Research Supervision Quote */}
              <div className="my-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 italic text-slate-300 text-xs sm:text-sm leading-relaxed">
                "{projectInfo.guide.quote}"
              </div>

              {/* Key Domains & Supervised Contributions */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Supervisory Domains & Methodological Backing
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cyber-Physical System Architecture & First-Principles Physics Twins</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Time-Series Microclimate Epidemiology & Attention Forecasters</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Deterministic Biological Phenology Interlocks & Agri Safety Gating</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Edge Small Language Models & RAG Quantization for Rural Offline Deploy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact / Academic email */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <code className="text-slate-300">{projectInfo.guide.email}</code>
              </span>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Supervision: M.Tech 2025–2026
              </span>
            </div>
          </div>

          {/* Amrita Vishwa Vidyapeetham & Leadership Card (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={projectInfo.leadership.logos.emblem} 
                  alt="Amrita Emblem" 
                  className="w-16 h-16 object-contain rounded-xl bg-white/5 p-1 border border-white/10"
                />
                <div>
                  <h4 className="text-lg font-black text-white">
                    AMRITA VISHWA VIDYAPEETHAM
                  </h4>
                  <p className="text-xs text-rose-300 font-semibold">
                    Amrita School of Computing, Coimbatore
                  </p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    NAAC A++ • NIRF #7 Ranked
                  </span>
                </div>
              </div>

              {/* Leadership Roster */}
              <div className="space-y-4 mb-6 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Chancellor</span>
                  <p className="font-bold text-white text-sm">
                    {projectInfo.leadership.chancellor}
                  </p>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    "Education for Life & Compassion-Driven Scientific Research"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Principal</span>
                    <p className="font-bold text-white text-xs">{projectInfo.leadership.principal}</p>
                    <p className="text-[10px] text-slate-400">School of Computing</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Department Chair</span>
                    <p className="font-bold text-white text-xs">{projectInfo.leadership.hod}</p>
                    <p className="text-[10px] text-slate-400">Dept. of CSE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Researcher Info */}
            <div className="pt-4 border-t border-slate-800 bg-emerald-950/20 -mx-6 -mb-6 p-6 rounded-b-2xl border-t border-emerald-900/40">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 block">
                    Degree Candidate / Researcher
                  </span>
                  <p className="font-black text-white text-sm">
                    {projectInfo.author.name}
                  </p>
                  <p className="text-xs text-slate-300 font-mono">
                    {projectInfo.author.rollNo} • M.Tech CSE
                  </p>
                </div>
                <GraduationCap className="w-8 h-8 text-emerald-400 opacity-80" />
              </div>
            </div>

          </div>

        </div>

        {/* Bonafide Certificate Reproduction Panel */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-slate-950/90 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm sm:text-base font-bold text-white">
                Official Bonafide Certificate Transcript (Department of CSE)
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
              M.Tech CSE Thesis Bonafide Record
            </span>
          </div>

          <div className="font-serif text-slate-300 text-xs sm:text-sm leading-relaxed p-5 bg-slate-900/40 rounded-xl border border-slate-800/80 space-y-3">
            <p className="text-center font-bold text-white tracking-wider text-sm sm:text-base uppercase font-sans">
              AMRITA VISHWA VIDYAPEETHAM • AMRITA SCHOOL OF COMPUTING, COIMBATORE
            </p>
            <p className="text-center font-semibold text-rose-300 text-xs font-sans">
              DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
            </p>
            <p className="pt-2">
              "This is to certify that the thesis entitled <strong className="text-white font-sans">'{projectInfo.title.toUpperCase()}'</strong>, submitted by <strong className="text-white font-sans">{projectInfo.author.name.toUpperCase()} ({projectInfo.author.rollNo})</strong>, in partial fulfillment of the requirements for the award of degree of <strong className="text-emerald-300 font-sans">{projectInfo.author.degree} in {projectInfo.author.program}</strong>, is a bonafide record of the work carried out under my guidance and supervision at the Department of Computer Science and Engineering, Amrita School of Computing, Coimbatore."
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800/60 font-sans text-xs">
              <div>
                <strong className="text-white block">{projectInfo.guide.name}</strong>
                <span className="text-slate-400">Thesis Advisor & Assistant Professor</span><br />
                <span className="text-slate-400">Department of Computer Science and Engineering</span>
              </div>
              <div className="sm:text-right">
                <strong className="text-white block">{projectInfo.leadership.hod}</strong>
                <span className="text-slate-400">Chairperson & Professor</span><br />
                <span className="text-slate-400">Department of Computer Science and Engineering</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
