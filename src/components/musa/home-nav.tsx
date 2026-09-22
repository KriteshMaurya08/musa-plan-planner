import { Link, useRouterState } from "@tanstack/react-router";
import { BarChart3, CircleUserRound, FileText, FlaskConical, GitFork, GraduationCap, LayoutDashboard, Menu, Network, ScrollText, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["My Profile", "/profile", CircleUserRound],
  ["Scholarships", "/scholarships", GraduationCap],
  ["Compatibility Network", "/compatibility", Network],
  ["Plans", "/plans", GitFork],
  ["What If?", "/what-if", FlaskConical],
  ["Documents", "/documents", FileText],
] as const;

export function HomeNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu size={22} />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col border-l border-border bg-sidebar shadow-xl">
            <div className="flex h-20 items-center justify-between border-b border-sidebar-border px-5">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <span className="grid size-9 place-items-center bg-primary text-primary-foreground">
                  <BarChart3 size={18} />
                </span>
                <b className="font-display text-lg">MUSA CodeX</b>
              </Link>
              <Button variant="ghost" size="icon" aria-label="Close navigation" onClick={() => setOpen(false)}>
                <X size={20} />
              </Button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label="Mobile navigation">
              {nav.map(([label, to, Icon]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center gap-3 border-l-2 px-3 py-2.5 text-sm transition-colors ${
                    pathname === to
                      ? "border-primary bg-sidebar-accent text-sidebar-accent-foreground"
                      : "border-transparent text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Icon size={17} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
            <div className="border-t border-sidebar-border p-3">
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <CircleUserRound size={17} /> Profile
              </Link>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground">
                <ScrollText size={17} /> Settings
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
