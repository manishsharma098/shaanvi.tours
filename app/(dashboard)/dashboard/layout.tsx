import { Calendar, LayoutDashboard, User } from "lucide-react";
import { AppSidebar } from "@/components/ui/sidebar";

const items = [
  { href: "/dashboard", label: "My Bookings", icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: "/dashboard#upcoming", label: "Upcoming Trips", icon: <Calendar className="h-4 w-4" /> },
  { href: "/dashboard#profile", label: "Profile", icon: <User className="h-4 w-4" /> },
];

export default function UserDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-[260px_1fr]">
      <AppSidebar title="User Dashboard" items={items} />
      <section>{children}</section>
    </main>
  );
}
