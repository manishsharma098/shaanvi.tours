import Link from "next/link";
import { cn } from "@/lib/utils";

type SidebarItem = { href: string; label: string; icon?: React.ReactNode };

export function AppSidebar({ title, items, className }: { title: string; items: SidebarItem[]; className?: string }) {
  return (
    <aside className={cn("w-full rounded-2xl border bg-white p-4 shadow-sm md:sticky md:top-6 md:w-64 md:h-fit", className)}>
      <p className="mb-4 text-sm font-semibold text-slate-500">{title}</p>
      <nav className="space-y-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100">{item.icon}{item.label}</Link>
        ))}
      </nav>
    </aside>
  );
}
