import React, { useState } from 'react';
import {
  ArrowRight,
  Monitor,
  RefreshCw,
  Target,
  Search,
  Lightbulb,
  Pencil,
  Code2,
  Send,
  X,
} from 'lucide-react';
import { SELECTED_PROJECTS, ProjectItem } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';

interface LandingDemoCard {
  title: string;
  category: string;
  image: string;
  liveUrl: string;
}

const LANDING_PROJECTS: LandingDemoCard[] = [
  {
    title: 'Tea Cafe',
    category: 'Restaurant / Cafe',
    image: '/assets/landing/laptop-1-teacafe.png',
    liveUrl: 'https://tea-cafe-sepia.vercel.app/',
  },
  {
    title: 'The Punjabi Rasoi',
    category: 'Restaurant',
    image: '/assets/landing/laptop-2-punjabi.png',
    liveUrl: 'https://44-the-food-hub-hitesh9090s-projects.vercel.app/',
  },
  {
    title: "Joey's Pizza",
    category: 'Restaurant / Cafe',
    image: '/assets/landing/laptop-3-joeys.png',
    liveUrl: 'https://joeys-pizza-live.vercel.app/',
  },
  {
    title: 'Fitness Fanatic',
    category: 'Fitness / Gym',
    image: '/assets/landing/laptop-4-fitness.png',
    liveUrl: 'https://fitness-fanatic-hub-hitesh9090s-projects.vercel.app/',
  },
];

export default function App() {
  const [showAllDemosModal, setShowAllDemosModal] = useState(false);
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Hitesh, I'm ${formData.name || 'interested in a website'}${
      formData.businessName ? ` (${formData.businessName})` : ''
    }${formData.phone ? `, Phone: ${formData.phone}` : ''}. ${
      formData.message || ''
    }`.trim();
    setSubmitted(true);
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E51923] selection:text-white">
      {/* Main Page Container matching the exact proportions of the reference design */}
      <div className="mx-auto w-full max-w-[1024px] bg-black shadow-2xl">
        {/* ===================================================================
            1. TOP NAVIGATION BAR (Exact match to reference)
           =================================================================== */}
        <header className="border-b border-[#1A1A1A] bg-black px-5 sm:px-9 h-[68px] flex items-center justify-between gap-4">
          {/* Left: Stacked Brand Title */}
          <a href="#home" className="block leading-[1.15] shrink-0">
            <span className="block text-[11px] sm:text-[12px] font-bold tracking-[0.04em] text-[#E51923] uppercase">
              WEB DESIGNER
            </span>
            <span className="block text-[11px] sm:text-[12px] font-medium tracking-[0.04em] text-[#9CA3AF] uppercase">
              DIGITAL CREATOR
            </span>
          </a>

          {/* Center: 5 Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-[13px] font-normal text-[#D4D4D8]"
          >
            <a
              href="#home"
              className="relative py-1.5 text-[#E51923] font-medium after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1.5px] after:bg-[#E51923]"
            >
              Home
            </a>
            <a href="#work" className="py-1.5 hover:text-white transition-colors">
              Work
            </a>
            <a href="#services" className="py-1.5 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="py-1.5 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="py-1.5 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Right: Available for Freelance + Red Indicator */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-medium tracking-[0.08em] text-[#D4D4D8] uppercase shrink-0 hover:text-white transition-colors"
          >
            <span>AVAILABLE FOR FREELANCE</span>
            <span className="w-2 h-2 rounded-full bg-[#E51923]" />
          </a>
        </header>

        {/* ===================================================================
            2. HERO SECTION (100% Pixel-Identical to Reference with Interactive Hit Targets)
           =================================================================== */}
        <section
          id="home"
          className="relative w-full border-b border-[#1A1A1A] bg-black overflow-hidden"
        >
          <div className="relative w-full aspect-[819/550]">
            <img
              src="/assets/landing/hero-full.png"
              alt="Hello, I'm Hitesh — Web Designer & AI Automation Creator"
              className="w-full h-full object-cover select-none block"
            />

            {/* Interactive Hit Target: "Get Your Free Demo Website ->" Button */}
            <a
              href="#contact"
              aria-label="Get Your Free Demo Website"
              className="absolute left-[3.8%] top-[83.8%] w-[26.8%] h-[7.8%] rounded-full transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(229,25,35,0.45)] focus-visible:outline-2 focus-visible:outline-[#E51923]"
            />

            {/* Interactive Hit Targets: Right-Side 3 Discipline Rows */}
            <a
              href="#services"
              aria-label="Web Design Services"
              className="absolute left-[79.2%] top-[66.8%] w-[17.5%] h-[8.2%] rounded transition-colors hover:bg-white/[0.03] focus-visible:outline-1 focus-visible:outline-[#E51923]"
            />
            <a
              href="#services"
              aria-label="AI Automation Services"
              className="absolute left-[79.2%] top-[75.8%] w-[17.5%] h-[8.2%] rounded transition-colors hover:bg-white/[0.03] focus-visible:outline-1 focus-visible:outline-[#E51923]"
            />
            <a
              href="#work"
              aria-label="Responsive Builds"
              className="absolute left-[79.2%] top-[84.8%] w-[17.5%] h-[8.2%] rounded transition-colors hover:bg-white/[0.03] focus-visible:outline-1 focus-visible:outline-[#E51923]"
            />
          </div>
        </section>

        {/* ===================================================================
            3. SELECTED PROJECTS SECTION (Exact 4-Card Row from Reference)
           =================================================================== */}
        <section
          id="work"
          className="border-b border-[#1A1A1A] bg-black px-5 sm:px-9 py-10 sm:py-12"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#E51923] shrink-0" />
              <h2 className="font-sans text-[17px] sm:text-[19px] font-bold tracking-[0.03em] text-white uppercase">
                SELECTED PROJECTS
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setShowAllDemosModal(true)}
              className="group inline-flex items-center gap-2 text-[11px] sm:text-[12px] text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
            >
              <span>Portfolio Demos</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E51923] transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* 4-Card Grid Matching Reference Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LANDING_PROJECTS.map((item) => (
              <article
                key={item.title}
                className="group rounded-[4px] border border-[#1E1E1E] bg-[#050505] p-3 flex flex-col justify-between transition-colors duration-200 hover:border-[#3A1518]"
              >
                <div>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-[2px] bg-black"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[173/145] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </a>

                  <div className="mt-3.5 px-1">
                    <h3 className="text-[14px] sm:text-[15px] font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] sm:text-[12px] text-[#8E8E93]">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="mt-4 px-1 pb-1">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium text-[#E51923] hover:text-[#ff333d] transition-colors"
                  >
                    <span>View Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================================
            4. SERVICES & SKILLS | MY WORK PROCESS | QUOTE PANEL
               (Exact 3-Column Layout Matching Reference)
           =================================================================== */}
        <section
          id="services"
          className="border-b border-[#1A1A1A] bg-black"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: SERVICES & SKILLS */}
            <div className="lg:col-span-4 px-5 sm:px-8 py-10 sm:py-11 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-5 h-[1.5px] bg-[#E51923] shrink-0" />
                <h2 className="font-sans text-[16px] sm:text-[18px] font-bold tracking-[0.03em] text-white uppercase">
                  SERVICES &amp; SKILLS
                </h2>
              </div>

              <div className="space-y-7">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-[8px] border border-[#3B1215] bg-[#080405] flex items-center justify-center text-[#E51923] shrink-0 mt-0.5">
                    <Monitor className="w-[18px] h-[18px] stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white leading-snug">
                      Website Design &amp; Development
                    </h3>
                    <p className="mt-1 text-[12px] leading-[1.55] text-[#A1A1AA]">
                      Modern, fast and responsive websites that turn visitors into{' '}
                      <span className="underline decoration-[#71717A] underline-offset-2">
                        customers
                      </span>
                      .
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-[8px] border border-[#3B1215] bg-[#080405] flex items-center justify-center text-[#E51923] shrink-0 mt-0.5">
                    <RefreshCw className="w-[18px] h-[18px] stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white leading-snug">
                      Business Website Redesign
                    </h3>
                    <p className="mt-1 text-[12px] leading-[1.55] text-[#A1A1AA]">
                      Give your existing website a fresh, modern and high-performing look.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-[8px] border border-[#3B1215] bg-[#080405] flex items-center justify-center text-[#E51923] shrink-0 mt-0.5">
                    <Target className="w-[18px] h-[18px] stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white leading-snug">
                      Lead Generation Systems
                    </h3>
                    <p className="mt-1 text-[12px] leading-[1.55] text-[#A1A1AA]">
                      Find high-quality leads and automate your outreach process.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-[8px] border border-[#3B1215] bg-[#080405] flex items-center justify-center text-[#E51923] shrink-0 mt-0.5">
                    {/* Brain / AI Line Icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[18px] h-[18px]"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white leading-snug">
                      AI &amp; Business Automation
                    </h3>
                    <p className="mt-1 text-[12px] leading-[1.55] text-[#A1A1AA]">
                      Save time, reduce manual work and scale with smart AI solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: MY WORK PROCESS */}
            <div
              id="about"
              className="lg:col-span-5 px-5 sm:px-8 py-10 sm:py-11 border-b lg:border-b-0 border-[#1A1A1A]"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-5 h-[1.5px] bg-[#E51923] shrink-0" />
                <h2 className="font-sans text-[16px] sm:text-[18px] font-bold tracking-[0.03em] text-white uppercase">
                  MY WORK PROCESS
                </h2>
              </div>

              <div className="relative space-y-5">
                {/* Subtle vertical connecting line behind the circular icons */}
                <div
                  aria-hidden="true"
                  className="absolute left-[54px] top-5 bottom-5 w-px bg-[#261113]"
                />

                {[
                  {
                    num: '01',
                    title: 'DISCOVER',
                    desc: 'Understand your goals, audience, and project requirements.',
                    Icon: Search,
                  },
                  {
                    num: '02',
                    title: 'PLAN',
                    desc: 'Strategy, wierframes and content for the right approach.',
                    Icon: Lightbulb,
                  },
                  {
                    num: '03',
                    title: 'DESIGN',
                    desc: 'Create modern, clean designs focused on your brand.',
                    Icon: Pencil,
                  },
                  {
                    num: '04',
                    title: 'DEVELOP',
                    desc: 'Build your website or automation with best practices.',
                    Icon: Code2,
                  },
                  {
                    num: '05',
                    title: 'LAUNCH',
                    desc: 'Test, optimize and go live with full support.',
                    Icon: Send,
                  },
                ].map(({ num, title, desc, Icon }) => (
                  <div key={num} className="relative flex items-center gap-4">
                    <span className="w-6 text-[14px] font-bold text-[#E51923] tabular-nums shrink-0">
                      {num}
                    </span>

                    <div className="relative z-10 w-[44px] h-[44px] rounded-full border border-[#6E151B] bg-[#070707] flex items-center justify-center text-white shrink-0 shadow-[0_0_12px_rgba(229,25,35,0.12)]">
                      <Icon className="w-[17px] h-[17px] stroke-[1.75]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[12px] font-bold tracking-[0.05em] text-[#E51923] uppercase">
                        {title}
                      </h3>
                      <p className="mt-0.5 text-[11.5px] leading-[1.45] text-[#A1A1AA]">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Crimson Quote Panel (Exact Visual from Reference) */}
            <div className="lg:col-span-3 relative overflow-hidden bg-[#2B0507] flex">
              <img
                src="/assets/landing/quote-panel.png"
                alt="Good design is not just how it looks — it's how it works. — Hitesh"
                className="w-full h-full object-cover select-none block"
              />
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. LET'S WORK TOGETHER — CONTACT SECTION (Exact 3-Column Match)
           =================================================================== */}
        <section
          id="contact"
          className="border-b border-[#1A1A1A] bg-black px-5 sm:px-9 py-11 sm:py-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-7 items-start">
            {/* Left Column: Heading, Text & Chat on WhatsApp Pill Button */}
            <div className="lg:col-span-4">
              <span className="block w-5 h-[1.5px] bg-[#E51923] mb-3" />

              <h2 className="font-sans font-bold uppercase leading-[1.08] tracking-[0.02em]">
                <span className="block text-[24px] sm:text-[26px] text-[#DCE6F2]">
                  LET’S WORK
                </span>
                <span className="block text-[29px] sm:text-[32px] text-[#E51923] mt-0.5">
                  TOGETHER
                </span>
              </h2>

              <p className="mt-4 text-[12.5px] leading-[1.6] text-[#A1A1AA] max-w-[260px]">
                Have a project in mind or need a website, automation or design support? I’d love to hear about it. Let’s build something great together.
              </p>

              <div className="mt-7">
                <a
                  href="https://wa.me/?text=Hi%20Hitesh%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-[#B91C22] bg-[#080606] hover:bg-[#160809] px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors shadow-[0_0_18px_rgba(229,25,35,0.12)]"
                >
                  {/* Official WhatsApp Bubble Icon with Green Interior */}
                  <span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 ring-2 ring-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3"
                    >
                      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                  </span>
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E51923] ml-1" />
                </a>
              </div>
            </div>

            {/* Middle Column: Contact Form Card */}
            <div className="lg:col-span-5 rounded-[8px] border border-[#141414] bg-[#060606] p-3.5 sm:p-4">
              <form onSubmit={handleFormSubmit} className="space-y-2.5">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-[5px] border border-[#222222] bg-[#0B0B0D] px-3.5 py-2.5 text-[12px] text-white placeholder:text-[#71717A] focus:border-[#E51923] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="w-full rounded-[5px] border border-[#222222] bg-[#0B0B0D] px-3.5 py-2.5 text-[12px] text-white placeholder:text-[#71717A] focus:border-[#E51923] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-[5px] border border-[#222222] bg-[#0B0B0D] px-3.5 py-2.5 text-[12px] text-white placeholder:text-[#71717A] focus:border-[#E51923] focus:outline-none"
                />
                <textarea
                  rows={3}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-[5px] border border-[#222222] bg-[#0B0B0D] px-3.5 py-2.5 text-[12px] text-white placeholder:text-[#71717A] focus:border-[#E51923] focus:outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-[5px] bg-[#D91420] hover:bg-[#E51923] py-2.5 px-4 text-[12.5px] font-semibold text-white inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{submitted ? 'Message Sent' : 'Send Message'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Right Column: 3 Guarantee Items with Double-Ring Red Icons */}
            <div className="lg:col-span-3 space-y-6 pt-2 lg:pl-2">
              {/* Item 1: Quick Response */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-[#5A1217] bg-[#080405] flex items-center justify-center text-[#E51923] shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[12.5px] font-semibold text-white">
                    Quick Response
                  </h3>
                  <p className="text-[11px] text-[#8E8E93] mt-0.5">
                    I reply within 24 hours.
                  </p>
                </div>
              </div>

              {/* Item 2: Direct WhatsApp */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-[#5A1217] bg-[#080405] flex items-center justify-center text-[#E51923] shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    className="w-4 h-4"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[12.5px] font-semibold text-white">
                    Direct WhatsApp
                  </h3>
                  <p className="text-[11px] text-[#8E8E93] mt-0.5">
                    For faster communication.
                  </p>
                </div>
              </div>

              {/* Item 3: Custom Solutions */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-[#5A1217] bg-[#080405] flex items-center justify-center text-[#E51923] shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    className="w-4 h-4"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[12.5px] font-semibold text-white">
                    Custom Solutions
                  </h3>
                  <p className="text-[11px] text-[#8E8E93] mt-0.5">
                    Tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. FOOTER (Exact Match to Reference)
           =================================================================== */}
        <footer className="bg-black px-5 sm:px-9">
          {/* Top Footer Row */}
          <div className="py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-[#1A1A1A]">
            {/* Left: H Monogram Logo + Name */}
            <div className="flex items-center gap-3">
              <img
                src="/assets/landing/h-logo.png"
                alt="Hitesh Logo"
                className="w-8 h-8 object-contain"
              />
              <div>
                <p className="text-[14px] font-bold text-white leading-tight">
                  Hitesh
                </p>
                <p className="text-[10.5px] text-[#8E8E93] mt-0.5">
                  Web Designer &amp; AI Automation Creator
                </p>
              </div>
            </div>

            {/* Center: Nav Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center gap-5 text-[11px] text-[#A1A1AA]"
            >
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#work" className="hover:text-white transition-colors">
                Work
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            {/* Right: 4 Social Icons (WhatsApp, Instagram, LinkedIn, YouTube) */}
            <div className="flex items-center gap-4 text-[#A1A1AA]">
              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="w-4 h-4"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#contact"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="w-4 h-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#contact"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10.5px] text-[#8E8E93]">
            <p>Build Better. Grow Faster.</p>
            <p>© 2025 Hitesh. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* =====================================================================
          PORTFOLIO DEMOS OVERLAY MODAL (All 6 Verified Live Projects 01–06)
          Opens when clicking "Portfolio Demos ->"
         ===================================================================== */}
      {showAllDemosModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Selected Work 2025/2026 — All Six Live Projects"
        >
          <div className="mx-auto max-w-[1280px] rounded-2xl border border-zinc-800 bg-[#070709] p-6 sm:p-10">
            <div className="flex items-start justify-between gap-4 pb-8 border-b border-zinc-900">
              <div>
                <p className="font-mono-tabular text-xs font-semibold uppercase tracking-[0.2em] text-[#E51923]">
                  SELECTED WORK — 2025/2026
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold uppercase text-white">
                  Digital Experiences, Built to Stand Out.
                </h2>
                <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
                  A collection of websites I've designed and developed for businesses across hospitality, food, and fitness. Every project focuses on strong visual identity, seamless user experience, and responsive design.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAllDemosModal(false)}
                aria-label="Close Portfolio Demos"
                className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SELECTED_PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onInspect={(proj) => setInspectedProject(proj)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <ProjectModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />
    </div>
  );
}
