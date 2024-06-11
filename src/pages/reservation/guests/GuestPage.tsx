import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
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
  Filter,
  EllipsisVertical,
  Search,
  BookOpenText,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GuestPage() {
  return (
    <>
      <div className="mx-5 space-y-5">
        <div className="w-full space-y-3">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl">
                Guests{" "}
                <span className="rounded-lg text-xs bg-purple-100 text-purple-500 font-bold p-1">
                  8
                </span>
              </h1>
              <p className="text-muted-foreground text-md">
                Tommorrow we have 8 Check in.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Send className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <CloudDownload className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-3">
              <ToggleGroup
                type="single"
                defaultValue="today"
                className="flex gap-0 rounded-md border border-gray-300 "
              >
                <ToggleGroupItem
                  value="today"
                  aria-label="Toggle Today"
                  className="rounded-l-md rounded-r-none border-r border-gray-300"
                >
                  Today
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="tomorrow"
                  aria-label="Toggle Tomorrow"
                  className="rounded-r-md rounded-l-none"
                >
                  Tomorrow
                </ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup
                type="single"
                defaultValue="today"
                className="flex gap-0 rounded-md border border-gray-300 "
              >
                <ToggleGroupItem
                  value="check-in"
                  aria-label="Toggle check in"
                  className="rounded-l-md rounded-r-none border-r border-gray-300"
                >
                  Check In
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="check-out"
                  aria-label="Toggle check out"
                  className="rounded-r-md rounded-l-none"
                >
                  Check Out
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[50vh] w-full rounded-md relative border border-gray-200 px-3">
            <Table>
              <TableHeader>
                <TableRow className="outline-none border-none no-underline">
                  <TableHead>Company</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Check In</TableHead>
                  <TableHead>Optional Date</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Check Out</TableHead>
                  <TableHead className="w-44">Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-muted-foreground">
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="space-y-1 font-medium text-black">
                      {item.company}
                      <p className="text-muted-foreground font-normal">
                        GR103983
                      </p>
                    </TableCell>
                    <TableCell className="space-y-1 font-medium text-black">
                      {item.customer}
                      <p className="text-muted-foreground font-normal">
                        1923408-AB2940
                      </p>
                    </TableCell>
                    <TableCell>{item.checkIn}</TableCell>
                    <TableCell className="text-red-500">
                      {item.optionalDate}
                    </TableCell>
                    <TableCell>$ {item.balance}</TableCell>
                    <TableCell>{item.checkOut}</TableCell>
                    <TableCell className="w-44">
                      {renderContent(item.status)}
                    </TableCell>
                    <TableCell className="w-10">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button variant="ghost" size="icon">
                            <EllipsisVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem><Link to="/reservation/check-in">Check in</Link></DropdownMenuItem>
                          <DropdownMenuItem>Check out</DropdownMenuItem>
                          <DropdownMenuItem className="flex gap-2 items-center">
                            Ledger <BookOpenText className="size-4" />
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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

const data = [
  {
    company: "ABC Corp",
    customer: "John Doe",
    checkIn: "2024-05-15",
    optionalDate: "2024-06-15",
    balance: "500",
    checkOut: "2024-05-30",
    status: "Accepted",
  },
  {
    company: "XYZ Inc",
    customer: "Jane Smith",
    checkIn: "2024-05-20",
    optionalDate: "2024-06-20",
    balance: "200",
    checkOut: "2024-05-30",
    status: "Tentative",
  },
  {
    company: "Global Tech",
    customer: "Bob Johnson",
    checkIn: "2024-05-25",
    optionalDate: "2024-06-25",
    balance: "300",
    checkOut: "2024-05-30",
    status: "Rejected",
  },
  {
    company: "Innovate Solutions",
    customer: "Alice Williams",
    checkIn: "2024-05-30",
    optionalDate: "2024-06-30",
    balance: "400",
    checkOut: "2024-05-30",
    status: "Not Sent",
  },
  {
    company: "TechnoSoft",
    customer: "Chris Brown",
    checkIn: "2024-06-01",
    optionalDate: "2024-07-01",
    balance: "0",
    checkOut: "2024-05-30",
    status: "Accepted",
  },
  {
    company: "NextGen IT",
    customer: "Jessica Taylor",
    checkIn: "2024-06-05",
    optionalDate: "2024-07-05",
    balance: "150",
    checkOut: "2024-05-30",
    status: "Tentative",
  },
  {
    company: "Blue Wave",
    customer: "David Lee",
    checkIn: "2024-06-10",
    optionalDate: "2024-07-10",
    balance: "350",
    checkOut: "2024-05-30",
    status: "Rejected",
  },
  {
    company: "Green Solutions",
    customer: "Sarah Walker",
    checkIn: "2024-06-15",
    optionalDate: "2024-07-15",
    balance: "250",
    checkOut: "2024-05-30",
    status: "Not Sent",
  },
  {
    company: "Bright Future",
    customer: "Mike Wilson",
    checkIn: "2024-06-20",
    optionalDate: "2024-07-20",
    balance: "450",
    checkOut: "2024-05-30",
    status: "Accepted",
  },
  {
    company: "Sky High",
    customer: "Linda Davis",
    checkIn: "2024-06-25",
    optionalDate: "2024-07-25",
    balance: "100",
    checkOut: "2024-05-30",
    status: "Tentative",
  },
];

const renderContent = (status: string) => {
  switch (status) {
    case "Accepted":
      return (
        <Badge className="bg-green-200/50  text-green-600  items-center rounded-3xl hover:bg-green-200/50 hover:text-green-600 font-normal">
          {" "}
          <span className="bg-green-600 h-[5px] w-[5px] rounded-full mr-2"></span>{" "}
          {status}
        </Badge>
      );
    case "Tentative":
      return (
        <Badge className="bg-yellow-200/50  text-yellow-600  items-center rounded-3xl hover:bg-yellow-200/50 hover:text-yellow-600 font-normal">
          <span className="bg-yellow-600 h-[5px] w-[5px] rounded-full mr-2"></span>{" "}
          {status}
        </Badge>
      );
    case "Rejected":
      return (
        <Badge className="bg-red-200/50  text-red-600  items-center rounded-3xl hover:bg-red-200/50 hover:text-red-600 font-normal">
          <span className="bg-red-600 h-[5px] w-[5px] rounded-full mr-2"></span>{" "}
          {status}
        </Badge>
      );
    default:
      return (
        <Badge className="bg-gray-200/50  text-gray-600  items-center rounded-3xl hover:bg-gray-200/50 hover:text-gray-600 font-normal">
          <span className="bg-gray-600 h-[5px] w-[5px] rounded-full mr-2"></span>{" "}
          {status}
        </Badge>
      );
  }
};
