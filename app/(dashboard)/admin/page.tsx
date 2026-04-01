import { adminStats, bookings, tours } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{adminStats.map((item) => <Card key={item.label}><CardContent className="p-5"><p className="text-sm text-slate-500">{item.label}</p><p className="mt-1 text-2xl font-semibold">{item.value}</p></CardContent></Card>)}</section>
      <section id="tours" className="space-y-3"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold">Manage Tours</h2><Button>Add Tour</Button></div><div className="grid gap-3 md:grid-cols-2">{tours.map((tour) => <Card key={tour.id}><CardContent className="flex items-center justify-between p-4"><p className="font-medium">{tour.title}</p><div className="flex gap-2"><Button variant="outline" size="sm">Edit</Button><Button variant="destructive" size="sm">Delete</Button></div></CardContent></Card>)}</div></section>
      <section id="taxi" className="space-y-3"><h2 className="text-xl font-semibold">Manage Taxi</h2><Card><CardContent className="p-5 text-sm text-slate-600">Cab fleet controls, pricing slabs, and availability toggles can be connected here.</CardContent></Card></section>
      <section id="bookings" className="space-y-3"><h2 className="text-xl font-semibold">Bookings Table</h2><Card><CardContent className="p-0"><Table><TableHeader><TableRow><TableHead>ID</TableHead><TableHead>Type</TableHead><TableHead>Title</TableHead><TableHead>Status</TableHead><TableHead>Amount</TableHead></TableRow></TableHeader><TableBody>{bookings.map((booking) => <TableRow key={booking.id}><TableCell>{booking.id}</TableCell><TableCell>{booking.type}</TableCell><TableCell>{booking.title}</TableCell><TableCell>{booking.status}</TableCell><TableCell>Rs {booking.amount}</TableCell></TableRow>)}</TableBody></Table></CardContent></Card></section>
      <section><h2 className="mb-3 text-xl font-semibold">Cancellation Requests</h2><Card><CardContent className="p-5 text-sm text-slate-600">17 requests pending review. Add approval/rejection actions once backend is connected.</CardContent></Card></section>
    </div>
  );
}
