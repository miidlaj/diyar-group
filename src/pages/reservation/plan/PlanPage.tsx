import { Button } from "@/components/ui/button";
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
  EllipsisVertical,
  Filter,
} from "lucide-react";

export default function PlanPage() {
  return (
    <>
      <div className="mx-5 space-y-5">
        <div className="w-1/2 space-y-3">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl">
                Plan{" "}
                <span className="rounded-lg text-xs bg-purple-100 text-purple-500 font-bold p-1">
                  5
                </span>
              </h1>
              <p className="text-muted-foreground text-md">Total 4 Plan</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <div className="flex gap-2">
              <Button className="text-sm">Add deal</Button>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[50vh] w-full rounded-md relative border border-gray-200 px-3">
            <Table>
              <TableHeader>
                <TableRow className="outline-none border-none no-underline">
                  <TableHead>#</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Plan Name</TableHead>
                  <TableHead>Adult</TableHead>
                  <TableHead>Child</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-muted-foreground">
                {plansData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="space-y-1 font-medium text-black">
                      {index + 1}
                    </TableCell>
                    <TableCell className="space-y-1 font-medium text-black">
                      #{item.id}
                    </TableCell>
                    <TableCell>{item.planName}</TableCell>
                    <TableCell>{item.adult}</TableCell>
                    <TableCell>{item.child}</TableCell>
                    <TableCell className="w-10">
                      <Button variant="ghost" size="icon">
                        <EllipsisVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}

const plansData = [
  {
    id: "PLN001",
    planName: "Family Package",
    adult: 2,
    child: 2,
  },
  {
    id: "PLN002",
    planName: "Couple Retreat",
    adult: 2,
    child: 0,
  },
  {
    id: "PLN003",
    planName: "Adventure Trip",
    adult: 1,
    child: 1,
  },
  {
    id: "PLN004",
    planName: "Solo Explorer",
    adult: 1,
    child: 0,
  },
  {
    index: 5,
    id: "PLN005",
    planName: "Group Fun",
    adult: 4,
    child: 4,
  },
  {
    id: "PLN006",
    planName: "Business Travel",
    adult: 1,
    child: 0,
  },
  {
    id: "PLN007",
    planName: "Extended Family Package",
    adult: 4,
    child: 2,
  },
  {
    id: "PLN008",
    planName: "Relaxation Retreat",
    adult: 2,
    child: 1,
  },
];
