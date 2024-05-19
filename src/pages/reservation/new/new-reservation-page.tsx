import React, { FunctionComponent } from "react";
import {
  AlarmClock,
  CalendarIcon,
  CloudDownload,
  Copy,
  Edit,
  Plus,
  Search,
  Settings,
  Users,
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
import { ScrollArea } from "@/components/ui/scroll-area";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CompanySelectionModal from "./components/company-selection-modal";
import AgentSelectionModal from "./components/agent-selection-modal";
import PlanSelectionModal from "./components/plan-selection-modal";
import RateCodeSelectionModal from "./components/rate-code-selection-modal";
import ConfirmReservation from "./components/confirm-reservation";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  adult: z.string(),
  child: z.string(),

  company_name: z.string(),
  travel_agent: z.string(),
  plan: z.string(),
  rate_code: z.string(),

  payment_mode: z.string(),

  check_in: z.date({
    required_error: "Check in date is required.",
  }),
  check_out: z.date({
    required_error: "Check out date is required.",
  }),

  room_type: z.string(),
  room_number: z.string(),
});

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const NewReservation: FunctionComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adult: "2",
      child: "0",
      room_type: "All room(5)",
      company_name: "",
      travel_agent: "",
      plan: "",
      rate_code: "",
      check_in: today,
      check_out: tomorrow,
      payment_mode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { toast } = useToast();

  const handleSaveConfirmedReservation = () => {
    toast({
      title: "Reservation confirmed.",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{"Reservation No. : #AED1578"}</code>
        </pre>
      ),
    });
  };

  const handleSaveTentativeReservation = () => {
    setOpenTentativeModal(true);
  };

  const handleConfirmTentativeReservation = () => {
    setOpenTentativeModal(false);
    toast({
      title: "Reservation confirmed as tentative booking",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{"Reservation No. : #AED1578"}</code>
        </pre>
      ),
    });
  };

  const [dates, setDates] = React.useState<{ check_in: Date; check_out: Date }>(
    {
      check_in: today,
      check_out: tomorrow,
    }
  );

  React.useEffect(() => {
    setDates({
      check_in: form.getValues("check_in"),
      check_out: form.getValues("check_out"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("check_in"), form.watch("check_out")]);

  React.useEffect(() => {
    setCustomerCount(parseInt(form.getValues("adult")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("adult")]);

  const [customerCount, setCustomerCount] = React.useState<number>(0);

  const [openTentativeModal, setOpenTentativeModal] = React.useState(false);

  function TentativeReserveModal() {
    const [date, setDate] = React.useState<Date>();

    return (
      <Dialog open={openTentativeModal} onOpenChange={setOpenTentativeModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tentative Confirmation</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Due Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "col-span-3 justify-start text-left font-normal",
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
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="username" className="text-right">
                Remarks
              </Label>
              <Textarea placeholder="remarks" className="col-span-3" rows={4} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleConfirmTentativeReservation}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  function DatePickerInput({ name }: { name: "check_in" | "check_out" }) {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[200px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < today}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <>
      <TentativeReserveModal />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="mx-7 space-y-10 pb-10">
            <div className="w-full flex justify-between gap-5">
              <div className="w-1/3 space-y-5">
                <div className="w-full flex justify-between gap-5">
                  <div className="space-y-3">
                    <Label>Check In</Label>
                    <DatePickerInput name={"check_in"} />
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
                    <DatePickerInput name={"check_out"} />
                  </div>
                  <div className="space-y-3 relative">
                    <Label>Time Out</Label>
                    <Input type="text" placeholder={"14:00"} />
                    <AlarmClock className="h-4 w-4 absolute right-2 bottom-2.5" />
                  </div>
                  <div className="space-y-3 w-16"></div>
                </div>
              </div>
              <Separator className="h-[250px]" orientation="vertical" />
              <div className="w-2/3 space-y-7">
                <div className="space-y-3">
                  <Label>Room Type</Label>
                  <div className="flex gap-3">
                    {[
                      "All room(5)",
                      "Single",
                      "Double",
                      "Triple",
                      "VIP",
                      "Suite",
                    ].map((item, index) => (
                      <button
                        key={index}
                        className={` ${
                          form.getValues("room_type") === item
                            ? "text-sm text-blue-600 font-medium cursor-pointer py-1.5 px-4 bg-blue-50 rounded-[100px] flex flex-row items-center justify-center border-[1px] border-solid border-blue-500 hover:bg-blue-600 hover:text-white transform transition-colors divide-gray-300 ease-in-out hover:border-blue-900"
                            : "text-sm text-gray-600 font-medium cursor-pointer py-1.5 px-4 bg-gray-50 rounded-[100px] flex flex-row items-center justify-center border-[1px] border-solid border-gray-500 hover:bg-gray-600 hover:text-white transform transition-colors divide-gray-300 ease-in-out hover:border-gray-900"
                        }`}
                        onClick={() => form.setValue("room_type", item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-5 justify-between w-full">
                  <div className="space-y-3 w-1/2">
                    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5 relative">
                      <Label>Company</Label>

                      <FormField
                        control={form.control}
                        name="company_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="text"
                                {...field}
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                onChange={(_) => {}}
                                placeholder="select or add new"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <CompanySelectionModal
                        onSelect={(e) => {
                          form.setValue("company_name", e);
                        }}
                      />
                    </div>

                    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5 relative">
                      <Label>Travel Agent</Label>

                      <FormField
                        control={form.control}
                        name="travel_agent"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="text"
                                {...field}
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                onChange={(_) => {}}
                                placeholder="select or add new"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <AgentSelectionModal
                        onSelect={(e) => {
                          form.setValue("travel_agent", e);
                        }}
                      />
                    </div>

                    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5 relative">
                      <Label>Rate Code</Label>

                      <FormField
                        control={form.control}
                        name="rate_code"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="text"
                                {...field}
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                onChange={(_) => {}}
                                placeholder="select or add new"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <RateCodeSelectionModal
                        onSelect={(e) => {
                          form.setValue("rate_code", e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-3 w-1/2">
                    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                      <Label>Reservation No.</Label>
                      <Input placeholder="" />
                    </div>

                    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                      <Label>No. rooms</Label>
                      <Input type="number" value={1} />
                    </div>

                    <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                      <Label>Reservation Status</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            {["Confirmed", "Tentative", "Waitlist"].map(
                              (item, index) => (
                                <SelectItem key={index} value={item}>
                                  {item}
                                </SelectItem>
                              )
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-start gap-10">
                      <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                        <Label>Adult</Label>

                        <FormField
                          control={form.control}
                          name="adult"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  className="w-20"
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                        <Label>Child</Label>
                        <FormField
                          control={form.control}
                          name="child"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  className="w-20"
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 w-full justify-between">
              <div className="w-2/3 space-y-3">
                <div className="flex justify-between w-full">
                  <h1 className="font-bold text-xl">
                    Customer{" "}
                    <span className="rounded-lg text-xs bg-purple-300 text-purple-950 font-bold p-1">
                      162
                    </span>
                  </h1>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        setCustomerCount(customerCount + 1);
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Users className="h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </Button>
                  </div>
                </div>
                <ScrollArea className="h-32 w-full rounded-md border relative">
                  <Table>
                    <TableHeader className="">
                      <TableRow className="bg-gray-200">
                        <TableHead className="w-[150px]">
                          Registration ID
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Second Name</TableHead>
                        <TableHead>Room Type</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="border">
                      {Array.from({ length: customerCount }).map((_, index) => (
                        <TableRow key={index}>
                          <TableCell className="">
                            {"#" + (index + 1)}
                          </TableCell>
                          <TableCell className="px-[1px] py-0 my-0">
                            <Input
                              type="text"
                              className="w-full rounded-none h-8"
                              placeholder="First Name"
                             
                            />
                          </TableCell>
                          <TableCell className="px-[1px]">
                            <Input
                              type="text"
                              className="w-full rounded-none h-8"
                              placeholder="Last Name"
                             
                            />
                          </TableCell>
                          <TableCell className="border-r">
                            {form.getValues("room_type")}
                          </TableCell>

                          <TableCell className="border-r gap-0">
                            <Button variant="ghost" size="sm">
                              <Search className="h-3 w-3" />
                            </Button>

                            <Button variant="ghost" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>

                            <Button variant="ghost" size="sm">
                              <span className="font-bold text-sm font-sans">
                                P
                              </span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
              <div className="space-y-3 w-1/3">
                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5 relative">
                  <Label>Plan</Label>

                  <FormField
                    control={form.control}
                    name="plan"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            onChange={(_) => {}}
                            placeholder="select or add new"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <PlanSelectionModal
                    onSelect={(e) => {
                      form.setValue("plan", e);
                    }}
                  />
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Plan Amount</Label>
                  <Input type="text" placeholder="100" />
                </div>
                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Disc %</Label>
                  <Input type="text" placeholder="10%" />
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Disc Amount</Label>
                  <Input type="text" placeholder="50 AED" />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 max-w-full">
              <div className="space-y-3 w-1/2">
                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Segment</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Segments</SelectLabel>
                        {[
                          "Group",
                          "Corporate",
                          "OTA",
                          "Airline",
                          "Central Reservation",
                          "CLUB MAHINDRA MEMBER",
                          "Individual",
                        ].map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Source of Booking</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sources</SelectLabel>
                        {[
                          "Guest Direct",
                          "Corporate",
                          "Online Booking",
                          "Social Media",
                        ].map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Guest Type</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Guest Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Guest Types</SelectLabel>
                        {[
                          "Compliment",
                          "Guest Direct",
                          "Corporate",
                          "Others",
                          "Travel Agent",
                          "House Use",
                          "FIT",
                        ].map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Booker</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Booker" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Booker</SelectLabel>
                        {[
                          "Compliment",
                          "Guest Direct",
                          "Corporate",
                          "Others",
                          "Travel Agent",
                          "House Use",
                          "FIT",
                        ].map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Remarks</Label>
                  <Textarea placeholder="" />
                </div>
              </div>
              <Separator className="h-[250px]" orientation="vertical" />
              <div className="space-y-3 w-1/2">
                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Room Price</Label>
                  <Input type="text" className="w-28" placeholder="600" />
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Disc %</Label>
                  <Input type="text" className="w-28" placeholder="600" />
                </div>
                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Disc Amount</Label>
                  <Input type="text" className="w-28" placeholder="600" />
                </div>
                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Payable Amount</Label>
                  <Input type="text" className="w-28" placeholder="600" />
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Upgrade</Label>
                  <Select defaultValue="None">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {[
                          "None",
                          "Executive Suite Room",
                          "Penthouse Standard Room",
                          "Standard Single Room",
                          "Standard Twin Room",
                          "Presidential Suite",
                        ].map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-3 w-1/2">
                <Label>Room and other services Payment </Label>
                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <FormField
                    control={form.control}
                    name="payment_mode"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Payment Mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Payment Mode</SelectLabel>
                              {[
                                "Direct Payment",
                                "Bank Transfer",
                                "Card Payment",
                                "Cheque",
                              ].map((item, index) => (
                                <SelectItem value={item} key={index}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  {form.watch("payment_mode") === "Direct Payment" && (
                    <>
                      <Input
                        type="text"
                        value={"Cash"}
                        className="w-full"
                        disabled
                      />
                    </>
                  )}

                  {form.watch("payment_mode") !== "Direct Payment" && (
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Bank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select Bank</SelectLabel>
                          <SelectItem value="apple">Bank 1</SelectItem>
                          <SelectItem value="banana">Bank 2</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
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
                  <ConfirmReservation
                    save={handleSaveConfirmedReservation}
                    check_in={dates.check_in}
                    check_out={dates.check_out}
                  >
                    <button className="cursor-pointer py-3 w-full text-center bg-royalblue-100 rounded-lg">
                      <div className="relative text-mini tracking-[0.01em] leading-[22px] font-medium font-roboto text-white text-left inline-block min-w-[56px]">
                        Confirm
                      </div>
                    </button>
                  </ConfirmReservation>
                  <ConfirmReservation
                    save={handleSaveTentativeReservation}
                    check_in={dates.check_in}
                    check_out={dates.check_out}
                  >
                    <button className="cursor-pointer py-3 w-full bg-grey-grey-200 rounded-lg ">
                      <div className="relative text-mini tracking-[0.01em] leading-[22px] font-medium font-roboto text-white text-left inline-block min-w-[64px]">
                        Tentative
                      </div>
                    </button>
                  </ConfirmReservation>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default NewReservation;
