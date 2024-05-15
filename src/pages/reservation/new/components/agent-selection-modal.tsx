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

export default function AgentSelectionModal({
  onSelect,
}: {
  onSelect: (e: string) => void;
}) {
    const data = [
        {
          agentName: "Agent 1",
          place: "New York",
          narration: "Visited client for negotiation"
        },
        {
          agentName: "Agent 2",
          place: "Los Angeles",
          narration: "Attended a conference"
        },
        {
          agentName: "Agent 3",
          place: "Chicago",
          narration: "Met with potential customers"
        },
        {
          agentName: "Agent 4",
          place: "San Francisco",
          narration: "Conducted market research"
        },
        {
          agentName: "Agent 5",
          place: "Miami",
          narration: "Provided client support"
        }
      ];

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);
  const handleClick = (item: number) => {
    setSelected(item);
  };

  const handleSave = () => {
    if (selected !== null && data[selected]) {
      onSelect(data[selected].agentName);
    }
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

        <Table className="">
         
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SI No.</TableHead>
              <TableHead>Agent Name</TableHead>
              <TableHead>Place</TableHead>
              <TableHead>Narration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
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
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.agentName}</TableCell>
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
