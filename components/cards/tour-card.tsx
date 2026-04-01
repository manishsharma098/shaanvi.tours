import Link from "next/link";
import { Star } from "lucide-react";
import { Tour } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-44 bg-gradient-to-br from-teal-200 via-cyan-100 to-emerald-100" />
      <CardContent className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-2"><h3 className="font-semibold">{tour.title}</h3><Badge variant="outline">{tour.duration}</Badge></div>
        <p className="text-sm text-slate-500">{tour.location}</p>
        <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-1 text-amber-600"><Star className="h-4 w-4" /> {tour.rating}</span><span className="font-semibold">Rs {tour.price}</span></div>
        <Button asChild className="w-full"><Link href={`/tours/${tour.slug}`}>View Details</Link></Button>
      </CardContent>
    </Card>
  );
}
