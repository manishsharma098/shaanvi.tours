"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const schema = z.object({ pickup: z.string().min(2, "Pickup is required"), drop: z.string().min(2, "Drop is required"), date: z.string().min(1, "Date is required"), time: z.string().min(1, "Time is required") });
type FormValues = z.infer<typeof schema>;

export function TaxiBookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  return (
    <Card>
      <CardHeader><CardTitle>Book your cab</CardTitle></CardHeader>
      <CardContent>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit((values) => toast.success(`Taxi booked from ${values.pickup} to ${values.drop}`))}>
          <div className="space-y-2"><Label>Pickup</Label><Input {...register("pickup")} />{errors.pickup && <p className="text-xs text-rose-600">{errors.pickup.message}</p>}</div>
          <div className="space-y-2"><Label>Drop</Label><Input {...register("drop")} />{errors.drop && <p className="text-xs text-rose-600">{errors.drop.message}</p>}</div>
          <div className="space-y-2"><Label>Date</Label><Input type="date" {...register("date")} />{errors.date && <p className="text-xs text-rose-600">{errors.date.message}</p>}</div>
          <div className="space-y-2"><Label>Time</Label><Input type="time" {...register("time")} />{errors.time && <p className="text-xs text-rose-600">{errors.time.message}</p>}</div>
          <div className="md:col-span-2"><Button type="submit" className="w-full">Confirm Booking</Button></div>
        </form>
      </CardContent>
    </Card>
  );
}
