import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/lib/mock-data";

export default async function TourDetailPage(props: PageProps<"/tours/[slug]">) {
  const { slug } = await props.params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) notFound();

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <div className="h-72 rounded-2xl bg-gradient-to-br from-emerald-200 via-cyan-100 to-white" />
        <section>
          <h1 className="text-3xl font-bold">{tour.title}</h1>
          <p className="mt-2 text-slate-600">{tour.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">{tour.highlights.map((item) => <Badge key={item}>{item}</Badge>)}</div>
        </section>
        <Card><CardHeader><CardTitle>Itinerary</CardTitle></CardHeader><CardContent className="space-y-2 text-sm text-slate-600"><p>Day 1: Arrival and local orientation.</p><p>Day 2: Guided activities and cultural experiences.</p><p>Day 3: Leisure time and departure.</p></CardContent></Card>
      </div>
      <Card className="h-fit lg:sticky lg:top-24"><CardHeader><CardTitle>Pricing</CardTitle></CardHeader><CardContent className="space-y-4"><p className="text-3xl font-bold">Rs {tour.price}</p><p className="text-sm text-slate-500">Per person · Includes stays and transfers</p><Button className="w-full">Book Now</Button></CardContent></Card>
    </div>
  );
}
