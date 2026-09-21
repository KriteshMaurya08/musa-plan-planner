import { Check, FileText, X, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatMoney, type Scholarship } from "@/data/mock-scholarships";
export function ScholarshipDetailPanel({ scholarship, onClose }: { scholarship: Scholarship; onClose?:()=>void }) {
 return <aside className="h-full border border-border bg-card p-5">
  <div className="flex items-start justify-between gap-3"><div><p className="font-mono text-[10px] uppercase text-primary">{scholarship.shortId} / {scholarship.category}</p><h3 className="mt-2 font-display text-xl font-semibold">{scholarship.name}</h3><p className="mt-1 text-sm text-muted-foreground">{scholarship.provider}</p></div>{onClose&&<Button variant="ghost" size="icon" onClick={onClose} aria-label="Close details"><X/></Button>}</div>
  <div className="my-5 border-y border-border py-4"><span className="text-xs text-muted-foreground">Potential benefit</span><div className="mt-1 font-mono text-2xl font-semibold">{formatMoney(scholarship.benefit)}</div></div>
  <p className="text-sm leading-6 text-muted-foreground">{scholarship.description}</p>
  <DetailList title="Eligibility" values={scholarship.requirements}/>
  <div className="mt-5"><p className="mb-2 font-mono text-[10px] uppercase text-muted-foreground">Compatibility</p><div className="space-y-2 text-sm"><p className="flex gap-2"><Check size={15} className="mt-0.5 text-success"/> Compatible with SCH-001</p><p className="flex gap-2"><Check size={15} className="mt-0.5 text-success"/> Compatible with SCH-003</p>{scholarship.conflictWith&&<p className="flex gap-2"><XCircle size={15} className="mt-0.5 text-destructive"/> Conflicts with {scholarship.conflictWith}</p>}</div></div>
  <DetailList title="Documents" values={scholarship.documents} icon="file"/>
  <div className="mt-6 grid grid-cols-2 gap-2"><Button>Why am I eligible?</Button><Button variant="outline">View Compatibility</Button></div>
 </aside>
}
function DetailList({title,values,icon}:{title:string;values:string[];icon?:string}) {return <div className="mt-5"><p className="mb-2 font-mono text-[10px] uppercase text-muted-foreground">{title}</p><div className="space-y-2">{values.map(v=><p key={v} className="flex gap-2 text-sm">{icon?<FileText size={14} className="mt-0.5 text-muted-foreground"/>:<Check size={15} className="mt-0.5 text-success"/>}{v}</p>)}</div></div>}
