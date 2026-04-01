"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";

export function SearchForm() {
  const [query, setQuery] = useState("");
  return (
    <div className="rounded-2xl border bg-white p-3 shadow-lg">
      <form className="flex flex-col gap-3 md:flex-row" onSubmit={(e) => { e.preventDefault(); toast.success(`Searching for ${query || "best options"}`); }}>
        <Input placeholder="Search tours or taxi routes" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}
