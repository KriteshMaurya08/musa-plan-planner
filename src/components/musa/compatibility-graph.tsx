import { useCallback, useMemo, useState } from "react";
import { Background, BackgroundVariant, Controls, Handle, Position, ReactFlow, type Edge, type Node, type NodeProps } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Check, Circle, Minus, Network, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatMoney, relations, scholarships, type Scholarship, type RelationType } from "@/data/mock-scholarships";

type ScholarshipNodeData = { scholarship: Scholarship; active: boolean; connected: boolean };
const positions = [{x:60,y:80},{x:350,y:20},{x:650,y:100},{x:120,y:310},{x:420,y:270},{x:700,y:340},{x:300,y:490},{x:610,y:520}];
function ScholarshipNode({ data }: NodeProps<Node<ScholarshipNodeData>>) {
 const {scholarship:s,active,connected}=data;
 const statusClass=s.status==="Conflict"?"bg-destructive":s.status==="Review"?"bg-warning":"bg-success";
 return <div className={`group relative w-52 border bg-card transition-all duration-200 ${active?"border-primary shadow-[0_8px_24px_color-mix(in_oklab,var(--primary)_16%,transparent)]":connected?"border-success/70 shadow-sm":"border-border shadow-sm hover:border-muted-foreground/60 hover:shadow-md"}`}>
  <span className={`absolute inset-y-0 left-0 w-0.5 transition-colors ${active?"bg-primary":connected?"bg-success":"bg-transparent"}`}/>
  <Handle type="target" position={Position.Left} className="opacity-0"/>
  <div className="flex items-center justify-between border-b border-border/70 px-3 py-2">
   <span className={`font-mono text-[9px] uppercase ${active?"text-primary":"text-muted-foreground"}`}>{s.shortId}</span>
   <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase text-muted-foreground"><span className={`size-1.5 ${statusClass}`}/>{s.status}</span>
  </div>
  <div className="px-3 py-3">
   <p className="line-clamp-2 min-h-8 text-[12px] font-semibold leading-4">{s.name}</p>
   <p className="mt-1 truncate text-[9px] text-muted-foreground">{s.provider}</p>
   <div className="mt-3 flex items-end justify-between border-t border-border/60 pt-2 font-mono">
    <div><span className="block text-[8px] uppercase text-muted-foreground">Benefit</span><span className="text-[10px] font-semibold">{formatMoney(s.benefit)}</span></div>
    <div className="text-right"><span className="block text-[8px] uppercase text-muted-foreground">Match</span><span className={active?"text-primary":"text-foreground"}>{s.eligibility}%</span></div>
   </div>
  </div>
  <Handle type="source" position={Position.Right} className="opacity-0"/>
 </div>
}
const nodeTypes={scholarship:ScholarshipNode};
export function CompatibilityGraph({ onSelect, compact=false }: { onSelect?:(s:Scholarship)=>void; compact?:boolean }) {
 const [selected,setSelected]=useState("sch-001"); const [relation,setRelation]=useState<{type:RelationType;reason:string}|null>(null);
 const connected=useMemo(()=>new Set(relations.filter(r=>r.source===selected||r.target===selected).flatMap(r=>[r.source,r.target])),[selected]);
 const nodes:Node<ScholarshipNodeData>[] = useMemo(()=>scholarships.slice(0,compact?6:8).map((s,i)=>({id:s.id,type:"scholarship",position:positions[i] ?? {x:0,y:0},data:{scholarship:s,active:s.id===selected,connected:connected.has(s.id)}})),[compact,selected,connected]);
 const edges:Edge[]=useMemo(()=>relations.filter(r=>nodes.some(n=>n.id===r.source)&&nodes.some(n=>n.id===r.target)).map((r,i)=>{const isConnected=r.source===selected||r.target===selected;return {id:`e${i}`,source:r.source,target:r.target,animated:r.type==="compatible"&&isConnected,label:r.type==="compatible"?"✓":r.type==="conflict"?"×":"—",className:`edge-${r.type} ${isConnected?"edge-active":"edge-muted"}`,style:{strokeWidth:isConnected?2.25:1.25},labelStyle:{fontSize:11,fontWeight:700},data:{type:r.type,reason:r.reason}}}),[nodes,selected]);
 const onNodeClick=useCallback((_:unknown,node:Node<ScholarshipNodeData>)=>{setSelected(node.id);onSelect?.(node.data.scholarship)},[onSelect]);
 return <div className={`relative overflow-hidden border border-border bg-card ${compact?"h-[400px]":"h-[520px] lg:h-[640px]"}`}>
  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex min-h-14 items-center justify-between border-b border-border bg-card/95 px-3 backdrop-blur-sm sm:px-4">
   <div className="flex items-center gap-2"><span className="grid size-7 place-items-center border border-primary/30 bg-primary/10 text-primary"><Network size={14}/></span><div><p className="font-mono text-[9px] uppercase text-primary">Compatibility engine</p><p className="hidden text-[10px] text-muted-foreground sm:block">{nodes.length} eligible scholarships · {edges.length} mapped rules</p></div></div>
   <div className="flex items-center gap-2 font-mono text-[8px] uppercase sm:gap-3 sm:text-[9px]"><span className="flex items-center gap-1 text-success"><Check size={11}/> Compatible</span><span className="flex items-center gap-1 text-destructive"><X size={11}/> Conflict</span><span className="hidden items-center gap-1 text-muted-foreground sm:flex"><Minus size={11}/> Related</span><span className="hidden items-center gap-1 text-primary md:flex"><Circle size={9} fill="currentColor"/> Selected</span></div>
  </div>
  <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodeClick={onNodeClick} onEdgeClick={(_,e)=>setRelation(e.data as {type:RelationType;reason:string})} fitView fitViewOptions={{padding:0.18}} minZoom={0.48} maxZoom={1.5} nodesDraggable={!compact} proOptions={{hideAttribution:true}} className="pt-14"><Background variant={BackgroundVariant.Dots} gap={24} size={1}/><Controls showInteractive={false}/></ReactFlow>
  <div className="pointer-events-none absolute bottom-3 right-3 z-10 hidden border border-border bg-card/90 px-2 py-1 font-mono text-[8px] uppercase text-muted-foreground sm:block">Select nodes or relationship lines</div>
  {relation&&<div className="absolute bottom-3 left-3 right-12 z-20 border border-border bg-background p-3 shadow-lg sm:right-16"><div className="flex items-start justify-between gap-3"><div><p className={`font-mono text-[9px] uppercase ${relation.type==="conflict"?"text-destructive":relation.type==="compatible"?"text-success":"text-muted-foreground"}`}>{relation.type} rule</p><p className="mt-1 text-xs leading-5">{relation.reason}</p></div><Button variant="ghost" size="icon" className="size-7 shrink-0" onClick={()=>setRelation(null)} aria-label="Close relation"><X size={14}/></Button></div></div>}
 </div>
}
