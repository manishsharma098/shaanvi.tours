import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} className={cn("flex h-10 w-full rounded-2xl border bg-white px-3 py-2 text-sm outline-none ring-primary/30 transition focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />;
}
