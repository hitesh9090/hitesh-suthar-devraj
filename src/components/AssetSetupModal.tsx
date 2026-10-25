import React from 'react';
import { X, FolderOpen, Terminal, CheckCircle2 } from 'lucide-react';

interface AssetSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetSetupModal: React.FC<AssetSetupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const assetMappings = [
    {
      num: '01',
      project: "9 Tea's Cafe",
      localPath: '/public/assets/projects/01-9teas-hero.jpg',
      liveHotlink: 'https://tea-cafe-sepia.vercel.app/assets/hero-chai-5NVP-uN1.jpg',
    },
    {
      num: '02',
      project: "Joey's Pizza",
      localPath: '/public/assets/projects/02-joeys-hero.jpg',
      liveHotlink: 'https://joeys-pizza-live.vercel.app/assets/hero-pizza-C-fiichO.jpg',
    },
    {
      num: '03',
      project: '44 The Food Hub',
      localPath: '/public/assets/projects/03-44foodhub-hero.jpg',
      liveHotlink: 'https://veggie-hub-delights.lovable.app/assets/hero-food-LWEEY4Dv.jpg',
    },
    {
      num: '04',
      project: 'Olivea Cafe & Restaurant',
      localPath: '/public/assets/projects/04-olivea-hero.jpg',
      liveHotlink: 'https://olivea-cafe-and-restaurant.vercel.app/assets/hero-BMyZvsUw.jpg',
    },
    {
      num: '05',
      project: 'ProLevel Personal Training Studio',
      localPath: '/public/assets/projects/05-prolevel-hero.jpg',
      liveHotlink: 'https://proleve.lovable.app/assets/hero-gym-JejO8B-U.jpg',
    },
    {
      num: '06',
      project: 'Iron//Works',
      localPath: '/public/assets/projects/06-ironworks-hero.jpg',
      liveHotlink: 'https://fitness-fanatic-hub.lovable.app/assets/hero-lifter-iKmVWDEi.jpg',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="asset-guide-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-zinc-800 bg-[#0A0A0D] text-zinc-100 shadow-2xl overflow-hidden my-auto max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-800 bg-[#070709]">
          <div className="flex items-center gap-2.5">
            <FolderOpen className="w-4 h-4 text-red-500" />
            <h2
              id="asset-guide-title"
              className="font-display text-xl uppercase tracking-wider text-white"
            >
              Screenshot & Asset Replacement Guide
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close setup guide"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6 text-sm">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-medium text-white">
                Authentic Live Assets Pre-Installed with Automatic Hotlink Fallback
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                All 16 high-resolution hero and menu images from your 6 live Vercel deployments have been downloaded directly into{' '}
                <code className="font-mono-tabular text-zinc-200">/public/assets/projects/</code>. Each card automatically falls back to the live Vercel/Lovable asset URL if a local file is removed, and renders a styled fallback card if offline.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-mono-tabular text-xs uppercase tracking-wider text-red-500 mb-3">
              How to Replace Any Card Preview with a Custom Full-Window Screenshot
            </h3>
            <ol className="space-y-2.5 text-zinc-300 text-xs sm:text-sm list-decimal list-inside">
              <li>
                Capture a 16:10 desktop screenshot (<code className="font-mono-tabular text-zinc-200">1600×1000px</code> recommended) of the live website.
              </li>
              <li>
                Save and overwrite the corresponding file in{' '}
                <code className="font-mono-tabular text-zinc-200">/public/assets/projects/</code> using the exact filename listed below, or update{' '}
                <code className="font-mono-tabular text-zinc-200">src/data/projects.ts</code>.
              </li>
            </ol>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950 text-zinc-400 font-mono-tabular uppercase">
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Project</th>
                  <th className="py-2.5 px-3">Local File Path</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 font-mono-tabular">
                {assetMappings.map((item) => (
                  <tr key={item.num} className="hover:bg-zinc-900/40">
                    <td className="py-2.5 px-3 text-red-500">{item.num}</td>
                    <td className="py-2.5 px-3 font-sans font-medium text-white">
                      {item.project}
                    </td>
                    <td className="py-2.5 px-3 text-zinc-300">{item.localPath}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <div className="flex items-center gap-2 text-xs font-mono-tabular text-zinc-400 mb-2">
              <Terminal className="w-3.5 h-3.5 text-red-500" />
              <span>Hero Portrait Reference Asset</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The hero portrait uses your uploaded reference image at{' '}
              <code className="font-mono-tabular text-zinc-200">/public/assets/aistudio/Image_1_577c1022.png</code>{' '}
              with precision SVG viewport framing. To swap in a standalone cutout portrait, place your PNG at{' '}
              <code className="font-mono-tabular text-zinc-200">/public/assets/hitesh-portrait.png</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
