import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarIcon, Filter, RefreshCcw, Search } from "lucide-react";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { HoverColorValues } from "./components/HoverColorValues";

interface CellPosition {
  rowIndex: number;
  colIndex: number;
}

interface Booking {
  name: string;
  colSpan: number;
  color: string;
  start: number;
}

const months = [
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
];
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const bookings: Booking[] = [
  { name: "Lewis", colSpan: 3, color: "orange", start: 2 },
  { name: "Andrew", colSpan: 3, color: "red", start: 6 },
  { name: "Mark", colSpan: 3, color: "blue", start: 2 },
  { name: "Tate", colSpan: 3, color: "blue", start: 0 },
  { name: "Andrew", colSpan: 3, color: "blue", start: 7 },
  { name: "Manson", colSpan: 3, color: "orange", start: 3 },
  { name: "Bruce", colSpan: 3, color: "orange", start: 1 },
  { name: "Mave", colSpan: 3, color: "green", start: 6 },
];

const HoverContent: React.FC = () => {
  const event = {
    name: "Business Trip",
    startDate: "2024-05-11",
    endDate: "2024-05-13",
    bookingNumber: 8,
    details: {
      reserveNo: "R7890",
      arrival: "2024-05-11",
      company: "OPQ Inc",
      rateCode: "R890",
      roomRate: 140,
      bookingDate: "2024-05-09",
      adult: 2,
      totCharges: 280,
      departure: "2024-05-13",
      plan: "Standard",
      child: 0,
      paid: 280,
    },
    maintenance: false,
  };

  return (
    <div className="mx-auto text-muted-foreground">
      <div className="font-semibold text-sm mb-4 border-b pb-2">
        {event.name} | Lewis
      </div>
      <div className="grid grid-cols-2 gap-x-8 text-xs">
        <div className="float-left">
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Reserve No:</b>
                </td>
                <td>{event.details?.reserveNo}</td>
              </tr>
              <tr>
                <td>
                  <b>Arrival:</b>
                </td>
                <td>{event.details?.arrival}</td>
              </tr>
              <tr>
                <td>
                  <b>Company:</b>
                </td>
                <td>{event.details?.company}</td>
              </tr>
              <tr>
                <td>
                  <b>Rate Code:</b>
                </td>
                <td>{event.details?.rateCode}</td>
              </tr>
              <tr>
                <td>
                  <b>Room Rate:</b>
                </td>
                <td>{event.details?.roomRate}</td>
              </tr>
              <tr>
                <td>
                  <b>Booking Date:</b>
                </td>
                <td>{event.details?.bookingDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="float-right">
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Adult:</b>
                </td>
                <td>{event.details?.adult}</td>
              </tr>
              <tr>
                <td>
                  <b>Child:</b>
                </td>
                <td>{event.details?.child}</td>
              </tr>
              <tr>
                <td>
                  <b>Total Charges:</b>
                </td>
                <td>{event.details?.totCharges}</td>
              </tr>
              <tr>
                <td>
                  <b>Departure:</b>
                </td>
                <td>{event.details?.departure}</td>
              </tr>
              <tr>
                <td>
                  <b>Plan:</b>
                </td>
                <td>{event.details?.plan}</td>
              </tr>
              <tr>
                <td>
                  <b>Paid:</b>
                </td>
                <td>{event.details?.paid}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function FrontDeskPage() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startCell, setStartCell] = useState<CellPosition | null>(null);
  const [endCell, setEndCell] = useState<CellPosition | null>(null);
  const [openBookingDrawer, setOpenBookingDrawer] = useState(false);
  const [showESR, setShowESR] = useState(true);

  const handleMouseDown = (rowIndex: number, colIndex: number): void => {
    setIsDragging(true);
    setStartCell({ rowIndex, colIndex });
  };

  const handleMouseUp = (rowIndex: number, colIndex: number): void => {
    setIsDragging(false);
    setEndCell({ rowIndex, colIndex });
    if (startCell) {
      const selectedCells = getSelectedCells(startCell, { rowIndex, colIndex });
      console.log("Selected cells:", selectedCells);
      setOpenBookingDrawer(true);
    }
  };

  const handleMouseOver = (rowIndex: number, colIndex: number): void => {
    if (isDragging) {
      setEndCell({ rowIndex, colIndex });
    }
  };

  const getSelectedCells = (
    start: CellPosition,
    end: CellPosition
  ): CellPosition[] => {
    const cells: CellPosition[] = [];
    const startRow = Math.min(start.rowIndex, end.rowIndex);
    const endRow = Math.max(start.rowIndex, end.rowIndex);
    const startCol = Math.min(start.colIndex, end.colIndex);
    const endCol = Math.max(start.colIndex, end.colIndex);

    for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
      for (let colIndex = startCol; colIndex <= endCol; colIndex++) {
        cells.push({ rowIndex, colIndex });
      }
    }
    return cells;
  };

  const handleOpenChangeofBookingDrawer = (open: boolean) => {
    if (!open) {
      setStartCell(null);
      setEndCell(null);
      setIsDragging(false);
    }

    setOpenBookingDrawer(open);
  };

  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <Dialog
        open={openBookingDrawer}
        onOpenChange={handleOpenChangeofBookingDrawer}
      >
        <DialogContent className="w-64">
          <DialogHeader>
            <DialogTitle>Room No: 103</DialogTitle>
          </DialogHeader>

          <div className="space-y-3 flex flex-col">
            <Button>Walkin</Button>
            <Button>Quick Reservation</Button>
            <Button>Block</Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mx-10 space-y-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {["Due in", "Checked out", "Due out", "Checked in"].map(
              (status, index) => {
                const colors = ["orange", "blue", "red", "green"];
                return (
                  <Button
                    key={index}
                    className={`bg-${colors[index]}-100/50 text-${colors[index]}-400 hover:bg-${colors[index]}-100`}
                  >
                    {status}
                  </Button>
                );
              }
            )}
          </div>

          <div className="flex gap-3 items-center">
            <div className="relative text-muted-foreground">
              <Input
                placeholder="Search by room number"
                className="pl-8 w-64"
              />
              <Search
                style={{ top: "50%", transform: "translateY(-50%)" }}
                className="absolute left-2 h-4 w-4"
              />
            </div>
            <Button className="font-normal">Create booking</Button>
          </div>
        </div>

        <div className="text-muted-foreground flex justify-between">
          <div className="flex items-center gap-2">
            <Label className="font-medium">Room Type</Label>

            <Select defaultValue="ALL">
              <SelectTrigger className="bg-transparent w-[200px] border-gray-400/75 rounded-lg">
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>types</SelectLabel>
                  {["ALL", "VIP", "TEST"].map((item, index) => (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button variant={"outline"} size={"icon"}>
              <Search className="size-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Label className="font-medium">From</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Button variant={"outline"} size={"icon"}>
              <RefreshCcw className="size-4" />
            </Button>

            <Button variant={"outline"} size={"icon"}>
              <Filter className="size-4" />
            </Button>
          </div>

          <HoverColorValues />
        </div>

        <div className="flex justify-between text-sm border-b">
          {months.map((month, index) => (
            <TableHead key={index}>
              {month === "Feb" ? (
                <span className="rounded-full border-blue-400 border-2 bg-blue-100/50 hover:bg-blue-100 hover:text-blue-600 text-blue-400 px-3 py-2">
                  {month}
                </span>
              ) : (
                <span className="px-3 py-2">{month}</span>
              )}
            </TableHead>
          ))}
        </div>

        <Table className="mb-5">
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="w-24 font-semibold">Room No.</TableHead>
              {days.map((day, index) => (
                <TableHead key={index}>
                  {day === 10 ? (
                    <span className="rounded-full border-blue-400 border-2 bg-blue-100/50 hover:bg-blue-100 hover:text-blue-600 text-blue-400 px-3 py-2">
                      {day}
                    </span>
                  ) : (
                    <span className="px-3 py-2">{day}</span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <div className="flex justify-start">
              <Button
                variant={showESR ? "ghost" : "link"}
                onClick={() => setShowESR(!showESR)}
              >
                ESR{" "}
                <CaretSortIcon
                  className={`size-4 transform transition ease-in-out duration-300 ${
                    showESR ? "-rotate-180" : "rotate-180"
                  }`}
                />
              </Button>
            </div>

            {showESR && (
              <>
                {bookings.map((booking, rowIndex) => (
                  <>
                    <TableRow className="border-none">
                      <TableCell></TableCell>
                    </TableRow>
                    <TableRow key={rowIndex} className="border-none">
                      <TableCell className="w-24 font-semibold">
                        {100 + rowIndex}
                      </TableCell>

                      {days.map((_, colIndex) => {
                        const isBookingCell =
                          colIndex >= booking.start &&
                          colIndex < booking.start + booking.colSpan;

                        const isSelectedCell =
                          startCell &&
                          endCell &&
                          startCell.rowIndex === rowIndex &&
                          startCell.rowIndex === endCell.rowIndex &&
                          colIndex >=
                            Math.min(startCell.colIndex, endCell.colIndex) &&
                          colIndex <=
                            Math.max(startCell.colIndex, endCell.colIndex);

                        if (isBookingCell && colIndex === booking.start) {
                          return (
                            <TableCell
                              key={colIndex}
                              colSpan={booking.colSpan}
                              className={` py-3 rounded-xl cursor-pointer ${
                                booking.color === "orange" &&
                                "bg-orange-100/50 text-orange-400"
                              } ${
                                booking.color === "red" &&
                                "bg-red-100/50 text-red-400"
                              } ${
                                booking.color === "blue" &&
                                "bg-blue-100/50 text-blue-400"
                              } ${
                                booking.color === "green" &&
                                "bg-green-100/50 text-green-400"
                              }`}
                            >
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <div>{booking.name}</div>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-[450px]">
                                  <HoverContent />
                                </HoverCardContent>
                              </HoverCard>
                            </TableCell>
                          );
                        } else if (!isBookingCell) {
                          return (
                            <TableCell
                              key={colIndex}
                              onMouseDown={() =>
                                handleMouseDown(rowIndex, colIndex)
                              }
                              onMouseUp={() =>
                                handleMouseUp(rowIndex, colIndex)
                              }
                              onMouseOver={() =>
                                handleMouseOver(rowIndex, colIndex)
                              }
                              className={
                                isSelectedCell
                                  ? "bg-green-100 py-3 rounded-xl cursor-move"
                                  : "bg-neutral-50 py-3 rounded-xl ring-1 ring-neutral-200"
                              }
                            />
                          );
                        }
                        return null;
                      })}
                    </TableRow>
                  </>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
