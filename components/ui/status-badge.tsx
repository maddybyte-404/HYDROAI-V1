import type { Status } from "@/data/site";
const colors:Record<Status,string>={CURRENT:"bg-hydro/15 text-hydro",DEVELOPING:"bg-aqua/15 text-aqua",VALIDATION:"bg-electric/15 text-electric",FUTURE:"bg-violet/15 text-violet",BASELINE:"bg-hydro/15 text-hydro",LATER:"bg-white/10 text-white/70"};
export function StatusBadge({status}:{status:Status}) { return <span className={`inline-flex rounded-full px-2.5 py-1 text-[.65rem] font-black tracking-widest ${colors[status]}`}>{status}</span>; }
