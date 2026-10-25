import React, { useState } from 'react';
import { ArrowUpRight, Eye, ExternalLink, Layers } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  onInspect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [imgSourceMode, setImgSourceMode] = useState<'local' | 'remote' | 'fallback'>('local');

  const currentSlide = project.slides[activeSlideIndex] || project.slides[0];
  const currentImgSrc =
    imgSourceMode === 'local'
      ? currentSlide.localSrc
      : imgSourceMode === 'remote'
      ? currentSlide.remoteSrc
      : '';

  const handleImageError = () => {
    if (imgSourceMode === 'local') {
      setImgSourceMode('remote');
    } else {
      setImgSourceMode('fallback');
    }
  };

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
    setImgSourceMode('local');
  };

  return (
    <article
      className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-[#0A0A0C] p-6 sm:p-7 transition-all duration-200 hover:border-red-600/60 hover:bg-[#0D0D10] focus-within:border-red-600"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Top Meta Row: Editorial Project Index + Category + Live Domain */}
      <div>
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-zinc-900">
          <div className="flex items-baseline gap-3 min-w-0">
            <span className="font-mono-tabular text-sm font-medium text-red-500 shrink-0">
              {project.number}
            </span>
            <span className="text-zinc-700 select-none" aria-hidden="true">
              /
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-zinc-400 truncate">
              {project.category}
            </span>
          </div>

          <span className="font-mono-tabular text-[11px] text-zinc-500 truncate max-w-[180px] sm:max-w-[220px]">
            {project.displayDomain}
          </span>
        </div>

        {/* Laptop / Cinema Browser Preview Container */}
        <div className="mt-5 relative rounded-xl border border-zinc-800/80 bg-[#050507] p-2.5 sm:p-3 overflow-hidden transition-transform duration-200 group-hover:border-zinc-700/90">
          {/* Subtle Top Browser Chrome */}
          <div className="flex items-center justify-between gap-2 px-2.5 py-1.5 mb-2 rounded-lg bg-zinc-950/90 border border-zinc-900">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-red-500/80 transition-colors" />
              <span className="w-2 h-2 rounded-full bg-zinc-800" />
              <span className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
            <div className="font-mono-tabular text-[10px] text-zinc-400 truncate px-2">
              https://{project.displayDomain}
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live website in new tab`}
              className="text-zinc-400 hover:text-red-500 transition-colors p-0.5 focus-visible:outline-2 focus-visible:outline-red-500 rounded"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* 16:10 Website Viewport Frame */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-950 border border-zinc-900">
            {imgSourceMode !== 'fallback' ? (
              <img
                src={currentImgSrc}
                alt={currentSlide.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={handleImageError}
                className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-[1.03]"
              />
            ) : (
              /* Resilient Fallback Container per Zero-Broken-Image Policy */
              <div
                className="h-full w-full flex flex-col items-center justify-center p-6 text-center"
                style={{ backgroundColor: project.previewBrowser.surfaceHex }}
              >
                <Layers className="w-8 h-8 text-red-500 mb-2 opacity-80" />
                <p className="font-display text-xl tracking-wide text-white uppercase">
                  {project.title}
                </p>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                  {project.previewBrowser.heroHeadline}
                </p>
              </div>
            )}

            {/* Measured Contrast Scrim + Authentic Website UI Overlay on First Slide */}
            <div className="
              absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20
              flex flex-col justify-between p-4 sm:p-5
            ">
              {/* Top simulated live header bar */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-xs sm:text-sm font-bold tracking-wider uppercase text-white drop-shadow">
                  {project.title}
                </span>
                <span className="font-mono-tabular text-[10px] text-zinc-200 bg-black/65 backdrop-blur-xs px-2.5 py-0.5 rounded border border-white/10">
                  {project.previewBrowser.badgeText}
                </span>
              </div>

              {/* Simulated Live Hero Content */}
              {activeSlideIndex === 0 ? (
                <div className="max-w-[90%]">
                  <p className="font-mono-tabular text-[9px] sm:text-[10px] tracking-widest uppercase text-zinc-300 mb-1 truncate">
                    {project.previewBrowser.heroEyebrow}
                  </p>
                  <p className="font-display text-lg sm:text-2xl font-bold leading-tight text-white tracking-tight line-clamp-2">
                    {project.previewBrowser.heroHeadline}
                  </p>
                  <p className="text-[11px] text-zinc-300 mt-1 line-clamp-1 hidden sm:block">
                    {project.previewBrowser.heroSubtext}
                  </p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span
                      className="inline-block px-2.5 py-1 text-[10px] font-semibold text-white rounded"
                      style={{ backgroundColor: project.previewBrowser.accentHex }}
                    >
                      {project.previewBrowser.primaryCtaText}
                    </span>
                    <span className="inline-block px-2.5 py-1 text-[10px] font-medium text-zinc-200 bg-black/60 border border-white/15 rounded">
                      {project.previewBrowser.secondaryCtaText}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="max-w-[92%] bg-black/75 backdrop-blur-xs border border-white/10 rounded-lg p-2.5">
                  <p className="font-mono-tabular text-[10px] uppercase tracking-wider text-red-400">
                    {currentSlide.label}
                  </p>
                  <p className="text-xs text-zinc-200 mt-0.5 line-clamp-2">
                    {currentSlide.caption}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Laptop Base Lip + Multi-View Switcher Controls */}
          <div className="mt-2.5 flex items-center justify-between gap-2 pt-1">
            {project.slides.length > 1 ? (
              <div
                className="flex items-center gap-1"
                role="tablist"
                aria-label={`${project.title} preview views`}
              >
                {project.slides.map((slide, idx) => (
                  <button
                    key={slide.label}
                    type="button"
                    role="tab"
                    aria-selected={activeSlideIndex === idx}
                    onClick={() => handleSlideChange(idx)}
                    className={`px-2 py-1 text-[11px] font-medium rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-500 ${
                      activeSlideIndex === idx
                        ? 'bg-red-600/20 text-red-400 border border-red-500/40'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                    }`}
                  >
                    {slide.label}
                  </button>
                ))}
              </div>
            ) : (
              <span className="text-[11px] text-zinc-500 font-mono-tabular">
                Verified Live Preview · {project.location}
              </span>
            )}

            <button
              type="button"
              onClick={() => onInspect(project)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-500"
            >
              <Eye className="w-3 h-3 text-red-500" />
              <span>Inspect Audit</span>
            </button>
          </div>
        </div>

        {/* Project Title & Location */}
        <div className="mt-6 flex items-baseline justify-between gap-4">
          <h3
            id={`project-title-${project.id}`}
            className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase group-hover:text-red-500 transition-colors"
          >
            {project.title}
          </h3>
          <span className="text-xs text-zinc-400 whitespace-nowrap shrink-0">
            {project.location}
          </span>
        </div>

        {/* Concise Custom Description Based on Live Website Inspection */}
        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-zinc-300">
          {project.description}
        </p>

        {/* Optional Branding Note (Specifically for Iron//Works URL discrepancy) */}
        {project.brandingNote && (
          <p className="mt-2.5 text-xs leading-relaxed text-zinc-400 border-t border-zinc-900 pt-2.5">
            <strong className="text-zinc-200 font-medium">Live Branding Note:</strong>{' '}
            {project.brandingNote}
          </p>
        )}
      </div>

      {/* Card Footer: Unboxed Verified Feature Metadata + View Live Project Link */}
      <div className="mt-6 pt-5 border-t border-zinc-900 flex flex-col gap-4">
        {/* Zero-Pill Unboxed Metadata with Typographic Separators */}
        <div
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400"
          aria-label="Verified project features"
        >
          {project.verifiedFeatures.map((feat, idx) => (
            <React.Fragment key={feat}>
              <span className="text-zinc-300 font-medium">{feat}</span>
              {idx < project.verifiedFeatures.length - 1 && (
                <span className="text-red-500/80 select-none" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Primary Action Row */}
        <div className="flex items-center justify-between gap-4 pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 rounded whitespace-nowrap shrink-0"
          >
            <span>View Live Project</span>
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => onInspect(project)}
            className="text-xs font-medium text-zinc-400 hover:text-zinc-200 underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-500 rounded"
          >
            Design Breakdown
          </button>
        </div>
      </div>
    </article>
  );
};
