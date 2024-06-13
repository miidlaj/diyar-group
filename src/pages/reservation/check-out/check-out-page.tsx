import React, { FunctionComponent } from "react";
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

                <BillSettlement />
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

                <BillSettlement />
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

type PaymentMode = "Bank Payment" | "Cash" | "Card";

interface RowData {
  paymentMode: PaymentMode;
  amount: number;
  accountNo: string;
  bankName: string;
  cardNo: string;
  date: string;
}

const BillSettlement = () => {
  const [rows, setRows] = React.useState<RowData[]>([
    {
      paymentMode: "Bank Payment",
      amount: 1500,
      accountNo: "",
      bankName: "Option 1",
      cardNo: "",
      date: "2023-04-16 09:00:00",
    },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        paymentMode: "Bank Payment",
        amount: 0,
        accountNo: "",
        bankName: "Option 1",
        cardNo: "",
        date: "",
      },
    ]);
  };

  const handleRemoveRow = (index: number) => {
    if (rows.length > 1) {
      const newRows = rows.filter((_, i) => i !== index);
      setRows(newRows);
    }
  };

  const handleInputChange = (
    index: number,
    field: keyof RowData,
    value: string | number
  ) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value } as RowData;
    setRows(newRows);
  };

  const handleSelectChange = (
    index: number,
    field: keyof RowData,
    value: PaymentMode
  ) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value } as RowData;
    setRows(newRows);
  };

  return (
    <>
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
              <TableHead>Payment Mode</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="w-10">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-muted-foreground">
            {rows.map((row, index) => (
              <TableRow key={index} className="border-none">
                <TableCell className="space-y-3">
                  <div className="flex gap-2 items-center w-full">
                    <CreditCard className="size-6" />
                    <div className="flex flex-col gap-2 w-full">
                      <Label className="font-medium text-xs">
                        Payment Mode
                      </Label>
                      <Select
                        defaultValue={row.paymentMode}
                        onValueChange={(value: PaymentMode) =>
                          handleSelectChange(index, "paymentMode", value)
                        }
                      >
                        <SelectTrigger className="bg-transparent w-full border-gray-400/75 rounded-lg text-black">
                          <SelectValue placeholder="Select payment mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {["Bank Payment", "Cash", "Card"].map((item) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {row.paymentMode === "Bank Payment" && (
                    <div className="flex items-center gap-2 pl-2">
                      <Input
                        className="w-full"
                        type="number"
                        placeholder="Account No"
                        value={row.accountNo}
                        onChange={(e) =>
                          handleInputChange(index, "accountNo", e.target.value)
                        }
                      />
                      <Select
                        defaultValue={row.bankName}
                        onValueChange={(value: string) =>
                          handleInputChange(index, "bankName", value)
                        }
                      >
                        <SelectTrigger className="bg-transparent w-full border-gray-400/75 rounded-lg text-black">
                          <SelectValue placeholder="Choose Bank Name" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {["Option 1", "Option 2"].map((item) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  {row.paymentMode === "Card" && (
                    <div className="flex items-center gap-2 pl-2">
                      <Input
                        className="w-full"
                        type="number"
                        placeholder="Card No"
                        value={row.cardNo}
                        onChange={(e) =>
                          handleInputChange(index, "cardNo", e.target.value)
                        }
                      />
                      <Input
                        className="w-full"
                        type="text"
                        placeholder="Date"
                        value={row.date}
                        onChange={(e) =>
                          handleInputChange(index, "date", e.target.value)
                        }
                      />
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  <Input
                    className="w-full"
                    type="number"
                    value={row.amount}
                    onChange={(e) =>
                      handleInputChange(index, "amount", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell className="border-r gap-0 w-10">
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveRow(index)}
                    disabled={rows.length <= 1}
                  >
                    <CircleX className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end mx-3">
          <Button variant={"outline"} size={"icon"} onClick={handleAddRow}>
            <Plus className="size-4" />
          </Button>
        </div>
      </CardContent>
    </>
  );
};
