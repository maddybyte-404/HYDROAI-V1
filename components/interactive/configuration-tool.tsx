"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { title:"What are you building?", options:["Research","Home / Serious Grow","Small Commercial","Commercial"] },
  { title:"What are you growing?", options:["Lettuce","Basil","Coriander","Spinach","Pak Choi","Microgreens","Tomato","Cucumber","Pepper","Strawberry"] },
  { title:"What does your site look like?", options:["Known area and water source","Climate / location review","Reliable electricity","Solar consideration","Labour availability"] },
  { title:"How much intelligence do you want?", options:["Monitoring","Automation","Edge Intelligence","AI Decision Support"] },
  { title:"Market and economics", options:["Research outcomes","Personal production","Local direct sales","Commercial market"] }
];

export function ConfigurationTool() {
  const [step,setStep]=useState(0); const [answers,setAnswers]=useState<string[]>([]); const [complete,setComplete]=useState(false);
  const option = (value:string) => { const next=[...answers]; next[step]=value; setAnswers(next); };
  const intelligence=answers[3] || "Monitoring"; const system=intelligence==="AI Decision Support"?"HydroEdge AI":intelligence==="Edge Intelligence"?"HydroEdge": "HydroCore";
  return <section id="configuration" className="bg-[#071a14]"><div className="section"><SectionHeading eyebrow="Indicative planning tool" title="Find your Hydro AI configuration." copy="A guided front-end tool for starting the right conversation. It is not a substitute for site, crop, water or economic validation."/>
    <div className="card mt-10 overflow-hidden"><div className="flex border-b border-white/10">{steps.map((_,i)=><div key={i} className={`flex-1 px-2 py-4 text-center text-xs font-bold ${i===step?"border-b-2 border-aqua text-aqua":"text-white/35"}`}>0{i+1}<span className="hidden md:inline"> · STEP</span></div>)}</div>
      {!complete ? <div className="p-6 md:p-9"><p className="eyebrow">Step 0{step+1}</p><h3 className="mt-2 text-2xl font-bold">{steps[step].title}</h3><div className="mt-7 grid gap-3 sm:grid-cols-2">{steps[step].options.map(item=><button key={item} onClick={()=>option(item)} className={`rounded-lg border p-4 text-left text-sm font-semibold transition ${answers[step]===item?"border-aqua bg-aqua/10":"border-white/10 bg-white/[.025] hover:bg-white/[.08]"}`}>{answers[step]===item&&<Check size={15} className="mr-2 inline text-aqua"/>}{item}</button>)}</div><div className="mt-8 flex justify-between"><button className="button button-secondary" onClick={()=>setStep(Math.max(0,step-1))} disabled={step===0}><ArrowLeft size={16}/>Back</button>{step===steps.length-1?<button className="button button-primary" onClick={()=>setComplete(true)} disabled={!answers[step]}>Generate configuration</button>:<button className="button button-primary" onClick={()=>setStep(step+1)} disabled={!answers[step]}>Continue<ArrowRight size={16}/></button>}</div></div> : <div className="p-6 md:p-9"><p className="eyebrow">Your Hydro AI configuration</p><h3 className="mt-2 text-4xl font-bold">Start with {system}</h3><div className="mt-7 grid gap-4 md:grid-cols-2">{[["Recommended monitoring","pH, EC, water temperature, level and operating context."],["Recommended automation","Begin with reviewable outputs and manual override pathways."],["Data requirements","Timestamped sensor measurements, plant images and intervention logs."],["Potential risks","Water variability, missing baselines, unvalidated controls and operating context."],["Pilot recommendation","Run a measured pilot before expanding automated decision pathways."],["Selected direction",answers.filter(Boolean).join(" · ")]].map(([head,body])=><div className="rounded-lg bg-white/[.045] p-4" key={head}><p className="text-sm font-bold">{head}</p><p className="muted mt-2 text-sm leading-relaxed">{body}</p></div>)}</div><button className="button button-secondary mt-8" onClick={()=>{setComplete(false);setStep(0);setAnswers([])}}>Start again</button></div>}</div><p className="muted mt-4 text-xs">Recommendations are indicative and must be validated against site conditions, water quality, crop requirements, market demand and operating economics.</p></div></section>;
}
