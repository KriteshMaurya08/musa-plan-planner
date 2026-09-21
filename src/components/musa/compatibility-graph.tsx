import { useCallback, useMemo, useState } from "react";
import { Background, Controls, Handle, Position, ReactFlow, type Edge, type Node, type NodeProps } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Check, Minus, X } from "lucide-react";
import { formatMoney, relations, scholarships, type Scholarship, type RelationType } from "@/data/mock-scholarships";

type ScholarshipNodeData = { scholarship: Scholarship; active: boolean; connected: boolean };
const positions = [[60,80],[350,20],[650,100],[120,310],[420,270],[700,340],[300,490],[610,520]];
function ScholarshipNode({ data }: NodeProps<Node<ScholarshipNodeData>>) { const {scholarship:s,active,connected}=data; return <div className={`w-44 border bg-card p-3 shadow-sm transition-all ${active?"border-primary ring-2 ring-primary/20":connected?"border-success":"border-border"}`}><Handle type="target" position={Position.Left} className="opacity-0"/><div className="flex items-center justify-between"><span className="font-mono text-[9px] text-muted-foreground">{s.shortId}</span><span className={`size-2 ${s.status==="Conflict"?"bg-destructive":s.status==="Review"?"bg-warning":"bg-success"}`}/></div><p className="mt-2 line-clamp-2 text-xs font-semibold leading-4">{s.name}</p><div className="mt-2 flex items-center justify-between font-mono text-[9px]"><span>{formatMoney(s.benefit)}</span><span className="text-muted-foreground">{s.eligibility}%</span></div><Handle type="source" position={Position.Right} className="opacity-0"/></div> }
const nodeTypes={scholarship:ScholarshipNode};
export function CompatibilityGraph({ onSelect, compact=false }: { onSelect?:(s:Scholarship)=>void; compact?:boolean }) {
 const [selected,setSelected]=useState("sch-001"); const [relation,setRelation]=useState<{type:RelationType;reason:string}|null>(null);
 const connected=useMemo(()=>new Set(relations.filter(r=>r.source===selected||r.target===selected).flatMap(r=>[r.source,r.target])),[selected]);
 const nodes:Node<ScholarshipNodeData>[] = useMemo(()=>scholarships.slice(0,compact?6:8).map((s,i)=>({id:s.id,type:"scholarship",position:{x:positions[i][0],y:positions[i][1]},data:{scholarship:s,active:s.id===selected,connected:connected.has(s.id)}})),[compact,selected,connected]);
 const edges:Edge[]=useMemo(()=>relations.filter(r=>nodes.some(n=>n.id===r.source)&&nodes.some(n=>n.id===r.target)).map((r,i)=>({id:`e${i}`,source:r.source,target:r.target,animated:r.type==="compatible"&&(r.source===selected||r.target===selected),label:r.type==="compatible"?"✓":r.type==="conflict"?"×":"—",className:`edge-${r.type}`,style:{strokeWidth:r.type==="conflict"?2:1.5},labelStyle:{fontSize:12,fontWeight:700},data:{type:r.type,reason:r.reason}})),[nodes,selected]);
 const onNodeClick=useCallback((_:unknown,node:Node<ScholarshipNodeData>)=>{setSelected(node.id);onSelect?.(node.data.scholarship)},[onSelect]);
 return <div className={`relative border border-border bg-card ${compact?"h-[380px]":"h-[590px]"}`}>
  <div className="absolute left-3 top-3 z-10 flex items-center gap-3 border border-border bg-background/90 px-3 py-2 font-mono text-[9px] uppercase"><span className="flex items-center gap-1 text-success"><Check size={11}/> Compatible</span><span className="flex items-center gap-1 text-destructive"><X size={11}/> Conflict</span><span className="flex items-center gap-1 text-muted-foreground"><Minus size={11}/> Related</span></div>
  <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodeClick={onNodeClick} onEdgeClick={(_,e)=>setRelation(e.data as {type:RelationType;reason:string})} fitView minZoom={0.55} maxZoom={1.4} nodesDraggable={!compact} proOptions={{hideAttribution:true}}><Background gap={24} size={1}/><Controls showInteractive={false}/></ReactFlow>
  {relation&&<div className="absolute bottom-3 left-3 right-14 z-10 border border-border bg-background p-3 shadow-lg"><div className="flex items-start justify-between gap-3"><div><p className={`font-mono text-[9px] uppercase ${relation.type==="conflict"?"text-destructive":"text-success"}`}>{relation.type} rule</p><p className="mt-1 text-xs">{relation.reason}</p></div><button className="text-muted-foreground" onClick={()=>setRelation(null)} aria-label="Close relation"><X size={14}/></button></div></div>}
 </div>
}
