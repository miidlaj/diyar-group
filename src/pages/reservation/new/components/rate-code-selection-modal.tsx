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
import { Search } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RateCodeSelectionModal({
  onSelect,
}: {
  onSelect: (e: string) => void;
}) {
  const data = [
    {
      RateCode: "Regular Rate - Hourly",
      Adult1: 250.0,
      Adult2: 50.0,
      Adult3: 120.0,
      Adult4: 800.0,
      ExtAdlt: 200.0,
      Plan: "",
      ExtChild: 250.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "1 Hour Rate",
      Adult1: 180.0,
      Adult2: 400.0,
      Adult3: 800.0,
      Adult4: 70.0,
      ExtAdlt: 150.0,
      Plan: "",
      ExtChild: 800.0,
      AdltPlan: 230.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "2 Hour Rate",
      Adult1: 800.0,
      Adult2: 800.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "Full Board",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "Promotion Rate",
      Adult1: 800.0,
      Adult2: 800.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "MALDIVES RateCode",
      Adult1: 800.0,
      Adult2: 800.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "Full Board",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "MID SEASON",
      Adult1: 180.0,
      Adult2: 450.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "Full Board",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "Bar Rate - Occupancy 0 to 20 %",
      Adult1: 800.0,
      Adult2: 800.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "Full Board",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "Bar Rate - Occupancy 21 to 40 %",
      Adult1: 5.0,
      Adult2: 5.0,
      Adult3: 5.0,
      Adult4: 5.0,
      ExtAdlt: 5.0,
      Plan: "",
      ExtChild: 50.0,
      AdltPlan: 5.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "Bar Rate - Occupancy 41 to 60 %",
      Adult1: 273.0,
      Adult2: 273.0,
      Adult3: 273.0,
      Adult4: 273.0,
      ExtAdlt: 273.0,
      Plan: "",
      ExtChild: 40.0,
      AdltPlan: 273.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "Bar Rate - Occupancy 61 to 80 %",
      Adult1: 5.0,
      Adult2: 5.0,
      Adult3: 5.0,
      Adult4: 5.0,
      ExtAdlt: 5.0,
      Plan: "",
      ExtChild: 273.0,
      AdltPlan: 5.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "Occupancy 81 and Above",
      Adult1: 800.0,
      Adult2: 800.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "Regular Tariff",
      Adult1: 800.0,
      Adult2: 800.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "Master Rate",
      Adult1: 800.0,
      Adult2: 800.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "250.00",
      Adult1: 5.0,
      Adult2: 5.0,
      Adult3: 5.0,
      Adult4: 5.0,
      ExtAdlt: 5.0,
      Plan: "Half Board",
      ExtChild: 50.0,
      AdltPlan: 5.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "50.00",
      Adult1: 273.0,
      Adult2: 273.0,
      Adult3: 273.0,
      Adult4: 273.0,
      ExtAdlt: 273.0,
      Plan: "",
      ExtChild: 40.0,
      AdltPlan: 273.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "120.00",
      Adult1: 5.0,
      Adult2: 5.0,
      Adult3: 5.0,
      Adult4: 5.0,
      ExtAdlt: 5.0,
      Plan: "",
      ExtChild: 273.0,
      AdltPlan: 5.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "800.00",
      Adult1: 273.0,
      Adult2: 273.0,
      Adult3: 273.0,
      Adult4: 273.0,
      ExtAdlt: 273.0,
      Plan: "",
      ExtChild: 40.0,
      AdltPlan: 273.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "200.00",
      Adult1: 5.0,
      Adult2: 5.0,
      Adult3: 5.0,
      Adult4: 5.0,
      ExtAdlt: 5.0,
      Plan: "",
      ExtChild: 273.0,
      AdltPlan: 5.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "250.00",
      Adult1: 5.0,
      Adult2: 5.0,
      Adult3: 5.0,
      Adult4: 5.0,
      ExtAdlt: 5.0,
      Plan: "",
      ExtChild: 273.0,
      AdltPlan: 5.0,
      ChildPlan: 273.0,
    },
    {
      RateCode: "800.00",
      Adult1: 800.0,
      Adult2: 800.0,
      Adult3: 800.0,
      Adult4: 800.0,
      ExtAdlt: 800.0,
      Plan: "Full Board",
      ExtChild: 800.0,
      AdltPlan: 800.0,
      ChildPlan: 800.0,
    },
    {
      RateCode: "60.00",
      Adult1: 273.0,
      Adult2: 273.0,
      Adult3: 273.0,
      Adult4: 273.0,
      ExtAdlt: 273.0,
      Plan: "Full Board",
      ExtChild: 40.0,
      AdltPlan: 273.0,
      ChildPlan: 273.0,
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);
  const handleClick = (item: number) => {
    setSelected(item);
  };

  const handleSave = () => {
    if (selected !== null && data[selected]) {
      onSelect(data[selected].RateCode);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Search className="h-4 w-4 absolute right-2" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Rate Code Search</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[80vh]">
          <Table className="">
            <TableHeader>
              <TableRow>
                {[
                  "Rate Code",
                  "Adult 1",
                  "Adult 2",
                  "Adult 3",
                  "Adult 4",
                  "ExtAdlt",
                  "ExtChild",
                  "Plan",
                  "AdltPlan",
                  "ChildPlan",
                ].map((item, index) => (
                  <TableHead key={index}>{item} </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={item.RateCode}
                  onClick={() => handleClick(index)}
                  onDoubleClick={() => {
                    handleSave();
                    setOpen(false);
                  }}
                  className={`${
                    index === selected ? "bg-green-100 hover:bg-green-200" : ""
                  } cursor-pointer`}
                >
                  <TableCell className="font-medium">{item.RateCode}</TableCell>
                  <TableCell>{item.Adult1}</TableCell>
                  <TableCell>{item.Adult2}</TableCell>
                  <TableCell>{item.Adult3}</TableCell>
                  <TableCell>{item.Adult4}</TableCell>
                  <TableCell>{item.ExtAdlt}</TableCell>
                  <TableCell>{item.ExtChild}</TableCell>
                  <TableCell>{item.Plan}</TableCell>
                  <TableCell>{item.AdltPlan}</TableCell>
                  <TableCell>{item.ChildPlan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" onClick={handleSave}>
              Ok
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
