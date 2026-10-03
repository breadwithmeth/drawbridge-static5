"use client";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Hand-painted plastic designer toys — sculpted SVG illustration set */
/*                                                                     */
/*  Technique: molded-plastic volumes via soft layered shading +       */
/*  specular highlights, "painted" accents as broad organic brush      */
/*  strokes with uneven edges, exposed plastic, soft studio shadows.  */
/* ------------------------------------------------------------------ */

const INK = "#141312";

/* ---------- shared primitives ---------- */

function ContactShadow({
  id,
  cx,
  cy,
  rx = 90,
  ry = 14,
  opacity = 0.18,
}: {
  id: string;
  cx: number;
  cy: number;
  rx?: number;
  ry?: number;
  opacity?: number;
}) {
  return (
    <>
      <defs>
        <filter id={id} x="-60%" y="-400%" width="220%" height="900%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill={INK}
        opacity={opacity}
        filter={`url(#${id})`}
      />
    </>
  );
}

/** broad brush stroke with uneven painted edge */
function Brush({
  d,
  color,
  opacity = 0.95,
  streak = true,
}: {
  d: string;
  color: string;
  opacity?: number;
  streak?: boolean;
}) {
  return (
    <g opacity={opacity}>
      <path d={d} fill={color} />
      {streak && (
        <path
          d={d}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.22"
          strokeWidth="6"
          strokeLinecap="round"
          transform="translate(0 -5)"
        />
      )}
    </g>
  );
}

function Spec({ cx, cy, rx, ry, rot = -20, o = 0.65 }: { cx: number; cy: number; rx: number; ry: number; rot?: number; o?: number }) {
  return (
    <ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill="#ffffff"
      opacity={o}
      transform={`rotate(${rot} ${cx} ${cy})`}
    />
  );
}

type ToyProps = { className?: string };

const wrap = (className?: string) => className ?? "w-full h-auto";

/* ------------------------------------------------------------------ */
/*  1. PIPELINE — transparent plastic pipeline with moving modules    */
/* ------------------------------------------------------------------ */

export function ToyPipeline({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="CI/CD pipeline toy">
      <ContactShadow id="pipeSh" cx={170} cy={266} rx={120} ry={16} />
      {/* three chunky stage stations */}
      <g>
        <rect x="28" y="96" width="78" height="112" rx="26" fill="#F96A1B" />
        <rect x="28" y="96" width="78" height="112" rx="26" fill="url(#pipeA)" />
        <Brush d="M36 128c14-8 44-10 62-4 6 2 8 8 2 10-20 6-48 6-64 2-4-2-4-6 0-8z" color="#FF8B47" />
        <Spec cx={48} cy={116} rx={12} ry={7} />
        <circle cx="112" cy="152" r="9" fill="#FAF7F2" stroke={INK} strokeOpacity="0.15" />
      </g>
      <g>
        <rect x="132" y="82" width="80" height="120" rx="26" fill="#2B4EE6" />
        <rect x="132" y="82" width="80" height="120" rx="26" fill="url(#pipeB)" />
        <Brush d="M140 190c16 6 50 6 66-2 6-3 4-9-3-9-22-1-48 1-63 5-4 1-4 5 0 6z" color="#5A72F2" />
        <Spec cx={150} cy={102} rx={13} ry={8} />
      </g>
      <g>
        <rect x="240" y="96" width="76" height="112" rx="26" fill="#FFC529" />
        <rect x="240" y="96" width="76" height="112" rx="26" fill="url(#pipeC)" />
        <Brush d="M248 118c16-9 44-9 60 0 5 3 3 8-3 8-18 1-40 2-56 0-5-1-6-6-1-8z" color="#FFD861" />
        <Spec cx={258} cy={112} rx={11} ry={7} />
      </g>
      {/* transparent tube threading through the stations */}
      <path
        d="M12 168c26 0 26-34 54-34 40 0 60 44 106 44 44 0 60-44 102-44 26 0 28 30 54 30"
        fill="none"
        stroke={INK}
        strokeOpacity="0.10"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M12 168c26 0 26-34 54-34 40 0 60 44 106 44 44 0 60-44 102-44 26 0 28 30 54 30"
        fill="none"
        stroke="#EDE7DC"
        strokeOpacity="0.9"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M12 168c26 0 26-34 54-34 40 0 60 44 106 44 44 0 60-44 102-44 26 0 28 30 54 30"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="7"
        strokeLinecap="round"
        transform="translate(0 -8)"
      />
      {/* modules moving through the tube */}
      <g className="toy-module" style={{ ["--slide-dist" as string]: "46px" }}>
        <rect x="34" y="152" width="26" height="26" rx="8" fill="#F0533F" />
        <Spec cx={41} cy={159} rx={6} ry={4} o={0.5} />
      </g>
      <g
        className="toy-module"
        style={{ ["--slide-dist" as string]: "40px", animationDelay: "-1.4s" }}>
        <circle cx="196" cy="178" r="12" fill="#5FD3A5" />
        <Spec cx={192} cy={174} rx={4} ry={3} o={0.55} />
      </g>
      <g
        className="toy-module"
        style={{ ["--slide-dist" as string]: "44px", animationDelay: "-2.6s" }}>
        <rect x="272" y="84" width="22" height="22" rx="7" fill="#2B4EE6" />
      </g>
      <defs>
        <radialGradient id="pipeA" cx="0.3" cy="0.2" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#7A3000" stopOpacity="0.35" />
        </radialGradient>
        <radialGradient id="pipeB" cx="0.3" cy="0.2" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#0A1B66" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="pipeC" cx="0.3" cy="0.2" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#8A6400" stopOpacity="0.3" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  2. MONITOR — chunky sensor device with multi-directional lenses   */
/* ------------------------------------------------------------------ */

export function ToyMonitor({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="monitoring sensor toy">
      <ContactShadow id="monSh" cx={170} cy={268} rx={105} ry={15} />
      {/* body */}
      <rect x="92" y="96" width="150" height="150" rx="44" fill="#FAF7F2" />
      <rect x="92" y="96" width="150" height="150" rx="44" fill="url(#monBody)" />
      <rect x="92" y="96" width="150" height="150" rx="44" fill="none" stroke={INK} strokeOpacity="0.08" strokeWidth="2" />
      {/* painted patches */}
      <Brush d="M104 208c22 16 92 20 126 4 7-4 5-11-4-11-44 0-92 0-118 2-6 1-8 3-4 5z" color="#F96A1B" opacity={0.92} />
      <Brush d="M116 108c20-7 74-7 96 2 6 3 4 8-3 8-30 2-64 2-92 0-6-1-7-8-1-10z" color="#2B4EE6" opacity={0.9} />
      <Brush d="M100 150c8-2 16-2 18 2 2 5-6 9-14 8-6-1-9-8-4-10z" color="#5FD3A5" opacity={0.85} streak={false} />
      <Spec cx={116} cy={118} rx={16} ry={9} o={0.8} />
      {/* lens barrels */}
      <g>
        <rect x="228" y="128" width="62" height="34" rx="17" fill="#141312" />
        <ellipse cx="288" cy="145" rx="10" ry="15" fill="#3B3A38" />
        <ellipse cx="288" cy="145" rx="6" ry="9" fill="#0A0A0A" />
        <circle cx="285" cy="141" r="2.6" fill="#ffffff" opacity="0.8" />
      </g>
      <g>
        <rect x="40" y="150" width="60" height="32" rx="16" fill="#FFC529" />
        <rect x="40" y="150" width="60" height="32" rx="16" fill="url(#monLensY)" />
        <ellipse cx="42" cy="166" rx="9" ry="14" fill="#D9A512" />
        <ellipse cx="44" cy="166" rx="5" ry="8" fill="#141312" />
        <circle cx="42" cy="162" r="2.2" fill="#ffffff" opacity="0.85" />
      </g>
      <g>
        <rect x="146" y="36" width="34" height="58" rx="17" fill="#F0533F" />
        <rect x="146" y="36" width="34" height="58" rx="17" fill="url(#monLensC)" />
        <ellipse cx="163" cy="38" rx="14" ry="9" fill="#C23D2C" />
        <ellipse cx="163" cy="38" rx="9" ry="5.5" fill="#141312" />
        <circle cx="159" cy="36" r="2.2" fill="#ffffff" opacity="0.85" />
      </g>
      {/* little feet */}
      <rect x="112" y="240" width="26" height="18" rx="9" fill="#141312" />
      <rect x="196" y="240" width="26" height="18" rx="9" fill="#141312" />
      {/* status lamp */}
      <circle cx="222" cy="120" r="7" fill="#5FD3A5">
        <animate attributeName="opacity" values="1;0.35;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <defs>
        <radialGradient id="monBody" cx="0.32" cy="0.18" r="1.15">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#B7AD9C" stopOpacity="0.45" />
        </radialGradient>
        <linearGradient id="monLensY" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="monLensC" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  3. CLOUD — molded plastic cloud with internal modules & tube      */
/* ------------------------------------------------------------------ */

export function ToyCloud({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="cloud infrastructure toy">
      <ContactShadow id="cldSh" cx={170} cy={272} rx={115} ry={16} />
      {/* cloud body from rounded volumes */}
      <g>
        <circle cx="118" cy="176" r="58" fill="#FAF7F2" />
        <circle cx="186" cy="150" r="72" fill="#FAF7F2" />
        <circle cx="248" cy="188" r="50" fill="#FAF7F2" />
        <rect x="66" y="176" width="212" height="64" rx="32" fill="#FAF7F2" />
        <circle cx="118" cy="176" r="58" fill="url(#cldG)" />
        <circle cx="186" cy="150" r="72" fill="url(#cldG)" />
        <circle cx="248" cy="188" r="50" fill="url(#cldG)" />
        <rect x="66" y="176" width="212" height="64" rx="32" fill="url(#cldG)" />
        {/* hand-painted bands */}
        <Brush d="M96 218c30 10 130 12 158 0 6-3 4-9-5-9-48-1-108-1-148 2-6 1-9 5-5 7z" color="#2B4EE6" opacity={0.85} />
        <Brush d="M150 92c22-8 52-8 70 2 6 4 3 10-5 10-22 0-46 2-64-2-7-2-8-8-1-10z" color="#F96A1B" opacity={0.9} />
        <Brush d="M92 150c10-3 22-2 24 3 2 6-8 10-17 8-7-2-11-9-7-11z" color="#FFC529" opacity={0.9} streak={false} />
        <Brush d="M236 146c9-2 17-1 19 3 2 5-6 9-13 8-6-1-10-9-6-11z" color="#5FD3A5" opacity={0.85} streak={false} />
        <Spec cx={152} cy={100} rx={20} ry={10} o={0.9} />
      </g>
      {/* internal modules seen through the shell */}
      <g opacity="0.9">
        <rect x="140" y="170" width="30" height="30" rx="9" fill="#F0533F" />
        <Spec cx={147} cy={177} rx={5} ry={3.5} o={0.5} />
        <circle cx="212" cy="182" r="14" fill="#5FD3A5" />
        <rect x="98" y="188" width="24" height="24" rx="8" fill="#2B4EE6" />
      </g>
      {/* transparent tube through the cloud */}
      <path
        d="M20 204c40 8 70-46 150-40 76 6 96 52 152 34"
        fill="none"
        stroke={INK}
        strokeOpacity="0.08"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M20 204c40 8 70-46 150-40 76 6 96 52 152 34"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeWidth="6"
        strokeLinecap="round"
        transform="translate(0 -7)"
      />
      {/* antenna */}
      <rect x="164" y="28" width="10" height="52" rx="5" fill="#141312" />
      <circle cx="169" cy="24" r="11" fill="#FFC529" />
      <Spec cx={165} cy={20} rx={4} ry={2.5} o={0.7} />
      <defs>
        <radialGradient id="cldG" cx="0.3" cy="0.15" r="1.2">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#BDB3A1" stopOpacity="0.4" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  4. AUTOMATION — playful mechanism: lever triggers domino chain    */
/* ------------------------------------------------------------------ */

export function ToyAutomation({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="automation mechanism toy">
      <ContactShadow id="autSh" cx={170} cy={272} rx={125} ry={15} />
      {/* big lever base */}
      <rect x="30" y="180" width="96" height="84" rx="26" fill="#F96A1B" />
      <rect x="30" y="180" width="96" height="84" rx="26" fill="url(#autA)" />
      <Brush d="M40 244c22 10 58 10 76 0 5-3 3-8-3-8-24-1-50-1-70 2-6 1-7 4-3 6z" color="#FF8B47" />
      <Spec cx={52} cy={198} rx={13} ry={8} />
      {/* lever arm */}
      <rect x="62" y="86" width="20" height="102" rx="10" fill="#141312" transform="rotate(18 72 188)" />
      <circle cx="78" cy="182" r="16" fill="#FAF7F2" stroke={INK} strokeOpacity="0.1" strokeWidth="2" />
      <circle cx="78" cy="182" r="5" fill="#141312" />
      <circle cx="86" cy="88" r="20" fill="#FFC529" />
      <Spec cx={79} cy={81} rx={7} ry={4.5} />
      {/* button on top of second block */}
      <rect x="150" y="150" width="86" height="114" rx="24" fill="#2B4EE6" />
      <rect x="150" y="150" width="86" height="114" rx="24" fill="url(#autB)" />
      <Brush d="M158 172c18-8 52-8 68 2 5 3 3 9-4 9-20 0-44 1-62-2-6-1-7-7-2-9z" color="#5A72F2" />
      <Spec cx={166} cy={168} rx={12} ry={7} />
      <rect x="172" y="122" width="42" height="34" rx="14" fill="#F0533F" />
      <rect x="172" y="122" width="42" height="34" rx="14" fill="url(#autC)" />
      <Spec cx={181} cy={130} rx={8} ry={4.5} />
      {/* domino chain result */}
      <g>
        <rect x="262" y="196" width="40" height="68" rx="12" fill="#FFC529" transform="rotate(-8 282 230)" />
        <Spec cx={272} cy={206} rx={7} ry={4.5} rot={-8} />
        <rect x="292" y="230" width="34" height="34" rx="10" fill="#5FD3A5" />
        <Spec cx={300} cy={237} rx={6} ry={4} />
      </g>
      {/* dashed trigger path */}
      <path
        d="M88 74c30-24 66-28 96-12M196 108c22 8 42 30 62 78"
        fill="none"
        stroke={INK}
        strokeOpacity="0.3"
        strokeWidth="2.5"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient id="autA" cx="0.3" cy="0.2" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#7A3000" stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id="autB" cx="0.3" cy="0.2" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#0A1B66" stopOpacity="0.35" />
        </radialGradient>
        <linearGradient id="autC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="0.7" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  5. DEVICE — chunky phone + monitor pair (web & mobile)            */
/* ------------------------------------------------------------------ */

export function ToyDevice({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="web and mobile toy">
      <ContactShadow id="devSh" cx={170} cy={270} rx={110} ry={15} />
      {/* monitor */}
      <rect x="36" y="70" width="150" height="118" rx="24" fill="#FAF7F2" />
      <rect x="36" y="70" width="150" height="118" rx="24" fill="url(#devA)" />
      <rect x="52" y="86" width="118" height="80" rx="14" fill="#2B4EE6" />
      <Brush d="M60 128c24 8 74 8 100 0 5-2 4-7-3-7-30-1-64-1-94 1-5 1-6 4-3 6z" color="#5A72F2" />
      <circle cx="76" cy="106" r="7" fill="#FFC529" />
      <circle cx="98" cy="106" r="7" fill="#F0533F" />
      <Spec cx={64} cy={94} rx={9} ry={5.5} o={0.5} />
      <rect x="94" y="188" width="22" height="30" fill="#D8D0C2" />
      <rect x="70" y="216" width="76" height="16" rx="8" fill="#141312" />
      {/* phone leaning in front */}
      <g transform="rotate(8 236 190)">
        <rect x="196" y="108" width="86" height="158" rx="26" fill="#F96A1B" />
        <rect x="196" y="108" width="86" height="158" rx="26" fill="url(#devB)" />
        <rect x="208" y="126" width="62" height="106" rx="14" fill="#FAF7F2" />
        <Brush d="M212 206c18 6 38 6 54 0 4-2 3-6-2-6-16-1-34-1-50 1-4 1-5 4-2 5z" color="#5FD3A5" streak={false} />
        <rect x="214" y="136" width="34" height="12" rx="6" fill="#F96A1B" />
        <rect x="214" y="156" width="50" height="8" rx="4" fill="#141312" opacity="0.2" />
        <rect x="214" y="170" width="42" height="8" rx="4" fill="#141312" opacity="0.15" />
        <Spec cx={212} cy={118} rx={9} ry={5} />
        <circle cx="239" cy="250" r="7" fill="#FAF7F2" />
      </g>
      <defs>
        <radialGradient id="devA" cx="0.3" cy="0.15" r="1.15">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#B7AD9C" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="devB" cx="0.3" cy="0.15" r="1.15">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#7A3000" stopOpacity="0.35" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  6. BRAIN — AI toy: painted head-module with plugs                 */
/* ------------------------------------------------------------------ */

export function ToyBrain({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="AI toy">
      <ContactShadow id="brnSh" cx={170} cy={272} rx={95} ry={14} />
      {/* head */}
      <rect x="88" y="60" width="164" height="180" rx="70" fill="#FAF7F2" />
      <rect x="88" y="60" width="164" height="180" rx="70" fill="url(#brnA)" />
      <rect x="88" y="60" width="164" height="180" rx="70" fill="none" stroke={INK} strokeOpacity="0.08" strokeWidth="2" />
      {/* painted hemispheres */}
      <Brush d="M108 118c4-28 30-46 56-44 10 1 12 10 4 16-20 14-36 34-44 56-4 10-14 8-16-2-2-8-2-18 0-26z" color="#F96A1B" opacity={0.92} />
      <Brush d="M232 118c-4-28-30-46-56-44-10 1-12 10-4 16 20 14 36 34 44 56 4 10 14 8 16-2 2-8 2-18 0-26z" color="#2B4EE6" opacity={0.9} />
      <Brush d="M120 190c14 22 86 22 100 0 4-7-3-13-11-11-26 6-52 6-78 0-8-2-15 4-11 11z" color="#FFC529" opacity={0.92} />
      <Brush d="M160 132c6-4 14-4 20 0 5 4 5 12 0 16-6 4-14 4-20 0-5-4-5-12 0-16z" color="#5FD3A5" streak={false} />
      <Spec cx={122} cy={84} rx={16} ry={9} o={0.85} />
      {/* plug on top */}
      <rect x="156" y="20" width="28" height="48" rx="13" fill="#141312" />
      <rect x="150" y="12" width="40" height="20" rx="10" fill="#F0533F" />
      <Spec cx={158} cy={17} rx={7} ry={3.5} />
      {/* connector pins on the side */}
      <g fill="#141312">
        <rect x="252" y="120" width="24" height="10" rx="5" />
        <rect x="252" y="140" width="24" height="10" rx="5" />
        <rect x="252" y="160" width="24" height="10" rx="5" />
      </g>
      <defs>
        <radialGradient id="brnA" cx="0.3" cy="0.15" r="1.15">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#B7AD9C" stopOpacity="0.4" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  7. BRIDGE — two systems connected by a colorful bridge            */
/* ------------------------------------------------------------------ */

export function ToyBridge({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="integration bridge toy">
      <ContactShadow id="brgSh" cx={170} cy={272} rx={125} ry={15} />
      {/* left tower */}
      <rect x="30" y="120" width="84" height="146" rx="24" fill="#2B4EE6" />
      <rect x="30" y="120" width="84" height="146" rx="24" fill="url(#brgA)" />
      <Brush d="M38 152c18-9 48-9 66 0 5 3 3 9-4 9-20 1-42 1-58-1-6-1-8-6-4-8z" color="#5A72F2" />
      <Spec cx={48} cy={138} rx={11} ry={7} />
      <circle cx="72" cy="220" r="12" fill="#FFC529" />
      {/* right tower */}
      <rect x="226" y="120" width="84" height="146" rx="24" fill="#F0533F" />
      <rect x="226" y="120" width="84" height="146" rx="24" fill="url(#brgB)" />
      <Brush d="M234 236c18 8 48 8 66-2 5-3 3-8-4-8-20 0-42-1-58 2-6 1-8 6-4 8z" color="#FF7A67" />
      <Spec cx={244} cy={138} rx={11} ry={7} />
      <circle cx="268" cy="220" r="12" fill="#5FD3A5" />
      {/* bridge deck */}
      <rect x="106" y="176" width="128" height="26" rx="13" fill="#141312" />
      {/* suspension curve */}
      <path
        d="M112 176c22-52 94-52 116 0"
        fill="none"
        stroke="#141312"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M140 152v24M170 142v34M200 152v24" stroke="#141312" strokeWidth="5" strokeLinecap="round" />
      <circle cx="170" cy="140" r="14" fill="#FFC529" />
      <Spec cx={165} cy={135} rx={5} ry={3.5} />
      {/* module crossing the bridge */}
      <g className="toy-module" style={{ ["--slide-dist" as string]: "76px" }}>
        <rect x="136" y="168" width="24" height="24" rx="8" fill="#F96A1B" />
        <Spec cx={142} cy={174} rx={5} ry={3.5} o={0.5} />
      </g>
      <defs>
        <radialGradient id="brgA" cx="0.3" cy="0.2" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#0A1B66" stopOpacity="0.35" />
        </radialGradient>
        <radialGradient id="brgB" cx="0.3" cy="0.2" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#7A1F10" stopOpacity="0.3" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  8. NODE — IoT hub with satellites                                  */
/* ------------------------------------------------------------------ */

export function ToyNode({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="IoT node toy">
      <ContactShadow id="nodeSh" cx={170} cy={272} rx={105} ry={14} />
      {/* signal arcs */}
      <g fill="none" stroke="#F96A1B" strokeWidth="7" strokeLinecap="round" opacity="0.9">
        <path d="M140 84c14-14 46-14 60 0" />
        <path d="M126 62c22-22 66-22 88 0" stroke="#FFC529" />
      </g>
      {/* hub body */}
      <rect x="98" y="120" width="144" height="130" rx="40" fill="#FAF7F2" />
      <rect x="98" y="120" width="144" height="130" rx="40" fill="url(#nodeA)" />
      <rect x="98" y="120" width="144" height="130" rx="40" fill="none" stroke={INK} strokeOpacity="0.08" strokeWidth="2" />
      <Brush d="M110 214c26 14 92 14 120 0 6-3 4-10-4-10-38-1-78-1-112 2-7 1-9 5-4 8z" color="#F96A1B" opacity={0.92} />
      <Brush d="M116 136c20-7 68-7 88 0 6 2 4 8-3 8-28 1-56 1-82-1-6-1-8-6-3-7z" color="#2B4EE6" opacity={0.9} />
      <Spec cx={122} cy={140} rx={14} ry={8} />
      <circle cx="170" cy="180" r="16" fill="#5FD3A5" />
      <Spec cx={164} cy={174} rx={5} ry={3.5} o={0.6} />
      {/* satellites */}
      <g className="toy-float-slow">
        <rect x="24" y="150" width="44" height="44" rx="14" fill="#FFC529" />
        <Spec cx={33} cy={159} rx={8} ry={5} />
      </g>
      <g className="toy-float-slow" style={{ animationDelay: "-2.5s" }}>
        <rect x="272" y="128" width="44" height="44" rx="14" fill="#F0533F" />
        <Spec cx={281} cy={137} rx={8} ry={5} />
      </g>
      <g className="toy-float-slow" style={{ animationDelay: "-4.5s" }}>
        <rect x="250" y="216" width="40" height="40" rx="13" fill="#2B4EE6" />
        <Spec cx={259} cy={225} rx={7} ry={4.5} />
      </g>
      {/* connector tubes */}
      <path d="M70 176c-14 2-22 6-28 10M268 162c12-2 22-6 28-10M254 232c10 4 16 8 22 12" fill="none" stroke="#141312" strokeOpacity="0.25" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 8" />
      <defs>
        <radialGradient id="nodeA" cx="0.3" cy="0.15" r="1.15">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#B7AD9C" stopOpacity="0.4" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  9. SHELL — protective dome over a small object (security)         */
/* ------------------------------------------------------------------ */

export function ToyShell({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="security shell toy">
      <ContactShadow id="shlSh" cx={170} cy={270} rx={105} ry={14} />
      {/* protected object */}
      <circle cx="170" cy="216" r="34" fill="#FFC529" />
      <circle cx="170" cy="216" r="34" fill="url(#shlB)" />
      <Spec cx={158} cy={204} rx={10} ry={6.5} />
      <circle cx="170" cy="216" r="8" fill="#141312" opacity="0.75" />
      {/* dome */}
      <path
        d="M62 226a108 108 0 0 1 216 0c0 10-8 16-20 16H82c-12 0-20-6-20-16z"
        fill="#FAF7F2"
      />
      <path
        d="M62 226a108 108 0 0 1 216 0c0 10-8 16-20 16H82c-12 0-20-6-20-16z"
        fill="url(#shlA)"
      />
      <path
        d="M62 226a108 108 0 0 1 216 0c0 10-8 16-20 16H82c-12 0-20-6-20-16z"
        fill="none"
        stroke={INK}
        strokeOpacity="0.08"
        strokeWidth="2"
      />
      {/* painted ribs */}
      <Brush d="M96 226c4-52 26-92 48-108 8-6 16 2 10 10-16 24-30 58-32 94-1 8-8 10-14 8-7-2-13-6-12-12z" color="#2B4EE6" opacity={0.9} streak={false} />
      <Brush d="M244 226c-4-52-26-92-48-108-8-6-16 2-10 10 16 24 30 58 32 94 1 8 8 10 14 8 7-2 13-6 12-12z" color="#5FD3A5" opacity={0.85} streak={false} />
      <Brush d="M142 122c16-8 40-8 56 0 6 3 4 10-4 10-16 1-32 1-48 0-8 0-10-7-4-10z" color="#F96A1B" opacity={0.92} />
      <Spec cx={124} cy={132} rx={18} ry={10} o={0.9} />
      {/* lock handle */}
      <rect x="150" y="242" width="40" height="18" rx="9" fill="#141312" />
      <defs>
        <radialGradient id="shlA" cx="0.3" cy="0.1" r="1.2">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#B7AD9C" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="shlB" cx="0.3" cy="0.2" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#8A6400" stopOpacity="0.35" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  10. TUBES — transparent tubes transporting colored cubes (data)   */
/* ------------------------------------------------------------------ */

export function ToyTubes({ className }: ToyProps) {
  return (
    <svg viewBox="0 0 340 300" className={wrap(className)} role="img" aria-label="data tubes toy">
      <ContactShadow id="tubSh" cx={170} cy={272} rx={115} ry={15} />
      {/* funnel container */}
      <rect x="110" y="40" width="120" height="76" rx="24" fill="#FAF7F2" />
      <rect x="110" y="40" width="120" height="76" rx="24" fill="url(#tubA)" />
      <Brush d="M120 62c24-8 74-8 98 0 6 2 4 8-3 8-30 1-62 1-92-1-6-1-8-5-3-7z" color="#F96A1B" opacity={0.9} />
      <Spec cx={128} cy={54} rx={12} ry={7} />
      {/* three transparent tubes */}
      <g stroke={INK} strokeOpacity="0.09" strokeWidth="24" strokeLinecap="round" fill="none">
        <path d="M136 116v130" />
        <path d="M170 116v140" />
        <path d="M204 116v130" />
      </g>
      <g stroke="#ffffff" strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round" fill="none" transform="translate(-6 0)">
        <path d="M136 116v130" />
        <path d="M170 116v140" />
        <path d="M204 116v130" />
      </g>
      {/* falling cubes */}
      <g>
        <g className="toy-fall" style={{ ["--fall-dist" as string]: "104px" }}>
          <rect x="123" y="128" width="22" height="22" rx="7" fill="#F0533F" transform="rotate(12 134 139)" />
        </g>
        <g className="toy-fall" style={{ ["--fall-dist" as string]: "116px", animationDelay: "-1.2s" }}>
          <circle cx="170" cy="132" r="11" fill="#5FD3A5" />
        </g>
        <g className="toy-fall" style={{ ["--fall-dist" as string]: "104px", animationDelay: "-2.4s" }}>
          <rect x="193" y="126" width="22" height="22" rx="7" fill="#2B4EE6" transform="rotate(-10 204 137)" />
        </g>
      </g>
      {/* collection tray */}
      <rect x="86" y="238" width="168" height="30" rx="15" fill="#141312" />
      <circle cx="128" cy="253" r="8" fill="#F96A1B" />
      <circle cx="170" cy="253" r="8" fill="#FFC529" />
      <circle cx="212" cy="253" r="8" fill="#5FD3A5" />
      <defs>
        <radialGradient id="tubA" cx="0.3" cy="0.15" r="1.15">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#B7AD9C" stopOpacity="0.4" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  11. DISC — chunky rotating plastic disc with circular text        */
/* ------------------------------------------------------------------ */

export function ToyDisc({
  label,
  className,
  paint = "#F96A1B",
  spin = true,
  children,
}: {
  label: string;
  className?: string;
  paint?: string;
  spin?: boolean;
  children?: ReactNode;
}) {
  return (
    <svg viewBox="0 0 240 240" className={wrap(className)} role="img" aria-label={label}>
      <defs>
        <path id="discTextPath" d="M120 34a86 86 0 1 1 -0.01 0" />
        <radialGradient id="discFace" cx="0.35" cy="0.25" r="1.1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#B7AD9C" stopOpacity="0.35" />
        </radialGradient>
      </defs>
      {/* chunky disc body */}
      <circle cx="120" cy="126" r="102" fill="#D8D0C2" />
      <circle cx="120" cy="118" r="102" fill="#FAF7F2" />
      <circle cx="120" cy="118" r="102" fill="url(#discFace)" />
      <circle cx="120" cy="118" r="102" fill="none" stroke={INK} strokeOpacity="0.07" strokeWidth="2" />
      {/* painted ring segments */}
      <g className={spin ? "toy-spin" : undefined}>
        <path d="M120 40a78 78 0 0 1 67.5 39l-27 16a46 46 0 0 0-40.5-23z" fill={paint} opacity="0.95" />
        <path d="M52 82a78 78 0 0 1 50-40l8 31a46 46 0 0 0-30 24z" fill="#2B4EE6" opacity="0.9" />
        <path d="M46 130a78 78 0 0 1 14-42l26 18a46 46 0 0 0-8 26z" fill="#FFC529" opacity="0.9" />
      </g>
      <circle cx="120" cy="118" r="44" fill="#141312" />
      <circle cx="120" cy="118" r="44" fill="none" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="2" />
      <Spec cx={98} cy={84} rx={22} ry={12} o={0.9} />
      {/* circular mono label */}
      <text fontFamily="var(--font-mono), monospace" fontSize="15" letterSpacing="4" fill={INK}>
        <textPath href="#discTextPath" startOffset="0%">
          {label}
        </textPath>
      </text>
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  12. STROKE — standalone decorative brush stroke                   */
/* ------------------------------------------------------------------ */

export function PaintStroke({
  className,
  color = "#F96A1B",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 200 60" className={wrap(className)} aria-hidden="true">
      <path
        d="M12 40c26-18 62-28 104-24 26 2 50 10 70 22 6 4 2 12-6 12-56 2-118 6-162 2-10-1-12-8-6-12z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M20 32c28-12 60-18 96-16"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.3"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  13. BLOB — small painted accent blob                              */
/* ------------------------------------------------------------------ */

export function PaintBlob({
  className,
  color = "#5FD3A5",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className={wrap(className)} aria-hidden="true">
      <path
        d="M60 12c26 0 48 20 48 46 0 28-24 50-50 48C32 104 12 82 14 56 16 32 34 12 60 12z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M42 30c8-6 22-8 32-4"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
