"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const baseSchema = z.object({ email: z.string().email("Enter a valid email"), password: z.string().min(6, "Password must be at least 6 characters"), name: z.string().optional() });
type Values = z.infer<typeof baseSchema>;

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(baseSchema) });
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader><CardTitle>{mode === "login" ? "Welcome back" : "Create account"}</CardTitle></CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit((data) => toast.success(`${mode === "login" ? "Logged in" : "Registered"} as ${data.email}`))}>
          {mode === "register" && <div className="space-y-2"><Label>Name</Label><Input {...register("name")} /></div>}
          <div className="space-y-2"><Label>Email</Label><Input {...register("email")} />{errors.email && <p className="text-xs text-rose-600">{errors.email.message}</p>}</div>
          <div className="space-y-2"><Label>Password</Label><Input type="password" {...register("password")} />{errors.password && <p className="text-xs text-rose-600">{errors.password.message}</p>}</div>
          <Button className="w-full" type="submit">{mode === "login" ? "Login" : "Register"}</Button>
        </form>
      </CardContent>
    </Card>
  );
}
