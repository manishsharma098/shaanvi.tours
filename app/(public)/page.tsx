import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SearchForm } from "@/components/forms/search-form";
import { TourCard } from "@/components/cards/tour-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { destinations, tours } from "@/lib/mock-data";
import { PageTransition } from "@/components/shared/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="mb-12 rounded-3xl border bg-white p-8 shadow-sm">
        <p className="mb-2 text-sm font-medium text-primary">Tour Operator + Taxi Booking</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Travel smart with curated tours and reliable taxi rides.</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Plan a weekend getaway or airport transfer in minutes with a modern booking experience.</p>
        <div className="mt-6"><SearchForm /></div>
      </section>
      <section className="mb-12">
        <div className="mb-4 flex items-center justify-between"><h2 className="text-2xl font-semibold">Featured Tours</h2><Button variant="ghost" asChild><Link href="/tours">View all <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
        <div className="grid gap-5 md:grid-cols-3">{tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}</div>
      </section>
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Popular Destinations</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">{destinations.map((city) => <Card key={city} className="transition hover:shadow-md"><CardContent className="p-4 text-center font-medium">{city}</CardContent></Card>)}</div>
      </section>
      <section className="rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg">
        <h3 className="text-2xl font-semibold">Ready for your next trip?</h3>
        <p className="mt-2 text-teal-50">Get instant confirmations and 24/7 support on all bookings.</p>
        <Button className="mt-4 bg-white text-teal-700 hover:bg-teal-50" asChild><Link href="/register">Get Started</Link></Button>
      </section>
    </PageTransition>
  );
}
