import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DownloadCloud, Search } from "lucide-react";

export default function ConfirmReservation({
  check_in,
  check_out,
  save,
  children
}: {
  check_in: Date;
  check_out: Date;
  save: () => void;
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false);
  const [dates, setDates] = React.useState<Date[]>([]);

  React.useEffect(() => {
    createDateArray();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check_in, check_out]);

  const createDateArray = () => {
    const temp_dates: Date[] = [];
    const currentDate = new Date(check_in);

    while (currentDate <= check_out) {
      temp_dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDates(temp_dates);
  };

  const handleSave = () => {
    setOpen(false);
    save();
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
         {children}
        </DialogTrigger>
        <DialogContent className="max-w-screen-xl">
          <DialogHeader>
            <DialogTitle>Rate Edit</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <div className="flex justify-start w-full gap-1">
              <div className="space-y-3 w-1/4">
                <div className="grid w-full grid-cols-2 max-w-sm items-center">
                  <Label>Arrival Date</Label>
                  <Input
                    type="text"
                    value={format(check_in, "dd/MM/yyyy EEE")}
                    className="w-full"
                  />
                </div>

                <div className="grid w-full grid-cols-2 max-w-sm items-center ">
                  <Label>Departure Date</Label>
                  <Input
                    type="text"
                    value={format(check_out, "dd/MM/yyyy EEE")}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-3 w-2/5">
                <div className="grid w-full grid-cols-2 max-w-sm items-center ">
                  <Label>Room Type</Label>
                  <Input
                    type="text"
                    defaultValue={"All Room"}
                    className="w-full"
                  />
                </div>
                <div className="grid w-full grid-cols-2 max-w-sm items-center ">
                  <Label>Rate Type</Label>
                  <Input
                    type="text"
                    defaultValue={"Regular Tariff"}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-3 w-1/4">
                <div className="grid w-full grid-cols-2 max-w-sm items-center ">
                  <Label>Distribute Amnt</Label>
                  <Input type="text" className="w-full" />
                </div>
                <div className="grid w-full grid-cols-2 max-w-sm items-center ">
                  <Label>Currency</Label>
                  <Input type="text" defaultValue={"AED"} className="w-full" />
                </div>
              </div>

              <div className="space-y-3 w-1/4">
                <div className="grid w-full grid-cols-2 max-w-sm items-center ">
                  <Label>Charge Pax</Label>
                  <Input type="text" defaultValue={0} className="w-full" />
                </div>
              </div>
            </div>
            <ScrollArea className="h-[60vh]">
              <Table>
                <TableCaption>A list of your selected dates.</TableCaption>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    {[
                      "Date",
                      "Rate Type",
                      "Rate",
                      "Disc%",
                      "Disc Amt",
                      "Disc Reason",
                      "Disc Type",
                      "Company",

                      "Adult",
                      "Travel Agent",
                      "Ch1",
                      "Plan",
                      "P.Adu1t",
                      "P.Ch1",
                      " ",
                    ].map((item, index) => (
                      <TableHead key={index}>{item}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody className="border">
                  {dates.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell key={index} className="font-medium  border-r">
                        {format(item, "dd/MM/yyyy EEE")}
                      </TableCell>

                      <TableCell className="flex justify-between items-center border-r">
                        Regular Tariff
                        <Search className="h-4 w-4 cursor-pointer" />
                      </TableCell>

                      <TableCell className=" border-r py-0 px-[1px] my-0">
                        <Input
                          className="rounded-none border-none h-7"
                          defaultValue={"400"}
                        />
                      </TableCell>

                      <TableCell className="border-r"></TableCell>

                      <TableCell className="border-r"></TableCell>

                      <TableCell className="border-r"></TableCell>

                      <TableCell className="border-r"></TableCell>

                      <TableCell className="flex justify-between items-center border-r">
                        Company
                        <Search className="h-4 w-4 cursor-pointer" />
                      </TableCell>

                      <TableCell className="border-r"></TableCell>

                      <TableCell className="flex justify-between items-center border-r">
                        Agent
                        <Search className="h-4 w-4 cursor-pointer" />
                      </TableCell>

                      <TableCell className="border-r"></TableCell>

                      <TableCell className="flex justify-between items-center border-r">
                        Plan
                        <Search className="h-4 w-4 cursor-pointer" />
                      </TableCell>

                      <TableCell className="border-r"></TableCell>
                      <TableCell className="border-r"></TableCell>

                      <TableCell className="border-r">
                        <DownloadCloud className="h-4 w-4" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>

            <Button onClick={handleSave} type="button">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
