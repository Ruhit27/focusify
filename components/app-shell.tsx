"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Folder, Lightbulb, BarChart3 } from "lucide-react";

function SidebarLink({ href, label, Icon }: { href: string; label: string; Icon: React.ComponentType }) {
  const pathname = usePathname();

  const isActive = pathname !== null && (pathname === href || pathname.startsWith(href + "/"));

  const baseClasses = "flex items-center rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10";
  const activeClasses = "flex items-center rounded px-3 py-2 text-sm font-medium text-primary bg-primary/20";

  return (
    <Link
      href={href}
      className={isActive ? activeClasses : baseClasses}
      style={{ transition: "all .15s" }}
    >
      <Icon h-4 w-4 />
      <span>{label}</span>
    </Link>
  );
}

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <nav
        className="w-64 bg-black flex flex-col border-r border-border-accent/20 flex-shrink-0"
        aria-label="Main navigation"
      >
        <div className="flex h-14 items-center px-4 justify-between">
          <span className="font-medium text-primary">FocusFlow</span>
        </div>

        <ul className="flex-1 flex flex-col py-2 space-y-1 px-2">
          <SidebarLink href="/dashboard" label="Dashboard" Icon={Home} />
          <SidebarLink href="/projects" label="Projects" Icon={Folder} />
          <SidebarLink href="/focus" label="Focus" Icon={Lightbulb} />
          <SidebarLink href="/ideas" label="Ideas" Icon={Lightbulb} />
          <SidebarLink href="/insights" label="Insights" Icon={BarChart3} />
        </ul>
      </nav>

      {/* Mobile tab bar */}
      <div className="border-t border-border-accent/20 flex flex-col sm:hidden">
        <div className="flex h-14 items-center px-2 justify-between border-b border-border-accent/10">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">FocusFlow</span>
        </div>
        <div className="flex flex-1 gap-1 px-2 pb-2">
          <Link
            href="/dashboard"
            className={pathname === "/dashboard" ? "flex-1 rounded bg-primary/20 text-primary" : "flex-1 rounded text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"}
            style={{ transition: "all .15s" }}
          >
            <Home className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className={pathname === "/projects" ? "flex-1 rounded bg-primary/20 text-primary" : "flex-1 rounded text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"}
            style={{ transition: "all .15s" }}
          >
            <Folder className="h-4 w-4" />
          </Link>
          <Link
            href="/focus"
            className={pathname === "/focus" ? "flex-1 rounded bg-primary/20 text-primary" : "flex-1 rounded text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"}
            style={{ transition: "all .15s" }}
          >
            <Lightbulb className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-y-auto px-4 py-6 sm:px-6">
        {children}
      </div>
    </div>
  );
}