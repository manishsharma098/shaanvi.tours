import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="max-w-3xl text-slate-600">Shaanvi Tours helps travelers discover destinations through curated tours and dependable cab services. This frontend is designed as a production-ready UI layer and can be connected to APIs later.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardContent className="p-5"><p className="font-semibold">10K+</p><p className="text-sm text-slate-500">Happy travelers</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="font-semibold">42</p><p className="text-sm text-slate-500">Curated tour packages</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="font-semibold">24/7</p><p className="text-sm text-slate-500">Support availability</p></CardContent></Card>
      </div>
    </div>
  );
}
