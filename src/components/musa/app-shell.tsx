import { Link, useRouterState } from "@tanstack/react-router";
import { BarChart3, CircleUserRound, FileText, FlaskConical, GitFork, GraduationCap, LayoutDashboard, Network, ScrollText, Settings } from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  ["Dashboard", "/dashboard", LayoutDashboard], ["My Profile", "/profile", CircleUserRound], ["Scholarships", "/scholarships", GraduationCap], ["Compatibility Network", "/compatibility", Network], ["Plans", "/plans", GitFork], ["What If?", "/what-if", FlaskConical], ["Documents", "/documents", FileText],
] as const;

export function AppShell({ children, title, eyebrow = "Scholarship intelligence" }: { children: ReactNode; title: string; eyebrow?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[248px_1fr]">
    <aside className="border-b border-border bg-sidebar lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
      <div className="flex h-18 items-center justify-between px-5 lg:h-24 lg:border-b lg:border-sidebar-border">
        <Link to="/" className="flex items-center gap-3"><span className="grid size-9 place-items-center border border-primary bg-primary text-primary-foreground"><BarChart3 size={18}/></span><span><b className="block font-display text-lg leading-none">MUSA CodeX</b><small className="mt-1 block font-mono text-[9px] uppercase text-muted-foreground">Decision System / 01</small></span></Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:block lg:space-y-1 lg:px-3 lg:py-5" aria-label="Main navigation">
        {nav.map(([label,to,Icon]) => <Link key={to} to={to} className={`group flex shrink-0 items-center gap-3 border-l-2 px-3 py-2.5 text-sm transition-colors ${pathname===to ? "border-primary bg-sidebar-accent text-sidebar-accent-foreground" : "border-transparent text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}><Icon size={17}/><span>{label}</span></Link>)}
      </nav>
      <div className="hidden absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-3 lg:block">
        <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground"><CircleUserRound size={17}/> Profile</Link>
        <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground"><Settings size={17}/> Settings</div>
      </div>
    </aside>
    <main className="min-w-0">
      <header className="flex min-h-20 items-center justify-between border-b border-border bg-background/95 px-5 lg:px-8">
        <div><p className="font-mono text-[10px] uppercase tracking-wider text-primary">{eyebrow}</p><h1 className="mt-1 font-display text-xl font-semibold lg:text-2xl">{title}</h1></div>
        <div className="flex items-center gap-3"><span className="hidden border border-border bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground sm:block">DEMO DATA</span><span className="grid size-9 place-items-center border border-border bg-secondary font-mono text-xs">KS</span></div>
      </header>
      <div className="p-4 lg:p-8">{children}</div>
    </main>
  </div>
}

export function SectionHeading({ code, title, action }: { code: string; title: string; action?: ReactNode }) {
 return <div className="mb-4 flex items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase text-muted-foreground">{code}</p><h2 className="mt-1 font-display text-lg font-semibold">{title}</h2></div>{action}</div>
}
