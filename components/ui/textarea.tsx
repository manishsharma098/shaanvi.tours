import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn("flex min-h-24 w-full rounded-2xl border bg-white px-3 py-2 text-sm outline-none ring-primary/30 transition focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />;
}
