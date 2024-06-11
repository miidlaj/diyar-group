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
import { Input } from "@/components/ui/input";

type DataItem = {
  agentName: string;
  place: string;
  narration: string;
};

const data: DataItem[] = [
  {
    agentName: "Agent 1",
    place: "New York",
    narration: "Visited client for negotiation",
  },
  {
    agentName: "Agent 2",
    place: "Los Angeles",
    narration: "Attended a conference",
  },
  {
    agentName: "Agent 3",
    place: "Chicago",
    narration: "Met with potential customers",
  },
  {
    agentName: "Agent 4",
    place: "San Francisco",
    narration: "Conducted market research",
  },
  {
    agentName: "Agent 5",
    place: "Miami",
    narration: "Provided client support",
  },
];

export default function AgentSelectionModal({
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
      onSelect(data[selected].agentName);
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
          <DialogTitle>Travel Agent Search</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[50vh]">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="px-[1px]">
                  <Input
                    type="text"
                    className="w-full rounded-none"
                    placeholder="Agent Name"
                    onChange={(e) => {
                      handleSearch(e.target.value, "agentName");
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
                  key={item.agentName}
                  onClick={() => handleClick(index)}
                  onDoubleClick={() => {
                    handleSave();
                    setOpen(false);
                  }}
                  className={`${
                    index === selected ? "bg-green-100 hover:bg-green-200" : ""
                  } cursor-pointer`}
                >
                  <TableCell>{item.agentName}</TableCell>
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
