"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const sensors = ["pH", "EC", "FLOW", "TEMP", "RH", "LIGHT", "LEVEL", "CAMERA"];

export function Hero() {
  const reduce = useReducedMotion();
  return <section className="grid-bg overflow-hidden border-b border-white/10"><div className="section grid min-h-[710px] items-center gap-12 lg:grid-cols-[1fr_.95fr]">
    <div><p className="eyebrow">Hydroponic intelligence platform</p><h1 className="display mt-5 text-6xl font-bold leading-[.91] md:text-8xl">Intelligent<br/><span className="text-hydro">Hydroponics.</span><br/><span className="text-white/60">Measured. Connected. Predictive.</span></h1><p className="muted mt-7 max-w-xl text-lg leading-relaxed">Hydro AI connects physical farm systems with sensing, edge intelligence and artificial intelligence to turn hydroponic data into actionable understanding.</p><div className="mt-8 flex flex-wrap gap-3"><Link className="button button-primary" href="/technology">Explore the technology <ArrowRight size={17}/></Link><Link className="button button-secondary" href="/solutions#configuration">Configure your system</Link></div></div>
    <motion.div initial={reduce ? false : {opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="technical-surface relative mx-auto aspect-square w-full max-w-[550px] overflow-hidden rounded-2xl border border-white/10">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="48" r="16" fill="none" stroke="rgba(34,211,238,.28)"/><circle cx="50" cy="48" r="30" fill="none" stroke="rgba(255,255,255,.11)"/>{sensors.map((_,i)=>{const a=i/8*Math.PI*2-Math.PI/2;const x=50+39*Math.cos(a);const y=48+39*Math.sin(a);return <line key={i} x1={x} y1={y} x2="50" y2="48" className="signal-line"/>})}</svg>
      <div className="absolute left-1/2 top-[48%] grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-aqua/50 bg-[#071a14] text-center shadow-[0_0_60px_rgba(34,211,238,.2)]"><b className="text-lg">HYDRO AI<br/><span className="text-[.65rem] tracking-widest text-aqua">CORE</span></b></div>
      {sensors.map((sensor,index)=>{const angle=index/8*Math.PI*2-Math.PI/2;const x=50+42*Math.cos(angle);const y=48+42*Math.sin(angle);return <div key={sensor} style={{left:`${x}%`,top:`${y}%`}} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/20 bg-[#071a14]/90 px-2.5 py-1.5 text-[.65rem] font-bold tracking-wide"><i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-aqua"/>{sensor}</div>})}
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 text-center text-[.6rem] font-bold tracking-widest text-white/65"><span>DATA</span><span>INTELLIGENCE</span><span>DECISION</span></div>
    </motion.div>
  </div></section>;
}
