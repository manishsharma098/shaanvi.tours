import { BookingCard } from "@/components/cards/booking-card";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bookings } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Bookings</h1>
      <div className="space-y-3">{bookings.map((booking) => <BookingCard key={booking.id} booking={booking} />)}</div>
      <section id="upcoming" className="space-y-3"><h2 className="text-xl font-semibold">Upcoming Trips</h2><Card><CardContent className="p-5 text-sm text-slate-600">You have 2 upcoming trips this month.</CardContent></Card></section>
      <section id="profile"><Card><CardHeader><CardTitle>Profile</CardTitle></CardHeader><CardContent><EmptyState title="Profile editing coming soon" description="Connect profile APIs later to update user details." /></CardContent></Card></section>
    </div>
  );
}
