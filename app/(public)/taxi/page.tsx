import { TaxiBookingForm } from "@/components/forms/taxi-booking-form";

export default function TaxiPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Taxi Booking</h1><p className="mt-1 text-slate-600">Book city rides, outstation trips, and airport transfers.</p></div>
      <TaxiBookingForm />
    </div>
  );
}
