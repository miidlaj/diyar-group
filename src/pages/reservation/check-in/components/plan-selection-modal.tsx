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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type DataItem = {
  PlanId: string;
  PlanName: string;
  AdultAmt: string;
  ChildAmt: string;
};

const data: DataItem[] = [
  {
    PlanId: "RO",
    PlanName: "Room Only",
    AdultAmt: "10.0",
    ChildAmt: "10.0",
  },
  {
    PlanId: "BB",
    PlanName: "Bed and Breakfast",
    AdultAmt: "20.0",
    ChildAmt: "40.0",
  },
  {
    PlanId: "HB",
    PlanName: "Half Board",
    AdultAmt: "40.0",
    ChildAmt: "50.0",
  },
  {
    PlanId: "FB",
    PlanName: "Full Board",
    AdultAmt: "50.0",
    ChildAmt: "50.0",
  },
];

export default function PlanSelectionModal({
  onSelect,
}: {
  onSelect: (e: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [filteredData, setFilteredData] = React.useState(data);

  const handleClick = (item: number) => {
    setSelected(item);
  };

  const handleSave = () => {
    if (selected !== null && data[selected]) {
      onSelect(data[selected].PlanName);
    }
  };

  const handleSearch = (keyword: string, field: keyof DataItem) => {
    if (!keyword) {
      setFilteredData(data);
      return;
    }

    const lowerCaseKeyword = keyword.toLowerCase();

    const filtered = data.filter((item) => {
      const fieldValue = item[field] ? item[field].toLowerCase() : "";
      return fieldValue.includes(lowerCaseKeyword);
    });

    setFilteredData(filtered);
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

        <ScrollArea className="h-[50vh]">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="px-[1px]">
                  <Input
                    type="text"
                    className="w-full rounded-none"
                    placeholder="Plan Id"
                    onChange={(e) => {
                      handleSearch(e.target.value, "PlanId");
                    }}
                  />
                </TableHead>

                <TableHead className="px-[1px]">
                  <Input
                    type="text"
                    className="w-full rounded-none"
                    placeholder="Plan Name"
                    onChange={(e) => {
                      handleSearch(e.target.value, "PlanName");
                    }}
                  />
                </TableHead>

                <TableHead>Adult Amnt</TableHead>
                <TableHead>Child Amnt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
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

              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell className="text-center" colSpan={3}>
                    No Result
                  </TableCell>
                </TableRow>
              )}
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
