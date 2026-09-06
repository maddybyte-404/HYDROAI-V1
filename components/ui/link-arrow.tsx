import Link from "next/link"; import { ArrowUpRight } from "lucide-react";
export function LinkArrow({href,label}:{href:string;label:string}) { return <Link href={href} className="mt-7 inline-flex items-center gap-2 font-bold text-aqua hover:text-white">{label}<ArrowUpRight size={17}/></Link>; }
