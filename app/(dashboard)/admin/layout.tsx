import { CarTaxiFront, ClipboardList, LayoutDashboard, Map } from "lucide-react";
import { AppSidebar } from "@/components/ui/sidebar";

const items = [
  { href: "/admin", label: "Overview", icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: "/admin#tours", label: "Manage Tours", icon: <Map className="h-4 w-4" /> },
  { href: "/admin#taxi", label: "Manage Taxi", icon: <CarTaxiFront className="h-4 w-4" /> },
  { href: "/admin#bookings", label: "Bookings Table", icon: <ClipboardList className="h-4 w-4" /> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-[260px_1fr]">
      <AppSidebar title="Admin Panel" items={items} />
      <section>{children}</section>
    </main>
  );
}
