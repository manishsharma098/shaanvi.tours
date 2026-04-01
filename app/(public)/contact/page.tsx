import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader><CardTitle>Contact Us</CardTitle></CardHeader>
      <CardContent>
        <form className="space-y-4"><div className="space-y-2"><Label>Name</Label><Input /></div><div className="space-y-2"><Label>Email</Label><Input type="email" /></div><div className="space-y-2"><Label>Message</Label><Textarea /></div><Button type="submit">Send Message</Button></form>
      </CardContent>
    </Card>
  );
}
