import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter, List } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TodayArrivalsPage() {
  return (
    <>
      <div className="mx-10 space-y-5">
        <div className="flex justify-between items-start">
          <div className="flex justify-between gap-5">
            <div className="flex gap-2 items-center ">
              <Checkbox defaultChecked />
              <Label>All Guest</Label>
            </div>

            <div className="flex gap-2 items-center">
              <Label>Arrival List</Label>
              <Checkbox />
            </div>
          </div>

          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 items-center">
              <Label>As On</Label>
              <DatePicker />
            </div>

            <Button variant="outline">Display</Button>
            <Button size="icon" variant="outline">
              <Filter className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <List className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between gap-5">
              <div className="flex gap-2 items-center">
                <Label>Total Rooms: </Label>0
              </div>

              <div className="flex gap-2 items-center">
                <Label>Total WalkIn: </Label>0
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="flex gap-2 items-center">
                <Label>Total Pax: </Label>0
              </div>

              <div className="flex gap-2 items-center">
                <Label>Total Group Check In: </Label>0
              </div>
            </div>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              {[
                "Ty",
                "Room No",
                "Arrival Time",
                "Reg No",
                "Reserve No",
                "Walk In",
                "Pax",
                "Infant",
                "Guest Name",
                "Company",
                "Plan",
                "Rate",
                "Check In By",
              ].map((item, index) => (
                <TableHead key={index}>{item}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
          <TableFooter className="fixed bottom-0 w-full">
            <TableRow>
              <TableCell colSpan={10}>Total</TableCell>
              <TableCell className="text-right">0</TableCell>
              <TableCell className="text-right">0</TableCell>

            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}

function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
