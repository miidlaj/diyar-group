import React, { FunctionComponent } from "react";
import { CloudDownload, Edit, Plus, Scroll, Search } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const ReservationCheckIn: FunctionComponent = () => {
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
            <div className="w-full space-y-10">
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

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Travel Agent
                  </span>
                  <span className="text-gray-500">Rahman</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Early Check In
                  </span>
                  <span className="text-gray-500">12/10/2024</span>
                </Label>
              </div>

              <div className="flex gap-10 items-center">
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

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Purpose of visit
                  </span>
                  <span className="text-gray-500">Hajj</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Early check in price
                  </span>
                  <span className="text-gray-500">SR. 100</span>
                </Label>

                <Label className="flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground font-thin">
                    Package
                  </span>
                  <span className="text-gray-500">Room Only</span>
                </Label>
              </div>
            </div>
            <div className="flex gap-5 w-full justify-between">
              <div className="w-2/3 space-y-3">
                <div className="flex justify-between w-full">
                  <h1 className="font-bold text-xl">
                    Room Details{" "}
                    <span className="rounded-lg text-xs bg-purple-300 text-purple-950 font-bold p-1">
                      5
                    </span>
                  </h1>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <CloudDownload className="h-4 w-4" />
                    </Button>

                    <Button variant="outline">
                      <Scroll className="mr-2 h-4 w-4" /> Auto allot
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
                        <TableHead>Room No.</TableHead>

                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="border">
                      {Array.from({ length: 2 }).map((_, index) => (
                        <TableRow key={index}>
                          <TableCell className="border-r">
                            #{95959 + index}
                          </TableCell>
                          <TableCell className="border-r">Alexander</TableCell>
                          <TableCell className="border-r">Adam</TableCell>
                          <TableCell className="border-r">
                            Deluxe Room
                          </TableCell>
                          <TableCell className="border-r">A563</TableCell>

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
            <div className="flex justify-between gap-5 w-full">
              <div className="space-y-3 w-1/3">
                <div className="w-full border-b-gray-400 border-b">
                  <h1 className="text-purple-500 border-b-purple-500 border-b-2 w-max h-full pb-2 font-semibold">
                    Summary
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
              </div>

              <div className="space-y-3 w-1/3 mt-14">
                <Label className="text-gray-600 text-lg">Room Payment</Label>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Balance Payable</Label>
                  <div className="border rounded text-center font-bold px-8 w-44 py-2">
                    1799 SR
                  </div>
                </div>

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

                <div>
                  <Button className=" bg-purple-500 font-medium px-10 py-5">
                    Pay
                  </Button>
                </div>
              </div>

              <div className="space-y-3 w-1/3 mt-14">
                <Label className="text-gray-600 text-lg">
                  Security Payment
                </Label>

                <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
                  <Label>Advance Payable</Label>
                  <div className="border rounded text-center font-bold px-8 w-44 py-2">
                    1799 SR
                  </div>
                </div>

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

                <div>
                  <Button className=" bg-purple-500 font-medium px-10 py-5">
                    Pay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ReservationCheckIn;
