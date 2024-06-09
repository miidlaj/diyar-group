import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Check, Info } from "lucide-react";

export function HoverColorValues() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" size={"icon"}>
          <Info className="size-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-max pl-5 pr-10 mx-5 text-muted-foreground">
      <div className="space-y-1 flex flex-col">
  <div className="inline-flex items-center">
    <span className="size-3 inline-block bg-red-600 me-2" />
    <span >Occupied</span>
  </div>
  <div className="inline-flex items-center">
    <span className="size-3 inline-block bg-purple-500 me-2" />
    <span >Guest Block</span>
  </div>
  <div className="inline-flex items-center">
    <span className="size-3 inline-block bg-emerald-500 me-2" />
    <span >Management Block</span>
  </div>
  <div className="inline-flex items-center">
    <span className="size-3 inline-block bg-orange-500 me-2" />
    <span >Maintenance Block</span>
  </div>
  <div className="inline-flex items-center">
    <span className="size-3 inline-block bg-pink-500 me-2" />
    <span >Villa Block</span>
  </div>
  <div className="inline-flex items-center">
  <Check className="bg-green-600 text-white size-3 rounded-full font-bold me-2" />
  <span >Advance Paid</span>
  </div>
  <div className="inline-flex items-center">
    <Check className="bg-yellow-400 text-red-500 size-3 rounded-full font-bold me-2" />
    <span >Partial Booking Advance</span>
  </div>
</div>

      </HoverCardContent>
    </HoverCard>
  );
}
