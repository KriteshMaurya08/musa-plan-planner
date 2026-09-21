import { AlertTriangle, GitFork, IndianRupee, ScanSearch } from "lucide-react";
const stats = [
  { label: "Eligible Scholarships", value: "8", detail: "+3 after profile analysis", icon: ScanSearch },
  { label: "Compatible Plans", value: "5", detail: "12 combinations evaluated", icon: GitFork },
  { label: "Potential Benefit", value: "₹92,000", detail: "Maximum available", icon: IndianRupee },
  { label: "Conflicts Detected", value: "4", detail: "2 require attention", icon: AlertTriangle, alert: true },
];
export function DashboardStats() { return <div className="grid border-l border-t border-border sm:grid-cols-2 xl:grid-cols-4">{stats.map(({label,value,detail,icon:Icon,alert})=><div key={label} className="border-b border-r border-border bg-card p-4 lg:p-5"><div className="flex items-center justify-between"><span className="text-xs text-muted-foreground">{label}</span><Icon size={16} className={alert ? "text-destructive" : "text-primary"}/></div><div className="mt-3 font-display text-2xl font-semibold">{value}</div><div className="mt-1 font-mono text-[9px] uppercase text-muted-foreground">{detail}</div></div>)}</div> }
