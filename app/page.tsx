import { Architecture } from "@/components/interactive/architecture";
import { ConfigurationTool } from "@/components/interactive/configuration-tool";
import { ParameterExplorer } from "@/components/interactive/parameter-explorer";
import { Hero } from "@/components/hero/hero";
import { ProductCard } from "@/components/cards/product-card";
import { ExperimentalPlatform } from "@/components/sections/experimental-platform";
import { IntelligenceSections } from "@/components/sections/intelligence";
import { SignalFusion } from "@/components/sections/signal-fusion";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkArrow } from "@/components/ui/link-arrow";
import { products } from "@/data/products";

const pipeline=["SENSING","DATA","UNDERSTANDING","PREDICTION","DECISION","VALIDATED AUTOMATION"];
const progression=["HYDROCORE|Physical intelligence","HYDROEDGE|Local intelligence","HYDROEDGE AI|Predictive intelligence","HYDRO AI PLATFORM|Farm intelligence · Future"];

export default function HomePage(){return <main><Hero/>
  <section className="section"><SectionHeading eyebrow="The intelligence gap" title="The problem isn’t a lack of data." copy="Modern hydroponic systems can produce pH, EC, temperature, humidity, flow, water level, light, plant images and intervention history. Isolated measurements do not automatically become intelligence."/><div className="status-rail mt-10 grid gap-3 md:grid-cols-6">{pipeline.map((x,i)=><div className="card p-4" key={x}><span className="text-aqua">0{i+1}</span><p className="mt-5 text-sm font-bold">{x}</p></div>)}</div></section>
  <ParameterExplorer/><SignalFusion/><Architecture/><ExperimentalPlatform/>
  <section className="section"><SectionHeading eyebrow="Modular product progression" title="Physical intelligence becomes farm intelligence." copy="Each layer extends the one before it. Product readiness remains deliberately transparent."/><div className="mt-9 grid gap-3 md:grid-cols-4">{progression.map((item,i)=>{const [name,description]=item.split("|");return <div className="card p-5" key={name}><span className="text-aqua">0{i+1}</span><h3 className="mt-5 font-bold">{name}</h3><p className="muted mt-2 text-sm">{description}</p></div>})}</div><div className="mt-8 grid gap-5 lg:grid-cols-3">{products.map(product=><ProductCard key={product.id} product={product}/>)}</div><LinkArrow href="/products" label="Compare products"/></section>
  <section className="section grid gap-8 lg:grid-cols-2"><div><SectionHeading eyebrow="Research progression" title="Autonomy follows validation." copy="From hardware validation and biological baselines through dataset construction, prediction, validation, decision support and constrained autonomy."/><LinkArrow href="/research" label="Explore our research"/></div><div className="card p-7"><p className="eyebrow">Research sequence</p><ol className="mt-5 space-y-3">{["Hardware validation","Biological baseline","Dataset construction","Prediction","Validation","Decision support","Constrained autonomy"].map((x,i)=><li className="flex gap-4" key={x}><span className="text-aqua">0{i+1}</span>{x}</li>)}</ol></div></section>
  <IntelligenceSections/><ConfigurationTool/>
</main>}
