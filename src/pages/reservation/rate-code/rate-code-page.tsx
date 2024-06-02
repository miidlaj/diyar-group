import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Send,
  CloudDownload,
  Settings,
  EllipsisVertical,
  Plus,
  Filter,
} from "lucide-react";

export default function RateCodePage() {
  return (
    <>
      <div className="mx-5 space-y-5">
        <div className="w-full space-y-3">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl">
                Rate Code{" "}
                <span className="rounded-lg text-xs bg-purple-100 text-purple-500 font-bold p-1">
                  8
                </span>
              </h1>
              <p className="text-muted-foreground text-md">
                Total 5 Rooms Select
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Send className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <CloudDownload className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" /> Numberings
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-3">
              <ToggleGroup type="single" defaultValue="ongoing" className="">
                <ToggleGroupItem
                  value="ongoing"
                  aria-label="Toggle Ongoing"
                  className="rounded-full border-gray-500 border bg-gray-100/50 hover:bg-gray-100 hover:text-gray-600 text-gray-500 data-[state=on]:border-blue-500 data-[state=on]:border-2 data-[state=on]:bg-blue-100/50 data-[state=on]:hover:bg-blue-100 data-[state=on]:hover:text-blue-600 data-[state=on]:text-blue-500"
                >
                  Ongoing
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="finished"
                  aria-label="Toggle Finished"
                  className="rounded-full border-gray-500 border bg-gray-100/50 hover:bg-gray-100 hover:text-gray-600 text-gray-500 data-[state=on]:border-blue-500 data-[state=on]:border-2 data-[state=on]:bg-blue-100/50 data-[state=on]:hover:bg-blue-100 data-[state=on]:hover:text-blue-600 data-[state=on]:text-blue-500"
                >
                  Finished
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

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
                  <TableHead>Reference number</TableHead>
                  <TableHead>Rate Code</TableHead>
                  <TableHead>Reservation left</TableHead>
                  <TableHead>End date</TableHead>
                  <TableHead>Room type</TableHead>
                  <TableHead className="w-44">Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-muted-foreground">
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="space-y-1 font-medium text-black">
                      #{item.referenceNumber}
                    </TableCell>

                    <TableCell>{item.rateCode}</TableCell>
                    <TableCell>{item.reservationsLeft}</TableCell>
                    <TableCell>{item.endDate}</TableCell>
                    <TableCell>{item.roomType}</TableCell>

                    <TableCell className="w-44">
                      {renderContent(item.status)}
                    </TableCell>
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

        <Pagination>
          <PaginationContent className="flex justify-between w-full items-center">
            <PaginationItem>
              <PaginationPrevious className="text-gray-500" href="#" />
            </PaginationItem>
            <div className="flex items-center gap-3 text-muted-foreground">
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="bg-primary/5 text-primary">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </div>

            <PaginationItem>
              <PaginationNext isActive href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

const renderContent = (status: string) => {
  switch (status) {
    case "Ongoing":
      return (
        <Badge className="bg-blue-200/50  text-blue-600  items-center rounded-3xl hover:bg-blue-200/50 hover:text-blue-600 font-normal">
          <span className="bg-blue-600 h-[5px] w-[5px] rounded-full mr-2"></span>
          {status}
        </Badge>
      );
    case "New":
      return (
        <Badge className="bg-green-200/50  text-green-600  items-center rounded-3xl hover:bg-green-200/50 hover:text-green-600 font-normal">
          <span className="bg-green-600 h-[5px] w-[5px] rounded-full mr-2"></span>
          {status}
        </Badge>
      );
    default:
      return (
        <Badge className="bg-red-200/50  text-red-600  items-center rounded-3xl hover:bg-red-200/50 hover:text-red-600 font-normal">
          <span className="bg-red-600 h-[5px] w-[5px] rounded-full mr-2"></span>
          {status}
        </Badge>
      );
  }
};

const data = [
  {
    referenceNumber: "REF001",
    rateCode: "RC001",
    reservationsLeft: 5,
    endDate: "2024-06-15",
    roomType: "Single",
    status: "Ongoing",
  },
  {
    referenceNumber: "REF002",
    rateCode: "RC002",
    reservationsLeft: 0,
    endDate: "2024-06-10",
    roomType: "Double",
    status: "Full",
  },
  {
    referenceNumber: "REF003",
    rateCode: "RC003",
    reservationsLeft: 2,
    endDate: "2024-07-01",
    roomType: "Queen",
    status: "Inactive",
  },
  {
    referenceNumber: "REF004",
    rateCode: "RC004",
    reservationsLeft: 3,
    endDate: "2024-06-20",
    roomType: "King",
    status: "New",
  },
  {
    referenceNumber: "REF005",
    rateCode: "RC005",
    reservationsLeft: 4,
    endDate: "2024-06-25",
    roomType: "Double",
    status: "Ongoing",
  },
  {
    referenceNumber: "REF006",
    rateCode: "RC006",
    reservationsLeft: 0,
    endDate: "2024-06-05",
    roomType: "Single",
    status: "Full",
  },
  {
    referenceNumber: "REF007",
    rateCode: "RC007",
    reservationsLeft: 1,
    endDate: "2024-06-30",
    roomType: "Queen",
    status: "Inactive",
  },
  {
    referenceNumber: "REF008",
    rateCode: "RC008",
    reservationsLeft: 6,
    endDate: "2024-07-10",
    roomType: "King",
    status: "New",
  },
];
