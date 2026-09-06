import { SectionHeading } from "@/components/ui/section-heading";

const inputs = ["pH", "EC", "FLOW", "TEMP", "RH", "LIGHT", "CAMERA", "TIME", "INTERVENTIONS"];
const layers = ["SENSOR FUSION", "HYDROCORE", "HYDROEDGE", "HYDRO AI ENGINE"];
const outputs = ["DETECT", "PREDICT", "RECOMMEND"];

export function SignalFusion() {
  return <section className="section">
    <SectionHeading eyebrow="Sensor fusion" title="Hydro AI connects the signals." copy="Measurement becomes useful when sensor readings, plant observations and interventions are kept in context over time." />
    <div className="technical-surface mt-10 overflow-hidden rounded-2xl border border-white/10 p-5 md:p-8">
      <div className="grid gap-5 lg:grid-cols-[.7fr_.8fr_.8fr_.8fr_1fr] lg:items-center">
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
          {inputs.map((input) => <span className="rounded border border-white/15 bg-[#06110e]/60 px-3 py-2 text-center text-xs font-bold" key={input}>{input}</span>)}
        </div>
        {layers.map((layer, index) => <div key={layer} className="relative rounded-xl border border-aqua/30 bg-[#071a14]/85 p-5 text-center">
          <span className="text-xs font-black tracking-widest text-aqua">{layer}</span>
          {index < 3 ? <span className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 text-aqua lg:-right-7 lg:left-auto lg:top-1/2 lg:block">→</span> : null}
        </div>)}
      </div>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        {outputs.map((output) => <span className="rounded-md bg-violet/15 px-4 py-2 text-xs font-bold text-violet" key={output}>{output}</span>)}
        <span className="text-aqua">→</span>
        <span className="rounded-md border border-hydro/30 bg-hydro/10 px-4 py-2 text-xs font-bold text-hydro">SAFE CONTROL</span>
      </div>
    </div>
  </section>;
}
