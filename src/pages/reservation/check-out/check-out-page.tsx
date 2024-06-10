import { FunctionComponent } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RoomSearch from "./components/search-room";

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
              <Label className="text-muted-foreground">Room No.: </Label>
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
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ReservationCheckOutPage;
