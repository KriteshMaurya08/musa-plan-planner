import { AlertTriangle, GitFork, IndianRupee, ScanSearch } from "lucide-react";
const stats = [
  { label: "Eligible Scholarships", value: "8", detail: "+3 after profile analysis", icon: ScanSearch },
  { label: "Compatible Plans", value: "5", detail: "12 combinations evaluated", icon: GitFork },
  { label: "Potential Benefit", value: "₹92,000", detail: "Maximum available", icon: IndianRupee },
  { label: "Conflicts Detected", value: "4", detail: "2 require attention", icon: AlertTriangle, alert: true },
];
export function DashboardStats() { return <div className="grid border-l border-t border-border sm:grid-cols-2 xl:grid-cols-4">{stats.map(({label,value,detail,icon:Icon,alert},index)=><div key={label} className="group relative border-b border-r border-border bg-card p-4 transition-colors hover:bg-accent/40 lg:p-5"><span className={`absolute inset-x-0 top-0 h-0.5 scale-x-0 transition-transform group-hover:scale-x-100 ${alert?"bg-destructive":"bg-primary"}`}/><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase text-muted-foreground">0{index+1} / {label}</span><Icon size={15} className={alert ? "text-destructive" : "text-primary"}/></div><div className="mt-3 font-display text-2xl font-semibold">{value}</div><div className="mt-1 font-mono text-[8px] uppercase text-muted-foreground">{detail}</div></div>)}</div> }
