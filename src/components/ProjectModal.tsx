import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, Globe, CheckCircle2, Monitor, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [viewMode, setViewMode] = useState<'audit' | 'live-embed'>('audit');

  useEffect(() => {
    setViewMode('audit');
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-zinc-800 bg-[#0A0A0D] text-zinc-100 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-800 bg-[#070709] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono-tabular text-sm font-semibold text-red-500">
              PROJECT {project.number}
            </span>
            <span className="text-zinc-700" aria-hidden="true">
              ·
            </span>
            <span className="text-xs uppercase tracking-wider text-zinc-400 truncate">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Segmented Control for Audit vs Live Interactive Embed */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-900 border border-zinc-800">
              <button
                type="button"
                onClick={() => setViewMode('audit')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  viewMode === 'audit'
                    ? 'bg-red-600 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Design Audit
              </button>
              <button
                type="button"
                onClick={() => setViewMode('live-embed')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  viewMode === 'live-embed'
                    ? 'bg-red-600 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Live Viewport</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project inspection modal"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-red-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Title & Direct Link Banner */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-zinc-900">
            <div>
              <p className="text-xs font-mono-tabular uppercase tracking-widest text-red-500">
                {project.location}
              </p>
              <h2
                id="modal-project-title"
                className="mt-1 font-display text-3xl sm:text-5xl font-bold uppercase tracking-wide text-white"
              >
                {project.title}
              </h2>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              <Globe className="w-4 h-4" />
              <span>Open Live Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {viewMode === 'live-embed' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 bg-zinc-900/70 px-4 py-2.5 rounded-lg border border-zinc-800">
                <span className="font-mono-tabular truncate">
                  Live Source: {project.liveUrl}
                </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 underline underline-offset-4 whitespace-nowrap shrink-0 ml-4"
                >
                  Open in full browser tab ↗
                </a>
              </div>
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 bg-black">
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} Live Website Preview`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <>
              {/* Visual Gallery Strip from Live Site */}
              <div
                className={`grid gap-4 ${
                  project.slides.length > 1 ? ' sm:grid-cols-3' : 'grid-cols-1'
                }`}
              >
                {project.slides.map((slide) => (
                  <figure
                    key={slide.label}
                    className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                      <img
                        src={slide.localSrc}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== slide.remoteSrc) {
                            target.src = slide.remoteSrc;
                          }
                        }}
                        alt={slide.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <figcaption className="p-3 text-xs text-zinc-300 border-t border-zinc-900">
                      <strong className="block text-white font-medium mb-0.5">
                        {slide.label}
                      </strong>
                      <span className="text-zinc-400">{slide.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              {/* Executive Overview */}
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-950/60 p-5">
                <h3 className="font-display text-lg uppercase tracking-wider text-white mb-2">
                  Verified Website Overview
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                  {project.description}
                </p>
                {project.brandingNote && (
                  <p className="mt-3 text-xs text-amber-300/90 bg-amber-950/30 border border-amber-800/40 rounded-lg px-3.5 py-2.5">
                    {project.brandingNote}
                  </p>
                )}
              </div>

              {/* 2x2 Design & Technical Audit Breakdown */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-[#0D0D11] p-5">
                  <span className="font-mono-tabular text-xs uppercase tracking-wider text-red-500">
                    01 · Typography & Hierarchy
                  </span>
                  <p className="mt-2 text-sm text-zinc-200 leading-relaxed">
                    {project.designHighlights.typography}
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-[#0D0D11] p-5">
                  <span className="font-mono-tabular text-xs uppercase tracking-wider text-red-500">
                    02 · Color Identity
                  </span>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    {project.designHighlights.palette.map((swatch) => (
                      <div key={swatch.name} className="flex items-center gap-2.5">
                        <span
                          className="w-6 h-6 rounded-md border border-white/20 shrink-0"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <div>
                          <p className="text-xs font-medium text-white">{swatch.name}</p>
                          <p className="font-mono-tabular text-[11px] text-zinc-400">
                            {swatch.hex}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-[#0D0D11] p-5">
                  <span className="font-mono-tabular text-xs uppercase tracking-wider text-red-500">
                    03 · Information Architecture & Navigation
                  </span>
                  <p className="mt-2 text-sm text-zinc-200 leading-relaxed">
                    {project.designHighlights.navigation}
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-[#0D0D11] p-5">
                  <span className="font-mono-tabular text-xs uppercase tracking-wider text-red-500">
                    04 · Customer Conversion & Responsiveness
                  </span>
                  <p className="mt-2 text-sm text-zinc-200 leading-relaxed">
                    {project.designHighlights.customerExperience}{' '}
                    <span className="text-zinc-400">
                      {project.designHighlights.responsiveVerified}
                    </span>
                  </p>
                </div>
              </div>

              {/* Verified Features Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-zinc-900 text-xs text-zinc-400">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-zinc-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Verified Features:
                  </span>
                  {project.verifiedFeatures.map((feat, i) => (
                    <React.Fragment key={feat}>
                      <span>{feat}</span>
                      {i < project.verifiedFeatures.length - 1 && (
                        <span className="text-red-500" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  Inspected from live deployment
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
