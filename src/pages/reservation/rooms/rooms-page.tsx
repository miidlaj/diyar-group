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
} from "lucide-react";

export default function RoomsPage() {
  return (
    <>
      <div className="mx-5 space-y-5">
        <div className="w-full space-y-3">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl">
                Rooms{" "}
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
              <ToggleGroup type="single" defaultValue="all-room" className="">
                <ToggleGroupItem
                  value="all-room"
                  aria-label="Toggle All"
                  className="rounded-full border-gray-500 border bg-gray-100/50 hover:bg-gray-100 hover:text-gray-600 text-gray-500 data-[state=on]:border-blue-500 data-[state=on]:border-2 data-[state=on]:bg-blue-100/50 data-[state=on]:hover:bg-blue-100 data-[state=on]:hover:text-blue-600 data-[state=on]:text-blue-500"
                >
                  All room(100)
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="available-room"
                  aria-label="Toggle Available"
                  className="rounded-full border-gray-500 border bg-gray-100/50 hover:bg-gray-100 hover:text-gray-600 text-gray-500 data-[state=on]:border-blue-500 data-[state=on]:border-2 data-[state=on]:bg-blue-100/50 data-[state=on]:hover:bg-blue-100 data-[state=on]:hover:text-blue-600 data-[state=on]:text-blue-500"
                >
                  Available room(80)
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="booked"
                  aria-label="Toggle Booked"
                  className="rounded-full border-gray-500 border bg-gray-100/50 hover:bg-gray-100 hover:text-gray-600 text-gray-500 data-[state=on]:border-blue-500 data-[state=on]:border-2 data-[state=on]:bg-blue-100/50 data-[state=on]:hover:bg-blue-100 data-[state=on]:hover:text-blue-600 data-[state=on]:text-blue-500"
                >
                  Booked(20)
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="flex gap-2">
              <Button className="text-sm">Add room</Button>
            </div>
          </div>
          <ScrollArea className="h-[50vh] w-full rounded-md relative border border-gray-200 px-3">
            <Table>
              <TableHeader>
                <TableRow className="outline-none border-none no-underline">
                  <TableHead>Room number</TableHead>
                  <TableHead>Bed Type</TableHead>
                  <TableHead>Room Floor</TableHead>
                  <TableHead>Room Facility</TableHead>
                  <TableHead className="w-44">Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-muted-foreground">
                {roomsData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="space-y-1 font-medium text-black">
                      #{item.roomNumber}
                    </TableCell>

                    <TableCell>{item.bedType}</TableCell>
                    <TableCell>{item.roomFloor}</TableCell>
                    <TableCell>{item.roomFacility}</TableCell>
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
    case "Available":
      return (
        <Badge className="bg-blue-200/50  text-blue-600  items-center rounded-3xl hover:bg-blue-200/50 hover:text-blue-600 font-normal">
          <span className="bg-blue-600 h-[5px] w-[5px] rounded-full mr-2"></span>
          {status}
        </Badge>
      );
    case "Reserved":
      return (
        <Badge className="bg-green-200/50  text-green-600  items-center rounded-3xl hover:bg-green-200/50 hover:text-green-600 font-normal">
          <span className="bg-green-600 h-[5px] w-[5px] rounded-full mr-2"></span>
          {status}
        </Badge>
      );
    case "Booked":
      return (
        <Badge className="bg-red-200/50  text-red-600  items-center rounded-3xl hover:bg-red-200/50 hover:text-red-600 font-normal">
          <span className="bg-red-600 h-[5px] w-[5px] rounded-full mr-2"></span>
          {status}
        </Badge>
      );
    default:
      return (
        <Badge className="bg-yellow-200/50  text-yellow-600  items-center rounded-3xl hover:bg-yellow-200/50 hover:text-yellow-600 font-normal">
          <span className="bg-yellow-600 h-[5px] w-[5px] rounded-full mr-2"></span>
          {status}
        </Badge>
      );
  }
};

const roomsData = [
  {
    roomNumber: "101",
    bedType: "Single",
    roomFloor: "1st",
    roomFacility: "WiFi, TV, AC",
    status: "Reserved",
  },
  {
    roomNumber: "102",
    bedType: "Double",
    roomFloor: "1st",
    roomFacility: "WiFi, TV, AC, Mini-Bar",
    status: "Available",
  },
  {
    roomNumber: "201",
    bedType: "Queen",
    roomFloor: "2nd",
    roomFacility: "WiFi, TV, AC, Balcony",
    status: "Booked",
  },
  {
    roomNumber: "202",
    bedType: "King",
    roomFloor: "2nd",
    roomFacility: "WiFi, TV, AC, Ocean View",
    status: "Waitlist",
  },
  {
    roomNumber: "301",
    bedType: "Double",
    roomFloor: "3rd",
    roomFacility: "WiFi, TV, AC, Mini-Bar, Jacuzzi",
    status: "Blocked",
  },
  {
    roomNumber: "302",
    bedType: "Single",
    roomFloor: "3rd",
    roomFacility: "WiFi, TV, AC, Work Desk",
    status: "Available",
  },
  {
    roomNumber: "401",
    bedType: "Queen",
    roomFloor: "4th",
    roomFacility: "WiFi, TV, AC, Lounge Area",
    status: "Booked",
  },
  {
    roomNumber: "402",
    bedType: "King",
    roomFloor: "4th",
    roomFacility: "WiFi, TV, AC, Kitchenette",
    status: "Reserved",
  },
];
