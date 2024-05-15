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

export default function PlanSelectionModal({
  onSelect,
}: {
  onSelect: (e: string) => void;
}) {
  const data = [
    {
      PlanId: "RO",
      PlanName: "Room Only",
      AdultAmt: 10.0,
      ChildAmt: 10.0,
    },
    {
      PlanId: "BB",
      PlanName: "Bed and Breakfast",
      AdultAmt: 20.0,
      ChildAmt: 40.0,
    },
    {
      PlanId: "HB",
      PlanName: "Half Board",
      AdultAmt: 40.0,
      ChildAmt: 50.0,
    },
    {
      PlanId: "FB",
      PlanName: "Full Board",
      AdultAmt: 50.0,
      ChildAmt: 50.0,
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);
  const handleClick = (item: number) => {
    setSelected(item);
  };

  const handleSave = () => {
    if (selected !== null && data[selected]) {
      onSelect(data[selected].PlanName);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Search className="h-4 w-4 absolute right-2" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Plan Search</DialogTitle>
        </DialogHeader>

        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Plan Id</TableHead>
              <TableHead>Plan Name</TableHead>
              <TableHead>Adult Amt.</TableHead>
              <TableHead>Child Amt.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={item.PlanId}
                onClick={() => handleClick(index)}
                onDoubleClick={() => {
                  handleSave();
                  setOpen(false);
                }}
                className={`${
                  index === selected ? "bg-green-100 hover:bg-green-200" : ""
                } cursor-pointer`}
              >
                <TableCell className="font-medium">{item.PlanId}</TableCell>
                <TableCell>{item.PlanName}</TableCell>
                <TableCell>{item.AdultAmt}</TableCell>
                <TableCell>{item.ChildAmt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

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
