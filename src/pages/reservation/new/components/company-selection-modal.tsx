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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Badge } from "@/components/ui/badge";

export default function CompanySelectionModal({
  onSelect,
}: {
  onSelect: (e: string) => void;
}) {
  const data = [
    {
      companyName: "Company A",
      place: "New York",
      narration: "First company in New York",
    },
    {
      companyName: "Company B",
      place: "San Francisco",
      narration: "Second company in San Francisco",
    },
    {
      companyName: "Company C",
      place: "Los Angeles",
      narration: "Third company in Los Angeles",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);
  const handleClick = (item: number) => {
    setSelected(item);
  };

  const handleSave = () => {
    if (selected !== null && data[selected]) {
      onSelect(data[selected].companyName);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Search className="h-4 w-4 absolute right-2" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Company Search</DialogTitle>
        </DialogHeader>

        <Table className="">
          <TableCaption className="">
            <div className="w-full flex justify-start gap-3">
              <Badge className="bg-red-600">Unapproved</Badge>
              <Badge className="bg-blue-600">Blacklisted</Badge>
            </div>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SI No.</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>Place</TableHead>
              <TableHead>Narration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={item.companyName}
                onClick={() => handleClick(index)}
                onDoubleClick={() => {
                    handleSave();
                    setOpen(false);
                }}
                className={`${
                  index === selected ? "bg-green-100 hover:bg-green-200" : ""
                } cursor-pointer`}
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.companyName}</TableCell>
                <TableCell>{item.place}</TableCell>
                <TableCell>{item.narration}</TableCell>
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
