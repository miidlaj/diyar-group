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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type DataItem = {
  companyName: string;
  place: string;
  narration: string;
};

const data: DataItem[] = [
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

export default function CompanySelectionModal({
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
      onSelect(data[selected].companyName);
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
        <Search className="h-4 w-4 absolute right-2 cursor-pointer bg-white " />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Company Search</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[50vh]">
          <Table className="">
            <TableCaption className="">
              <div className="w-full flex justify-start gap-3">
                <Badge className="bg-red-600">Unapproved</Badge>
                <Badge className="bg-blue-600">Blacklisted</Badge>
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="px-[1px]">
                  <Input
                    type="text"
                    className="w-full rounded-none"
                    placeholder="Company"
                    onChange={(e) => {
                      handleSearch(e.target.value, "companyName");
                    }}
                  />
                </TableHead>
                <TableHead className="px-[1px]">
                  <Input
                    type="text"
                    className="w-full rounded-none"
                    placeholder="Place"
                    onChange={(e) => {
                      handleSearch(e.target.value, "place");
                    }}
                  />
                </TableHead>
                <TableHead className="px-[1px]">
                  <Input
                    type="text"
                    className="w-full rounded-none"
                    placeholder="Narration"
                    onChange={(e) => {
                      handleSearch(e.target.value, "narration");
                    }}
                  />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
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
                  <TableCell>{item.companyName}</TableCell>
                  <TableCell>{item.place}</TableCell>
                  <TableCell>{item.narration}</TableCell>
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
