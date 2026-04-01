import Link from "next/link";
import { PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/taxi", label: "Taxi" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold"><PlaneTakeoff className="h-5 w-5 text-primary" />Shaanvi Tours</Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">{navLinks.map((link) => <Link key={link.href} href={link.href} className="text-slate-600 transition hover:text-slate-900">{link.label}</Link>)}</nav>
        <div className="flex items-center gap-2"><Button variant="outline" size="sm" asChild><Link href="/login">Login</Link></Button><Button size="sm" asChild><Link href="/register">Register</Link></Button></div>
      </div>
    </header>
  );
}
