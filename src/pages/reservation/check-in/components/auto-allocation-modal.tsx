import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Grid2x2Check } from "lucide-react";

export default function AutoAllocationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Grid2x2Check className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="py-4 border-b pt-0 border-b-black/50">
          <DialogTitle className="text-center">
            Room Auto Allocation
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-5 py-2">
          <Label className="font-bold text-lg underline">Selection</Label>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
              >
                Guest Prefered Room as First Priority.
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
              >
                Groups Same Floor Preferences.
              </label>
            </div>
          </div>

          <RadioGroup defaultValue="comfortable" className="text-muted-foreground">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Least used Rooms</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Room No Sequence</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Oldest Checkout Rooms</Label>
            </div>
          </RadioGroup>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            variant={"secondary"}
            className="gap-2 font-semibold"
          >
            <Check className="size-3.5" /> OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
