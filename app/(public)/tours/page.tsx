import { TourCard } from "@/components/cards/tour-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { tours } from "@/lib/mock-data";

export default function ToursPage() {
  return (
    <div className="grid gap-6 md:grid-cols-[280px_1fr]">
      <Card className="h-fit md:sticky md:top-24"><CardHeader><CardTitle>Filters</CardTitle></CardHeader><CardContent className="space-y-4"><div className="space-y-2"><Label>Location</Label><Input placeholder="e.g. Goa" /></div><div className="space-y-2"><Label>Price under</Label><Input type="number" placeholder="20000" /></div><div className="space-y-2"><Label>Duration</Label><Input placeholder="2-4 Days" /></div></CardContent></Card>
      <div><h1 className="mb-4 text-3xl font-bold">Tours</h1><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}</div></div>
    </div>
  );
}
