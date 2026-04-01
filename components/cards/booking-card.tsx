"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";

export function BookingCard({ booking }: { booking: { id: string; title: string; status: string; date: string; amount: number } }) {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
        <div><p className="font-semibold">{booking.title}</p><p className="text-sm text-slate-500">{booking.id} · {booking.date}</p></div>
        <div className="flex items-center gap-3"><Badge variant={booking.status === "Confirmed" ? "success" : "warning"}>{booking.status}</Badge><span className="text-sm font-semibold">Rs {booking.amount}</span>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button variant="destructive" size="sm">Cancel</Button></DialogTrigger>
            <DialogContent>
              <DialogTitle>Cancel booking?</DialogTitle>
              <DialogDescription className="mt-2 text-sm text-slate-500">This is a mock action and can be wired to backend later.</DialogDescription>
              <Button className="mt-4" variant="destructive" onClick={() => { toast.success("Cancellation request submitted"); setOpen(false); }}>Confirm cancellation</Button>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
