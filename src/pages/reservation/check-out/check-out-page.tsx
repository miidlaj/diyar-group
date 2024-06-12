import { FunctionComponent } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormDescription } from "@/components/ui/form";

import RoomSearch from "./components/search-room";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CircleX, CreditCard, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

  status: z.string(),

  room_type: z.string(),
  room_number: z.string(),
});

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const ReservationCheckOutPage: FunctionComponent = () => {
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

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="mx-7 space-y-10 pb-10">
            <div className="flex justify-center">
              <div className="flex gap-5 items-center">
                <Label className="text-muted-foreground">
                  Room / Reservation No:{" "}
                </Label>
                <RoomSearch />
                <Button>Go</Button>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm w-full flex justify-center">
                Firady, November 18, 2024
              </span>

              <Button className="">Create booking</Button>
            </div>

            <div className="flex gap-5">
              <Card className="overflow-hidden w-1/2">
                <CardHeader className="flex flex-row items-start border-b border-b-black/30">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      Customer Details
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                  <div className="grid gap-3">
                    <ul className="grid gap-3 font-bold">
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Name</span>
                        <span>Nathan</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Room No.</span>
                        <span>807</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Booking No.
                        </span>
                        <span>04903483803</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Email Id</span>
                        <span>test@gmail.com</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Mobile No.
                        </span>
                        <span>+917348783748</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Address</span>
                        <span>USA, New Jersey</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Time Format
                        </span>
                        <span>24 hrs.</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Booking Type
                        </span>
                        <span className="text-muted-foreground">Instant</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Booking Source
                        </span>
                        <span className="text-muted-foreground">Rodri</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden w-1/2">
                <CardHeader className="flex flex-row items-start border-b border-b-black/30">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      Set Default Customer
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                  <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <Checkbox checked />
                    <div className="space-y-3 leading-none">
                      <FormDescription>803-235892759348</FormDescription>
                      <Label>20023-04-07 09:00:00 - 2023-4-20 09:00:00</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <ScrollArea className="h-64 ">
              <Table className="rounded-xl overflow-hidden">
                <TableHeader className="bg-gray-100/75">
                  <TableRow>
                    <TableHead className="w-[100px]">Date</TableHead>
                    <TableHead>Room Type</TableHead>
                    <TableHead>Rate Code</TableHead>
                    <TableHead>Deal Price</TableHead>

                    <TableHead>Quantity</TableHead>
                    <TableHead>Tax</TableHead>

                    <TableHead>Total Amount</TableHead>
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
                        $ 25
                      </TableCell>
                      <TableCell className="font-medium text-black">
                        $ 1200
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>

            <div className="flex gap-5">
              <Card className="overflow-hidden w-1/2">
                <CardHeader className="flex flex-row items-start border-b border-b-black/30">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      Credit
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                  <div className="grid gap-3">
                    <ul className="grid gap-3 ">
                      <li className="flex items-center justify-between gap-20">
                        <span className="text-muted-foreground font-bold">
                          Type
                        </span>
                        <Select defaultValue="Regular Customer">
                          <SelectTrigger className="bg-transparent w-[350px] border-gray-400/75 rounded-lg">
                            {" "}
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {["Regular Customer", "VIP"].map(
                                (item, index) => (
                                  <SelectItem key={index} value={item}>
                                    {item}
                                  </SelectItem>
                                )
                              )}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </li>
                      <li className="flex items-center justify-between gap-20">
                        <span className="text-muted-foreground font-bold">
                          ($) Credit Amt.
                        </span>
                        <Input
                          className="w-[350px]"
                          type="number"
                          value={500}
                        />
                      </li>

                      <li className="flex items-start justify-between gap-20">
                        <span className="text-muted-foreground font-bold">
                          Remakrs
                        </span>
                        <Textarea
                          className="w-[350px]"
                          placeholder="Remarks"
                          rows={4}
                        />
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden w-1/2">
                <CardHeader className="flex flex-row items-start border-b border-b-black/30">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      Special Discount
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                  <div className="grid gap-3">
                    <ul className="grid gap-3 ">
                      <li className="flex items-center justify-between gap-20">
                        <span className="text-muted-foreground font-bold">
                          Type
                        </span>
                        <Select defaultValue="Friend">
                          <SelectTrigger className="bg-transparent w-[350px] border-gray-400/75 rounded-lg">
                            {" "}
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {["Friend", "Worker"].map((item, index) => (
                                <SelectItem key={index} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </li>
                      <li className="flex items-center justify-between gap-20">
                        <span className="text-muted-foreground font-bold">
                          ($) Discount Amt.
                        </span>
                        <Input
                          className="w-[350px]"
                          type="number"
                          value={500}
                        />
                      </li>

                      <li className="flex items-start justify-between gap-20">
                        <span className="text-muted-foreground font-bold">
                          Remakrs
                        </span>
                        <Textarea
                          className="w-[350px]"
                          placeholder="Remarks"
                          rows={4}
                        />
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-5">
              <Card className="overflow-hidden w-1/2">
                <CardHeader className="flex flex-row items-start border-b border-b-black/30">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      Bill Settlement
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                  <Table className="rounded-xl overflow-hidden">
                    <TableHeader className="bg-gray-100/75">
                      <TableRow>
                        <TableHead>Payemnt Mode</TableHead>
                        <TableHead>Amount</TableHead>

                        <TableHead className="w-10">Action</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody className="text-muted-foreground">
                      <TableRow>
                        <TableCell className="space-y-3">
                          <div className="flex gap-2 items-center w-full">
                            <CreditCard className="size-6" />
                            <div className="flex flex-col gap-2 w-full">
                              <Label className="font-medium text-xs">
                                Payment Mode
                              </Label>

                              <Select defaultValue="Bank Payment">
                                <SelectTrigger className="bg-transparent w-full border-gray-400/75 rounded-lg text-black">
                                  <SelectValue placeholder="Select payment mode" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {["Bank Payment", "Cash", "Card"].map(
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
                          </div>

                          <div className="flex items-center gap-2 pl-2">
                            <Input
                              className="w-full"
                              type="number"
                              placeholder="Account No"
                            />

                            <Select>
                              <SelectTrigger className="bg-transparent w-full border-gray-400/75 rounded-lg text-black">
                                <SelectValue placeholder="Choose Bank Name" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {["Option 1", "Option 2"].map(
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
                        </TableCell>
                        <TableCell>
                          <Input
                            className="w-full"
                            type="number"
                            value={1500}
                          />
                        </TableCell>

                        <TableCell className="border-r gap-0 w-10">
                          <Button variant="destructive" size="icon">
                            <CircleX className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="space-y-3">
                          <div className="flex gap-2 items-center w-full">
                            <CreditCard className="size-6" />
                            <div className="flex flex-col gap-2 w-full">
                              <Label className="font-medium text-xs">
                                Payment Mode
                              </Label>

                              <Select defaultValue="SSL Commerz">
                                <SelectTrigger className="bg-transparent w-full border-gray-400/75 rounded-lg text-black">
                                  <SelectValue placeholder="Select payment mode" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {["SSL Commerz"].map((item, index) => (
                                      <SelectItem key={index} value={item}>
                                        {item}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pl-2">
                            <Input
                              className="w-full"
                              type="number"
                              placeholder="Card No"
                            />

                            <Input
                              className="w-full"
                              type="text"
                              value={"2023-04-16 09:00:00"}
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          <Input className="w-full" type="number" value={0.0} />
                        </TableCell>

                        <TableCell className="border-r gap-0 w-10">
                          <Button variant="destructive" size="icon">
                            <CircleX className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <div className="flex justify-end mx-3">
                    <Button variant={"outline"} size={"icon"}>
                      <Plus className="size-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden w-1/2">
                <CardHeader className="flex flex-row items-start border-b border-b-black/30">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      Balance Details
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                  <div className="grid gap-3">
                    <ul className="grid gap-3 font-bold">
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Remain Amt.
                        </span>
                        <span>$0.00</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Collected Amt.
                        </span>
                        <span>$1500.00</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Change Amt.
                        </span>
                        <span>$0.00</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ReservationCheckOutPage;

{
  /* <div className="w-full space-y-10">
              <div className="flex gap-10 items-center">
                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Check In
                  </span>
                  <span className="text-gray-500">1/10/2024</span>
                </Label>
                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Check Out
                  </span>
                  <span className="text-gray-500">12/10/2024</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Compnay Name
                  </span>
                  <span className="text-gray-500">Al Hind Travels</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Customer Name
                  </span>
                  <span className="text-gray-500">Majeed</span>
                </Label>
              </div>

              <div className="flex gap-10 items-center">
                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Room Details
                  </span>
                  <span className="text-gray-500">1. VIP Room - 2</span>
                  <span className="text-gray-500">2. Tandard Room 1</span>
                </Label>
                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Travel Agent
                  </span>
                  <span className="text-gray-500">Rahman</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    No. Adult
                  </span>
                  <span className="text-gray-500">2</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    No. Child
                  </span>
                  <span className="text-gray-500">2</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    No. Nights
                  </span>
                  <span className="text-gray-500">2</span>
                </Label>
              </div>

              <div className="flex gap-10 items-center">
                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Package
                  </span>
                  <span className="text-gray-500">Room Only</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Purpose of visit
                  </span>
                  <span className="text-gray-500">Hajj</span>
                </Label>
              </div>
            </div>

            <div className="flex justify-between gap-5 w-full">
              <div className="space-y-3 w-1/3">
                <div className="w-full  flex">
                  <h1 className="text-purple-500 border-b-purple-500 border-b-2 w-max h-full pb-2 font-semibold">
                    Summary
                  </h1>

                  <h1 className="text-gray-500 border-b-gray-200 border-b-2 w-max h-full pb-2 font-semibold px-2">
                    Rooms
                  </h1>

                  <h1 className="text-gray-500 border-b-gray-200 border-b-2 w-max h-full pb-2 font-semibold px-2">
                    Room Service
                  </h1>

                  <h1 className="text-gray-500 border-b-gray-200 border-b-2 w-max h-full pb-2 font-semibold px-2">
                    Other Services
                  </h1>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                  {[
                    {
                      name: "NO OF ROOMS",
                      value: "5",
                    },
                    {
                      name: "NO OF DAYS",
                      value: "3",
                    },
                    {
                      name: "EXTRA BEDS (20.00)",
                      value: "20",
                    },
                    {
                      name: "TOTAL",
                      value: "3500",
                    },
                    {
                      name: "TAX",
                      value: "99",
                    },
                    {
                      name: "COUPON DISCOUNT",
                      value: "-150",
                    },
                    {
                      name: "Room Services",
                      value: "1500",
                    },
                    {
                      name: "Other Services",
                      value: "800",
                    },
                    {
                      name: "Advance Paid",
                      value: "0",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 w-full flex justify-between px-3 py-1.5 rounded-lg"
                    >
                      <span className="text-gray-400 font-medium">
                        {item.name}
                      </span>

                      <span className="font-bold text-black">{item.value}</span>
                    </div>
                  ))}

                  <div className="border-gray-100 border-2 w-full flex justify-between px-3 py-1.5 rounded-lg">
                    <span className="text-gray-400 font-medium">
                      BALANCE PAYABLE
                    </span>

                    <span className="font-bold text-black text-lg">3350</span>
                  </div>
                </div>

                <div className="space-y-7 pt-5">
                  <Label className="flex flex-col gap-3">
                    <span className="text-lg ">Optional Date Due on</span>
                    <span className="text-red-500">12/10/2024</span>
                  </Label>

                  <Label className="flex flex-col gap-3">
                    <span className="text-lg ">Amount</span>
                    <span className="text-red-500">3350 SR</span>
                  </Label>
                </div>
              </div>

              <div className="space-y-3 w-1/3 ">
                <Label className="text-gray-600 text-lg">
                  Room and other Service Payment
                </Label>

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
                  <div className="flex flex-col gap-1">
                    <Label>Balance Payable</Label>
                    <div className="border rounded text-center font-bold px-8 w-44 py-2">
                      1799 SR
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label>Reference No.</Label>
                    <Input className="w-44" />
                  </div>
                </div>

                <div>
                  <Button className=" bg-purple-500 font-medium px-10 py-5">
                    Pay
                  </Button>
                </div>
              </div>

              <div className="space-y-3 w-1/3">
                <Label className="text-gray-600 text-lg">
                  Security Amount Refund
                </Label>

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
                  <div className="flex flex-col gap-1">
                    <Label>Enter your amount*</Label>
                    <Input className="w-44" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label>Reference No.</Label>
                    <Input className="w-44" />
                  </div>
                </div>

                <div>
                  <Button className=" bg-purple-500 font-medium px-10 py-5">
                    Pay
                  </Button>
                </div>

                <div>
                  <Button className="font-medium px-7 py-4 text-xs">
                    Check In
                  </Button>
                </div>
              </div>
            </div> */
}
