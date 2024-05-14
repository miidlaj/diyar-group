import React, { FunctionComponent } from "react";
import {
  AlarmClock,
  CalendarIcon,
  CloudDownload,
  Copy,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const NewReservation: FunctionComponent = () => {
  return (
    <>
      <div className="mx-7 space-y-3 pb-10">
          <div className="w-full flex justify-between gap-5">
            <div className="w-1/3 space-y-5">
              <div className="w-full flex justify-between gap-5">
                <div className="space-y-3">
                  <Label>Check In</Label>
                  <DatePickerInput />
                </div>
                <div className="space-y-3 relative">
                  <Label>Time In</Label>
                  <Input type="text" placeholder={"14:00"} />
                  <AlarmClock className="h-4 w-4 absolute right-2 bottom-2.5" />
                </div>
                <div className="space-y-3 w-16">
                  <Label>Nights</Label>
                  <Input type="text" placeholder={"2"} />
                </div>
              </div>
              <div className="w-full flex justify-between gap-5">
                <div className="space-y-3">
                  <Label>Check Out</Label>
                  <DatePickerInput />
                </div>
                <div className="space-y-3 relative">
                  <Label>Time Out</Label>
                  <Input type="text" placeholder={"14:00"} />
                  <AlarmClock className="h-4 w-4 absolute right-2 bottom-2.5" />
                </div>
                <div className="space-y-3 w-16"></div>
              </div>
            </div>
            <Separator className="h-[200px]" orientation="vertical" />
            <div className="w-2/3 space-y-3">
              <div className="space-y-3">
                <Label>Room Type</Label>
                <div className="flex gap-3">
                  <button className="cursor-pointer py-1.5 px-[15px] bg-primary-primary-50 rounded-81xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-primary-primary-500 hover:bg-gainsboro-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-dodgerblue">
                    <div className="relative text-sm leading-[150%] font-medium font-overline-medium text-primary-primary-600 text-left inline-block min-w-[75px]">
                      All room(5)
                    </div>
                  </button>
                  {["Single", "Double", "Triple", "VIP", "Suite"].map(
                    (item, index) => (
                      <button
                        key={index}
                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[74px] rounded-81xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-grey-grey-300 hover:bg-slategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray-100"
                      >
                        <div className="relative text-sm leading-[150%] font-medium font-overline-medium text-grey-grey-600 text-left inline-block min-w-[42px]">
                          {item}
                        </div>
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="flex gap-5 justify-between w-full">
                <div className="space-y-3 w-1/2">
                  <LabelInputSearch
                    placeholder="select or add new"
                    label="Company"
                  />
                  <LabelInputSearch
                    placeholder="select or add new"
                    label="Travel Agent"
                  />
                  <LabelInputSearch
                    placeholder="select or add new"
                    label="Source of booking"
                  />
                  <LabelInputSearch
                    placeholder="select or add new"
                    label="Rate Code"
                  />
                </div>
                <div className="space-y-3 w-1/2">
                  <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                    <Label>Reservation</Label>
                    <Input placeholder="" />
                  </div>
                  <LabelInputSearch
                    placeholder="select or add new"
                    label="No. pf booking Agent"
                  />
                  <LabelInputSearch
                    placeholder="select or add new"
                    label="Source of booking"
                  />
                  <div className="flex justify-start gap-10">
                    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                      <Label>Adult</Label>
                      <Input placeholder="" value={5} className="w-10" />
                    </div>
                    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                      <Label>Child</Label>
                      <Input placeholder="" value={0} className="w-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-full justify-between">
                <div className="w-2/3">
                  <div className="flex justify-between w-full">
                    <h1 className="font-bold text-xl">
                      Customer{" "}
                      <span className="rounded-lg text-xs bg-purple-300 text-purple-950 font-bold p-1">
                        162
                      </span>
                    </h1>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <CloudDownload className="h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        <Settings className="mr-2 h-4 w-4" /> Settings
                      </Button>
                    </div>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">Registration ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Second Name</TableHead>
                        <TableHead>Room Type</TableHead>
                        <TableHead>Room No.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: "#5644",
                          name: "Alexander",
                          second_name: "Alexander",
                          room_type: "Deluxe",
                          room_no: "A6204",
                        },
                        {
                          id: "#5644",
                          name: "Alexander",
                          second_name: "Alexander",
                          room_type: "Deluxe",
                          room_no: "A6204",
                        },
                      ].map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.second_name}</TableCell>
                          <TableCell>{item.room_type}</TableCell>
                          <TableCell>{item.room_no}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="space-y-3 w-1/3">
                  <LabelInputSearch placeholder="Room Only" label="Plan" />
                  <LabelInputSearch placeholder="100" label="Plan Amount" />
                  <LabelInputSearch placeholder="50%" label="Disc %" />
                  <LabelInputSearch placeholder="50 AED" label="Disc Amount" />
                </div>
              </div>
          <div className="flex justify-between gap-5 max-w-full">
            <div className="space-y-3 w-1/2">
              <LabelInputSearch placeholder="Group" label="Segment*" />
              <LabelInputSearch
                placeholder="select or add new"
                label="Guest Type"
              />
              <LabelInputSearch placeholder="select or add new" label="Broker" />
              <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Remarks</Label>
                <Textarea placeholder="" />
              </div>
            </div>
            <Separator className="h-[200px]" orientation="vertical" />
            <div className="space-y-3 w-1/2">
              <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Minimum Room Price</Label>
                <Input type="text" className="w-28" placeholder="600" />
              </div>
              <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Coupon Code</Label>
                <Input type="text" className="w-28" placeholder="HA2059" />
              </div>
              <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Disc %</Label>
                <Input type="text" className="w-28" placeholder="600" />
              </div>
              <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Disc Amount</Label>
                <Input type="text" className="w-28" placeholder="600" />
              </div>
              <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Payable Amount</Label>
                <Input type="text" className="w-28" placeholder="600" />
              </div>
            </div>
            <div className="space-y-3 w-1/2">
              <Label>Room and other services Payment </Label>
              <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Direct bank Transfer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Direct bank Transfer</SelectLabel>
                      <SelectItem value="apple">Option 1</SelectItem>
                      <SelectItem value="banana">Option 2</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="National Commercial Bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>National Commercial Bank</SelectLabel>
                      <SelectItem value="apple">Option 1</SelectItem>
                      <SelectItem value="banana">Option 2</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between gap-5">
                <div className="space-y-2">
                  <Label>Balance Payable</Label>
                  <Input
                    type="text"
                    value={120}
                    onChange={(_) => {
                      _.target;
                    }}
                    className="bg-gold-100 border "
                  />
                </div>
                <div className="space-y-2">
                  <Label>Reference No</Label>
                  <Input type="text" className=" " />
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <button className="cursor-pointer py-3 w-full text-center bg-royalblue-100 rounded-lg">
                  <div className="relative text-mini tracking-[0.01em] leading-[22px] font-medium font-roboto text-white text-left inline-block min-w-[56px]">
                    Confirm
                  </div>
                </button>
                <button className="cursor-pointer py-3 w-full bg-grey-grey-200 rounded-lg ">
                  <div className="relative text-mini tracking-[0.01em] leading-[22px] font-medium font-roboto text-white text-left inline-block min-w-[64px]">
                    Tentative
                  </div>
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default NewReservation;

const LabelInputSearch = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
  className?: string;
}) => {
  return (
    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5 relative">
      <Label htmlFor="email">{label}</Label>
      <Input type="text" placeholder={placeholder} />
      <Search className="h-4 w-4 absolute right-2" />
    </div>
  );
};

function DatePickerInput() {
  const [date, setDate] = React.useState<Date>(new Date(2024, 0, 20));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span></span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
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
