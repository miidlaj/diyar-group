import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  BookOpenText,
  CalendarIcon,
  CircleHelp,
  CloudDownload,
  DollarSign,
  EllipsisVertical,
  Filter,
  Grid2x2Check,
  Minus,
  Plus,
  Search,
  Send,
  Settings,
} from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AutoAllocationModal from "./components/auto-allocation-modal";

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
  optional_date: z.date(),

  status: z.string(),

  room_type: z.string(),
  room_number: z.string(),
});

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

export default function CheckInPage() {
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
      optional_date: tomorrow,
    },
  });

  function DatePickerInput({
    name,
  }: {
    name: "check_in" | "check_out" | "optional_date";
  }) {
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
                      "w-[200px] bg-transparent border-gray-400/75 rounded-lg pl-3 text-left font-normal",
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [status, setStatus] = React.useState<
    "Pick and drop" | "Pick Up" | "Drop only" | string
  >("Pick and drop");

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10"
        >
          <div className="px-4 space-y-10">
            <div className="max-w-full bg-muted  rounded-md shadow-md p-7 space-y-5">
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
                        ? "text-sm text-blue-600 font-medium cursor-pointer py-[7px] px-4 bg-blue-50 rounded-[100px] flex flex-row items-center justify-center border-[1px] border-solid hover:border-blue-600 border-blue-500 hover:bg-blue-600 hover:text-white transform transition-colors divide-gray-300 ease-in-out"
                        : "text-sm text-gray-600 font-medium cursor-pointer py-[7px] px-4 bg-gray-50 rounded-[100px] flex flex-row items-center justify-center border-[1px] border-solid hover:border-gray-600 border-gray-500 hover:bg-gray-600 hover:text-white transform transition-colors divide-gray-300 ease-in-out"
                    }`}
                    onClick={() => form.setValue("room_type", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex gap-3 items-center">
                <div className="flex flex-col gap-2">
                  <Label className="font-medium">Check In</Label>
                  <DatePickerInput name="check_in" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="font-medium">Check Out</Label>
                  <DatePickerInput name="check_out" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="font-medium">No. Rooms</Label>
                  <Input
                    type="text"
                    className="bg-transparent border-gray-400/75 rounded-lg w-[100px]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="font-medium">Package</Label>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-transparent w-[200px] border-gray-400/75 rounded-lg">
                              <SelectValue placeholder="Select package" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Packages</SelectLabel>
                              {[].map((item, index) => (
                                <SelectItem key={index} value={item}>
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

                <div className="flex flex-col gap-2">
                  <Label className="font-medium">Source of Booking</Label>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-transparent w-[200px] border-gray-400/75 rounded-lg">
                              <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Sources</SelectLabel>
                              {[].map((item, index) => (
                                <SelectItem key={index} value={item}>
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
              </div>

              <div className="flex gap-3 items-center">
                <div className="flex flex-col gap-2">
                  <Label className="font-medium">Company</Label>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-transparent w-[200px] border-gray-400/75 rounded-lg">
                              <SelectValue placeholder="Select Company" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Compnaies</SelectLabel>
                              {[].map((item, index) => (
                                <SelectItem key={index} value={item}>
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

                <div className="flex flex-col gap-2">
                  <Label className="font-medium">Travel Agent</Label>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-transparent w-[200px] border-gray-400/75 rounded-lg">
                              <SelectValue placeholder="Select Agent" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Agents</SelectLabel>
                              {[].map((item, index) => (
                                <SelectItem key={index} value={item}>
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

                <div className="flex flex-col gap-2">
                  <Label className="font-medium">Segment</Label>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-transparent w-[200px] border-gray-400/75 rounded-lg">
                              <SelectValue placeholder="Select Segment" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Segments</SelectLabel>
                              {[].map((item, index) => (
                                <SelectItem key={index} value={item}>
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

                <div className="flex flex-col gap-2">
                  <Label className="font-medium">Reservation Status</Label>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-transparent w-[200px] border-gray-400/75 rounded-lg">
                              <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                          </FormControl>
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

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {form.watch("status") === "Tentative" && (
                  <div className="flex flex-col gap-2">
                    <Label className="font-medium text-red-600">
                      Optional Date*
                    </Label>
                    <DatePickerInput name="check_out" />
                  </div>
                )}
              </div>

              <div className="flex gap-7 items-center pt-3">
                <div className="flex gap-10">
                  <div>
                    <h1>Adult</h1>
                    <p className="text-muted-foreground">Older than 12 years</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <button className="text-blue-600 bg-blue-100/60 rounded-full p-1">
                      <Minus />
                    </button>

                    <span className="text-xl">1</span>

                    <button className="text-blue-600 bg-blue-100/60 rounded-full p-1">
                      <Plus />
                    </button>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div>
                    <h1>Children</h1>
                    <p className="text-muted-foreground">0 - 12 years</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <button className="text-blue-600 bg-blue-100/60 rounded-full p-1">
                      <Minus />
                    </button>

                    <span className="text-xl">0</span>

                    <button className="text-blue-600 bg-blue-100/60 rounded-full p-1">
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-3">
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-xl">
                    Customer{" "}
                    <span className="rounded-lg text-xs bg-purple-100 text-purple-500 font-bold p-1">
                      162
                    </span>
                  </h1>

                  <p className="text-muted-foreground text-md">
                    Total 10 Adults and 10 rooms selected
                  </p>
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg py-5">
                      <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-lg">
                          1515151 Reservation ready to be sent
                        </h1>

                        <p className="text-black/90 text-md">
                          Please note that in the range of June 1 to June 11,
                          there are 195 documents pending review for submission.
                        </p>
                      </div>

                      <div className="space-y-5">
                        <div className="flex justify-between gap-5 items-center">
                          <Label className="font-medium w-20">Email Id</Label>

                          <Select>
                            <SelectTrigger className="w-full rounded-lg">
                              <SelectValue placeholder="example@gmail.com" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Emails</SelectLabel>
                                {["admin@gmail.com", "user@gmail.com"].map(
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

                        <div className="flex justify-between gap-5 items-start">
                          <Label className="font-medium w-20">Message</Label>

                          <Textarea rows={4} />
                        </div>
                      </div>

                      <DialogFooter>
                        <DialogClose>
                          <Button variant="ghost" className="py-5">
                            Cancel
                          </Button>
                        </DialogClose>

                        <Button className="bg-black hover:bg-black/80 gap-2 font-normal py-5">
                          <Send className="h-4 w-4" /> Send Now
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline">
                    <CloudDownload className="mr-2 h-4 w-4" /> Download
                  </Button>

                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Button>
                </div>
              </div>

              <div className="w-full flex justify-end gap-2">
                <AutoAllocationModal />

                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </div>
              <ScrollArea className="h-96 w-full rounded-md relative">
                <Table>
                  <TableHeader>
                    <TableRow className="outline-none border-none no-underline">
                      <TableHead>First Name</TableHead>
                      <TableHead>Id Proof</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Room Type</TableHead>
                      <TableHead>Room No</TableHead>
                      <TableHead>Rate Code</TableHead>
                      <TableHead className="w-44">Pick and Drop</TableHead>
                      <TableHead className="w-10"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-muted-foreground">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell className="flex flex-col gap-1 font-medium text-black">
                          Vela Aguliar
                          <span className="text-muted-foreground font-normal">
                            1923408-AB2940
                          </span>
                        </TableCell>
                        <TableCell>FAEC089380</TableCell>

                        <TableCell>9603585902</TableCell>

                        <TableCell className="">
                          {form.getValues("room_type")}
                        </TableCell>

                        <TableCell>F1-120</TableCell>

                        <TableCell>Regular Tariff</TableCell>

                        <TableCell className="w-44">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="link"
                                className="hover:no-underline focus-visible:ring-0 px-0"
                              >
                                {renderContent(status)}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-44">
                              <DropdownMenuLabel>Options</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuRadioGroup
                                value={status}
                                onValueChange={setStatus}
                              >
                                <DropdownMenuRadioItem value="Pick and drop">
                                  Pick and Drop
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Pick Up">
                                  Pick Up
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Drop only">
                                  Drop only
                                </DropdownMenuRadioItem>
                              </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>

                        <TableCell className="w-10">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Check in</DropdownMenuItem>
                              <DropdownMenuItem>Check out</DropdownMenuItem>
                              <DropdownMenuItem className="flex gap-2 items-center">
                                Ledger <BookOpenText className="size-4" />
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>

            <div className="flex gap-5 w-full h-96">
              <div className="w-3/5 shadow-md border-2 border-black/75 shadow-black/75 p-5 rounded-lg space-y-5 h-full">
                <div className="space-y-2">
                  <h1 className="font-bold">Summary</h1>
                  <p className="text-muted-foreground text-md">
                    Resultados del mes actual
                  </p>
                </div>

                <Tabs defaultValue="summary" className="w-full">
                  <TabsList className="bg-white rounded-none">
                    <TabsTrigger
                      value="summary"
                      className="px-0 pr-5 items-end text-gray-500 border-b-gray-200 data-[state=active]:text-purple-500 data-[state=active]:shadow-none data-[state=active]:border-b-purple-500 border-b-2 w-max h-full pb-3 rounded-none data-[state=active]:font-bold cursor-pointer text-base"
                    >
                      Summary
                    </TabsTrigger>
                    <TabsTrigger
                      value="room-pricing"
                      className="px-0 pr-5 items-end text-gray-500 border-b-gray-200 data-[state=active]:text-purple-500 data-[state=active]:shadow-none data-[state=active]:border-b-purple-500 border-b-2 w-max h-full pb-3 rounded-none data-[state=active]:font-bold cursor-pointer text-base"
                    >
                      Room Pricing
                    </TabsTrigger>
                    <TabsTrigger
                      value="rooms"
                      className="px-0 pr-5 items-end text-gray-500 border-b-gray-200 data-[state=active]:text-purple-500 data-[state=active]:shadow-none data-[state=active]:border-b-purple-500 border-b-2 w-max h-full pb-3 rounded-none data-[state=active]:font-bold cursor-pointer text-base"
                    >
                      Rooms
                    </TabsTrigger>
                    <TabsTrigger
                      value="total"
                      className="px-0 pr-5 items-end text-gray-500 border-b-gray-200 data-[state=active]:text-purple-500 data-[state=active]:shadow-none data-[state=active]:border-b-purple-500 border-b-2 w-max h-full pb-3 rounded-none data-[state=active]:font-bold cursor-pointer text-base"
                    >
                      Total
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="summary" className="border rounded-xl">
                    <ScrollArea className="h-56 ">
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="pl-5 text-muted-foreground">
                              No. Adult
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              10
                            </TableCell>
                            <TableCell className="border-r gap-0 w-10">
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="pl-5 text-muted-foreground">
                              No. Days
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              10
                            </TableCell>
                            <TableCell className="border-r gap-0 w-10">
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="pl-5 text-muted-foreground">
                              No. Rooms
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              10
                            </TableCell>
                            <TableCell className="border-r gap-0 w-10">
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>

                          {form.watch("status") === "Tentative" && (
                            <TableRow>
                              <TableCell className="pl-5 text-muted-foreground">
                                Optional Date
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                5/10/2024
                              </TableCell>
                              <TableCell className="border-r gap-0 w-10">
                                <Button variant="ghost" size="icon">
                                  <EllipsisVertical className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          )}

                          <TableRow>
                            <TableCell className="pl-5 text-muted-foreground">
                              Total Amount
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              $ 4,000
                            </TableCell>
                            <TableCell className="border-r gap-0 w-10">
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="pl-5 text-muted-foreground">
                              Advance Amount
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              $ 200
                            </TableCell>
                            <TableCell className="border-r gap-0 w-10">
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="pl-5 text-muted-foreground">
                              Balance Payable
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              $ 1500
                            </TableCell>
                            <TableCell className="border-r gap-0 w-10">
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="pl-5 text-muted-foreground">
                              Early check in price
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              $ 150
                            </TableCell>
                            <TableCell className="border-r gap-0 w-10">
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent
                    value="room-pricing"
                    className="rounded-xl border"
                  >
                    <ScrollArea className="h-64 ">
                      <Table className="rounded-xl overflow-hidden">
                        <TableHeader className="bg-gray-100/75">
                          <TableRow>
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Room Type</TableHead>
                            <TableHead>Rate Code</TableHead>
                            <TableHead>Deal Price</TableHead>

                            <TableHead>Quantity</TableHead>

                            <TableHead>Total Amount</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody className="text-muted-foreground">
                          {[1, 2, 3, 4, 5].map((index) => (
                            <TableRow key={index}>
                              <TableCell>Tue, Mar 2</TableCell>
                              <TableCell>Single</TableCell>
                              <TableCell>Regular Tariff</TableCell>
                              <TableCell>$ 1200</TableCell>
                              <TableCell>1</TableCell>
                              <TableCell className="font-medium text-black">
                                $ 1200
                              </TableCell>
                              <TableCell className="border-r gap-0 w-10">
                                <Button variant="ghost" size="icon">
                                  <EllipsisVertical className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="rooms" className="rounded-xl border">
                    <ScrollArea className="h-64 ">
                      <Table className="rounded-xl overflow-hidden">
                        <TableHeader className="bg-gray-100/75">
                          <TableRow>
                            <TableHead>Room Type</TableHead>
                            <TableHead>No. Rooms</TableHead>
                            <TableHead>No. Days</TableHead>
                            <TableHead>Total Amount</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody className="text-muted-foreground">
                          {[1, 2, 3, 4, 5].map((index) => (
                            <TableRow key={index}>
                              <TableCell>Double</TableCell>
                              <TableCell>5</TableCell>
                              <TableCell>10</TableCell>

                              <TableCell>$ 1200</TableCell>

                              <TableCell className="border-r gap-0 w-10">
                                <Button variant="ghost" size="icon">
                                  <EllipsisVertical className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="total">
                    <ScrollArea className="h-64 ">
                      Total Content here
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="w-2/5 h-full flex items-end">
                <div className=" p-2 rounded-lg space-y-7 w-full h-full">
                  <Card className="w-full space-y-5">
                    <CardHeader className="border-b py-4">
                      <CardTitle className="text-xl">Advance details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="flex gap-5 items-center">
                        <div className="flex flex-col gap-2 w-1/2">
                          <Label className="">Payment Mode</Label>
                          <Select>
                            <SelectTrigger className="bg-transparent w-full border-gray-400/75 rounded-lg">
                              <SelectValue placeholder="Select payment mode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {["Card", "Net Banking", "Cash", "Cheque"].map(
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

                        <div className="flex flex-col gap-2 w-1/2">
                          <Label className="">Total Amount</Label>
                          <div className="relative">
                            <Input className="pl-7" type="number" />
                            <DollarSign
                              style={{
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                              className="size-4 absolute left-2"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-5 items-center">
                        <div className="flex flex-col gap-2 w-1/2">
                          <Label className="">Advance Remarks</Label>
                          <Input />
                        </div>

                        <div className="flex flex-col gap-2 w-1/2">
                          <Label className="">Advance Amount</Label>
                          <div className="relative">
                            <Input className="pl-7" type="number" />
                            <DollarSign
                              style={{
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                              className="size-4 absolute left-2"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end w-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Update</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg py-5">
                        <div className="flex flex-col gap-2">
                          <h1 className="font-bold text-lg">
                            1515151 Reservation ready to be sent
                          </h1>

                          <p className="text-black/90 text-md">
                            Please note that in the range of June 1 to June 11,
                            there are 195 documents pending review for
                            submission.
                          </p>
                        </div>

                        <div className="space-y-5">
                          <div className="flex justify-between gap-5 items-center">
                            <Label className="font-medium w-20">Email Id</Label>

                            <Select>
                              <SelectTrigger className="w-full rounded-lg">
                                <SelectValue placeholder="example@gmail.com" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Emails</SelectLabel>
                                  {["admin@gmail.com", "user@gmail.com"].map(
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

                          <div className="flex justify-between gap-5 items-start">
                            <Label className="font-medium w-20">Message</Label>

                            <Textarea rows={4} />
                          </div>
                        </div>

                        <DialogFooter>
                          <DialogClose>
                            <Button variant="ghost" className="py-5">
                              Cancel
                            </Button>
                          </DialogClose>

                          <Button className="bg-black hover:bg-black/80 gap-2 font-normal py-5">
                            <Send className="h-4 w-4" /> Send Now
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}

const TentativeConfirmation = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button" className="font-normal">
            Sumbit order
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl py-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">
              7628 Reservation Created as a Tentative{" "}
            </h1>

            <p className="text-black/90 text-md">
              Please note that in the range of June 1 to June 11, there are 195
              documents pending review for submission.
            </p>
          </div>

          <div className="border rounded-xl">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="pl-5 text-muted-foreground">
                    No. Adult
                  </TableCell>
                  <TableCell className="text-right font-medium">10</TableCell>
                  <TableCell className="border-r gap-0 w-10">
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="pl-5 text-muted-foreground">
                    No. Days
                  </TableCell>
                  <TableCell className="text-right font-medium">10</TableCell>
                  <TableCell className="border-r gap-0 w-10">
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="pl-5 text-muted-foreground">
                    No. Rooms
                  </TableCell>
                  <TableCell className="text-right font-medium">10</TableCell>
                  <TableCell className="border-r gap-0 w-10">
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="pl-5 text-muted-foreground">
                    Optional Date
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    5/10/2024
                  </TableCell>
                  <TableCell className="border-r gap-0 w-10">
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="pl-5 text-muted-foreground">
                    Balance Amount
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    $ 4,000
                  </TableCell>
                  <TableCell className="border-r gap-0 w-10">
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="pl-5 text-muted-foreground">
                    Total Amount
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    $ 4,000
                  </TableCell>
                  <TableCell className="border-r gap-0 w-10">
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <DialogFooter>
            <DialogClose>
              <Button variant="ghost" className="py-5">
                Cancel
              </Button>
            </DialogClose>

            <Button className="bg-black hover:bg-black/80 gap-2 font-normal py-5">
              <Send className="h-4 w-4" /> Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

const renderContent = (status: string) => {
  switch (status) {
    case "Pick and drop":
      return (
        <Badge className="bg-green-200/50  text-green-600  items-center rounded-3xl hover:bg-green-200/50 hover:text-green-600 font-normal">
          {" "}
          <span className="bg-green-600 h-[5px] w-[5px] rounded-full mr-2"></span>{" "}
          {status}
        </Badge>
      );
    case "Pick Up":
      return (
        <Badge className="bg-yellow-200/50  text-yellow-600  items-center rounded-3xl hover:bg-yellow-200/50 hover:text-yellow-600 font-normal">
          <span className="bg-yellow-600 h-[5px] w-[5px] rounded-full mr-2"></span>{" "}
          {status}
        </Badge>
      );
    case "Drop only":
      return (
        <Badge className="bg-orange-200/50  text-orange-600  items-center rounded-3xl hover:bg-orange-200/50 hover:text-orange-600 font-normal">
          <span className="bg-orange-600 h-[5px] w-[5px] rounded-full mr-2"></span>{" "}
          {status}
        </Badge>
      );
    default:
      return (
        <Badge className="bg-green-200/50  text-green-600  items-center rounded-3xl hover:bg-green-200/50 hover:text-green-600 font-normal">
          <span className="bg-green-600 h-[5px] w-[5px] rounded-full mr-2"></span>{" "}
          {status}
        </Badge>
      );
  }
};
