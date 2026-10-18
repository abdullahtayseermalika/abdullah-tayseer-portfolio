import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { Cpu, FileText, Folder, HardDrive, Layers, Lock, Shield } from 'lucide-react';

interface ProjectVisualProps {
  project: Project;
  interactive?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, interactive = false }) => {
  const [relayActive, setRelayActive] = useState(true);
  const [activeFloodLayer, setActiveFloodLayer] = useState<'all' | 'inundation' | 'roads' | 'isolated'>('all');

  // 1. SENTRIX: black, crimson red, and subtle violet camera overlays
  if (project.visualType === 'sentrix') {
    return (
      <div className="relative w-full h-full min-h-[220px] bg-[#08080C] overflow-hidden group">
        {project.imagePath ? (
          <img
            src={project.imagePath}
            alt="Sentrix Driver Monitoring Dashboard"
            className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-[#0d0a14]" />
        )}

        {/* HUD Overlay with Violet and Crimson accents */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/40 to-[#08080C]/65 pointer-events-none" />

        {/* Top telemetry strip with subtle violet & crimson */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-2 bg-[#171420]/80 backdrop-blur-md px-2.5 py-1 border border-[#8B5CF6]/30 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
            <span className="text-[#F5F3FF]">EAR: 0.32 [OPTIMAL]</span>
          </div>
          <div className="bg-[#171420]/80 backdrop-blur-md px-2.5 py-1 border border-[#302238] rounded-full text-[#AAA5B8]">
            FPS: 45 · ESP32: <span className="text-[#A78BFA]">LINKED</span>
          </div>
        </div>

        {/* Center Face Landmark Reticle with subtle violet overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-28 h-36 border border-[#8B5CF6]/40 rounded-3xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.2)]">
            <div className="absolute top-2 w-10 h-0.5 bg-[#E11D48]" />
            <div className="absolute bottom-2 w-10 h-0.5 bg-[#E11D48]" />
            <div className="absolute left-2 h-10 w-0.5 bg-[#8B5CF6]" />
            <div className="absolute right-2 h-10 w-0.5 bg-[#8B5CF6]" />
            <div className="w-2 h-2 rounded-full bg-[#FF304F] animate-ping" />
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-[#AAA5B8]">
          <span className="text-[#A78BFA]">CV PIPELINE // OPENCV + MEDIAPIPE</span>
          <span className="text-[#E11D48] font-semibold">FATIGUE MONITOR</span>
        </div>
      </div>
    );
  }

  // 2. CLASSROOM AUTOMATION: deep purple, lavender, and restrained red circuit accents
  if (project.visualType === 'classroom') {
    return (
      <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#171420] via-[#111019] to-[#08080C] p-4 flex flex-col justify-between border-b border-[#302238] overflow-hidden group">
        {/* Subtle schematic background lines in purple and crimson */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#302238" strokeWidth="1" />
          <circle cx="20%" cy="40%" r="4" fill="#E11D48" />
          <circle cx="80%" cy="65%" r="4" fill="#A78BFA" />
          <line x1="20%" y1="40%" x2="80%" y2="65%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        </svg>

        {/* Top Header */}
        <div className="flex items-center justify-between text-[10px] font-mono z-10">
          <div className="flex items-center gap-1.5 text-[#F5F3FF]">
            <Cpu className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="font-semibold">ESP32-CAM CONTROLLER</span>
          </div>
          <span className="px-2 py-0.5 bg-[#171420] border border-[#302238] rounded-full text-[#A78BFA]">
            WI-FI MESH NODE
          </span>
        </div>

        {/* Middle Interactive / Visual Schematic */}
        <div className="my-auto grid grid-cols-2 gap-3 z-10 py-2">
          {/* Node 1: Attendance Biometric */}
          <div className="p-2.5 bg-[#171420]/90 border border-[#302238] rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] text-[#A78BFA]">R307 SCANNER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
            </div>
            <div className="font-mono text-xs text-white font-medium">ATTENDANCE LOG</div>
            <div className="font-mono text-[9px] text-[#AAA5B8] mt-1">ID #402 VERIFIED</div>
          </div>

          {/* Node 2: Relays */}
          <div className="p-2.5 bg-[#171420]/90 border border-[#302238] rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] text-[#A78BFA]">AC RELAY BANK</span>
              <span className={`w-1.5 h-1.5 rounded-full ${relayActive ? 'bg-[#E11D48]' : 'bg-gray-600'}`} />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white">LIGHTS & FAN</span>
              {interactive && (
                <button
                  onClick={() => setRelayActive(!relayActive)}
                  className="px-2 py-0.5 text-[9px] font-mono bg-[#211c2e] hover:bg-[#2e2640] text-[#F5F3FF] rounded-md border border-[#302238]"
                >
                  {relayActive ? 'ON' : 'OFF'}
                </button>
              )}
            </div>
            <div className="font-mono text-[9px] text-[#AAA5B8] mt-1">
              STATUS: {relayActive ? 'ACTIVE (AUTO)' : 'STANDBY'}
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="flex items-center justify-between text-[9px] font-mono text-[#AAA5B8] z-10 pt-2 border-t border-[#302238]">
          <span className="text-[#A78BFA]">VOICE/TOUCH OVERRIDE</span>
          <span className="text-[#E11D48] font-semibold">HARDWARE READY</span>
        </div>
      </div>
    );
  }

  // 3. FLOODTRACE: dark geospatial radar mapping with topographic contours, elevation gradient, and red flood hazards
  if (project.visualType === 'floodtrace') {
    const showInundation = activeFloodLayer === 'all' || activeFloodLayer === 'inundation';
    const showRoads = activeFloodLayer === 'all' || activeFloodLayer === 'roads';
    const showIsolated = activeFloodLayer === 'all' || activeFloodLayer === 'isolated';

    return (
      <div className="relative w-full h-full min-h-[220px] bg-[#08080C] overflow-hidden group select-none">
        {project.imagePath ? (
          <img
            src={project.imagePath}
            alt="FloodTrace Geospatial Inundation Analysis"
            className="w-full h-full object-cover object-center filter brightness-85 contrast-125 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-[#0d0a14]" />
        )}

        {/* Deep dark gradient vignette with violet-to-crimson ambient tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/45 to-[#08080C]/75 pointer-events-none" />

        {/* Topographic Contour Lines & Geospatial Hazard Vector Overlays */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 320"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Violet-to-crimson flood water fill gradient */}
            <linearGradient id="floodWaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E11D48" stopOpacity="0.45" />
            </linearGradient>
            <pattern id="geoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.14" />
              <circle cx="0" cy="0" r="1" fill="#A78BFA" fillOpacity="0.3" />
            </pattern>
          </defs>

          {/* Coordinate grid */}
          <rect width="100%" height="100%" fill="url(#geoGrid)" />

          {/* Topographic contour curves */}
          <path
            d="M -20,110 C 90,85 160,140 280,105 C 380,75 440,110 520,80"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="1.2"
            strokeOpacity="0.35"
            strokeDasharray="6 3"
          />
          <path
            d="M -20,150 C 80,130 170,180 290,140 C 390,110 450,145 520,120"
            fill="none"
            stroke="#A78BFA"
            strokeWidth="1"
            strokeOpacity="0.45"
          />
          <path
            d="M -20,195 C 100,175 190,220 310,180 C 410,150 470,185 520,160"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />
          <path
            d="M -20,245 C 110,220 210,260 330,225 C 420,200 480,230 520,210"
            fill="none"
            stroke="#6D28D9"
            strokeWidth="0.8"
            strokeOpacity="0.25"
          />

          {/* Contour elevation text annotations */}
          <text x="25" y="105" fill="#A78BFA" fillOpacity="0.6" fontSize="8" fontFamily="monospace">10m DEM</text>
          <text x="25" y="145" fill="#A78BFA" fillOpacity="0.6" fontSize="8" fontFamily="monospace">20m DEM</text>
          <text x="25" y="190" fill="#A78BFA" fillOpacity="0.5" fontSize="8" fontFamily="monospace">35m DEM</text>

          {/* Inundated surface water basin polygon */}
          {showInundation && (
            <path
              d="M 120,320 C 140,250 180,220 220,190 C 260,160 320,180 370,150 C 410,125 450,130 500,100 L 520,320 Z"
              fill="url(#floodWaterGrad)"
              stroke="#E11D48"
              strokeWidth="1"
              strokeOpacity="0.65"
            />
          )}

          {/* Primary road corridor (arterial route) */}
          <path
            d="M 30,320 L 160,200 L 290,150 L 410,60 L 480,20"
            fill="none"
            stroke="#F5F3FF"
            strokeWidth="2"
            strokeOpacity="0.3"
          />

          {/* Severed submerged road section highlighted in Crimson Red */}
          {showRoads && (
            <>
              <path
                d="M 160,200 L 290,150"
                fill="none"
                stroke="#E11D48"
                strokeWidth="3.5"
                strokeDasharray="6 3"
                strokeLinecap="round"
              />
              <circle cx="225" cy="175" r="5" fill="#E11D48" />
              <circle cx="225" cy="175" r="10" fill="none" stroke="#FF304F" strokeWidth="1" strokeOpacity="0.8" className="animate-ping" />
            </>
          )}

          {/* Isolated community clusters */}
          {showIsolated && (
            <>
              <g>
                <circle cx="340" cy="120" r="18" fill="#6D28D9" fillOpacity="0.25" stroke="#E11D48" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="340" cy="120" r="3.5" fill="#FF304F" />
                <circle cx="340" cy="120" r="8" fill="none" stroke="#E11D48" strokeWidth="1" opacity="0.6" />
              </g>
              <g>
                <circle cx="410" cy="190" r="14" fill="#6D28D9" fillOpacity="0.25" stroke="#E11D48" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="410" cy="190" r="3.5" fill="#FF304F" />
              </g>
            </>
          )}
        </svg>

        {/* Top Telemetry Overlay */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[10px] font-mono z-10">
          <div className="flex items-center gap-2 bg-[#171420]/90 backdrop-blur-md px-2.5 py-1 border border-[#8B5CF6]/40 rounded-full shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
            <span className="text-[#F5F3FF] font-medium tracking-wide">SENTINEL-1 SAR · DUAL-POL (VV/VH)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#171420]/90 backdrop-blur-md px-2.5 py-1 border border-[#302238] rounded-full text-[#AAA5B8]">
            <span>13°58'42"N 74°33'18"E</span>
            <span className="text-[#8B5CF6]">·</span>
            <span className="text-[#A78BFA]">DEM: 8.4m ASL</span>
          </div>
        </div>

        {/* Center-Right GIS Floating Badges */}
        <div className="absolute top-12 right-3 flex flex-col gap-1.5 font-mono text-[9px] pointer-events-none">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#171420]/90 border border-[#E11D48]/60 text-[#FF304F] backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-ping" />
            <span className="font-bold">SEVERED ROAD: CORRIDOR B-4</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#171420]/90 border border-[#8B5CF6]/50 text-[#A78BFA] backdrop-blur-md shadow-sm">
            <span>ISOLATED CLUSTERS: 2 LOCALITIES</span>
          </div>
        </div>

        {/* Interactive Layer Switcher (Visible when interactive = true in Modal) */}
        {interactive && (
          <div className="absolute bottom-11 inset-x-3 flex flex-wrap items-center justify-between gap-2 bg-[#111019]/95 backdrop-blur-md px-3 py-1.5 border border-[#302238] rounded-xl text-[9px] font-mono text-[#AAA5B8] z-20 shadow-lg">
            <div className="flex items-center gap-1.5">
              <span className="text-[#F5F3FF] font-semibold flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#8B5CF6]" /> LAYERS:
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFloodLayer('all');
                }}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  activeFloodLayer === 'all'
                    ? 'bg-[#8B5CF6] text-white font-bold'
                    : 'bg-[#171420] text-[#AAA5B8] hover:text-white border border-[#302238]'
                }`}
              >
                ALL
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFloodLayer('inundation');
                }}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  activeFloodLayer === 'inundation'
                    ? 'bg-[#6D28D9] text-[#A78BFA] font-bold border border-[#8B5CF6]'
                    : 'bg-[#171420] text-[#AAA5B8] hover:text-white border border-[#302238]'
                }`}
              >
                FLOOD EXTENT
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFloodLayer('roads');
                }}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  activeFloodLayer === 'roads'
                    ? 'bg-[#E11D48] text-white font-bold'
                    : 'bg-[#171420] text-[#AAA5B8] hover:text-white border border-[#302238]'
                }`}
              >
                SEVERED ROADS
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFloodLayer('isolated');
                }}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  activeFloodLayer === 'isolated'
                    ? 'bg-[#FF304F] text-white font-bold'
                    : 'bg-[#171420] text-[#AAA5B8] hover:text-white border border-[#302238]'
                }`}
              >
                ISOLATED COMMUNITIES
              </button>
            </div>
            <span className="text-[#E11D48] font-bold">TEAM ASMR // RESCUE PLAN</span>
          </div>
        )}

        {/* Geospatial Scale Bar & North Indicator (Left Bottom) */}
        <div className="absolute bottom-9 left-3 flex items-center gap-3 font-mono text-[8px] text-[#AAA5B8]/80 pointer-events-none">
          <div className="flex items-center gap-1 bg-[#171420]/80 px-2 py-0.5 rounded border border-[#302238]">
            <span className="text-[#A78BFA] font-bold">N</span>
            <span className="text-[#E11D48]">▲</span>
          </div>
          <div className="bg-[#171420]/80 px-2 py-0.5 rounded border border-[#302238] flex items-center gap-1">
            <span>0</span>
            <span className="inline-block w-8 h-[2px] bg-[#A78BFA]"></span>
            <span>500m</span>
          </div>
        </div>

        {/* Bottom Technical Status Bar */}
        <div className="absolute bottom-2 inset-x-3 flex items-center justify-between font-mono text-[9px] text-[#AAA5B8] border-t border-[#302238]/60 pt-1.5">
          <span className="text-[#A78BFA] flex items-center gap-1">
            <span>GEOSPATIAL INUNDATION MAPPING</span>
            <span className="text-[#8B5CF6]">//</span>
            <span>GDAL + QGIS</span>
          </span>
          <span className="text-[#E11D48] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
            <span>DISASTER ASSESSMENT PROTOTYPE</span>
          </span>
        </div>
      </div>
    );
  }

  // 4. CLOUDVAULT: black and purple interface surfaces with red interaction accents
  return (
    <div className="relative w-full h-full min-h-[220px] bg-gradient-to-b from-[#171420] to-[#08080C] p-4 flex flex-col justify-between border-b border-[#302238] overflow-hidden group">
      {/* Sleek Dark Purple Cloud Storage Interface Mockup */}
      <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#302238] pb-2">
        <div className="flex items-center gap-2 text-[#F5F3FF]">
          <HardDrive className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span className="font-bold">CLOUDVAULT STORAGE</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#111019] border border-[#302238] text-[9px] text-[#AAA5B8]">
          <Shield className="w-2.5 h-2.5 text-[#E11D48]" />
          <span>SUPABASE AUTH</span>
        </div>
      </div>

      {/* File Explorer rows */}
      <div className="space-y-1.5 my-2">
        <div className="flex items-center justify-between p-2 rounded-xl bg-[#111019] border border-[#302238] hover:border-[#8B5CF6]/50 transition-colors">
          <div className="flex items-center gap-2">
            <Folder className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="font-mono text-xs text-[#F5F3FF]">firmware_binaries/</span>
          </div>
          <span className="font-mono text-[9px] text-[#AAA5B8]">Directory · 4 items</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-[#111019] border border-[#302238] hover:border-[#8B5CF6]/50 transition-colors">
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span className="font-mono text-xs text-[#F5F3FF]">ros2_driver_config.yaml</span>
          </div>
          <span className="font-mono text-[9px] text-[#AAA5B8]">14.2 KB</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-[#111019] border border-[#302238] hover:border-[#E11D48]/50 transition-colors">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="font-mono text-xs text-[#F5F3FF]">secure_credentials.enc</span>
          </div>
          <span className="font-mono text-[9px] text-[#E11D48] font-semibold">Encrypted</span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="flex items-center justify-between text-[9px] font-mono text-[#AAA5B8] pt-2 border-t border-[#302238]">
        <span className="text-[#A78BFA]">FLASK + SUPABASE S3 BUCKET</span>
        <span className="text-[#E11D48] font-semibold">CRUD WORKFLOW</span>
      </div>
    </div>
  );
};
