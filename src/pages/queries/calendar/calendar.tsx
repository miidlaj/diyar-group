import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  format,
  startOfDay,
  parseISO,
  isWithinInterval,
  differenceInDays,
  subDays,
} from "date-fns";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RoomEvent {
  room: number;
  events: Event[];
}

interface Event {
  name: string;
  startDate: string;
  endDate: string;
  bookingNumber: number;
  details: {
    reserveNo: string;
    arrival: string;
    company: string;
    rateCode: string;
    roomRate: number;
    bookingDate: string;
    adult: number;
    totCharges: number;
    departure: string;
    plan: string;
    child: number;
    paid: number;
  } | null;
  maintenance: boolean;
}
const initialRooms: RoomEvent[] = [
  {
    room: 101,
    events: [
      {
        name: "Management Block",
        startDate: "2024-05-04",
        endDate: "2024-05-06",
        bookingNumber: 1,
        details: {
          reserveNo: "R1234",
          arrival: "2024-05-04",
          company: "ABC Corp",
          rateCode: "R123",
          roomRate: 100,
          bookingDate: "2024-04-30",
          adult: 2,
          totCharges: 200,
          departure: "2024-05-06",
          plan: "Standard",
          child: 0,
          paid: 200,
        },
        maintenance: false,
      },
      {
        name: "Team Meeting",
        startDate: "2024-05-10",
        endDate: "2024-05-14",
        bookingNumber: 2,
        details: {
          reserveNo: "R5678",
          arrival: "2024-05-10",
          company: "XYZ Inc",
          rateCode: "R456",
          roomRate: 120,
          bookingDate: "2024-05-08",
          adult: 5,
          totCharges: 600,
          departure: "2024-05-14",
          plan: "Executive",
          child: 3,
          paid: 600,
        },
        maintenance: false,
      },
      {
        name: "Maintenance",
        startDate: "2024-05-15",
        endDate: "2024-05-17",
        bookingNumber: 3,
        details: null,
        maintenance: true,
      },
    ],
  },
  {
    room: 102,
    events: [
      {
        name: "Conference",
        startDate: "2024-05-04",
        endDate: "2024-05-07",
        bookingNumber: 7,
        details: {
          reserveNo: "R3456",
          arrival: "2024-05-04",
          company: "LMN Corp",
          rateCode: "R345",
          roomRate: 130,
          bookingDate: "2024-05-02",
          adult: 4,
          totCharges: 520,
          departure: "2024-05-06",
          plan: "Standard",
          child: 1,
          paid: 520,
        },
        maintenance: false,
      },
      {
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
      },
      {
        name: "Maintenance",
        startDate: "2024-05-16",
        endDate: "2024-05-18",
        bookingNumber: 9,
        details: null,
        maintenance: true,
      },
    ],
  },
  {
    room: 103,
    events: [
      {
        name: "Maintenance",
        startDate: "2024-05-10",
        endDate: "2024-05-11",
        bookingNumber: 10,
        details: null,
        maintenance: true,
      },
    ],
  },
  {
    room: 104,
    events: [
      {
        name: "Maintenance",
        startDate: "2024-05-17",
        endDate: "2024-05-18",
        bookingNumber: 11,
        details: null,
        maintenance: true,
      },
    ],
  },
  {
    room: 105,
    events: [
      {
        name: "Maintenance",
        startDate: "2024-05-04",
        endDate: "2024-05-06",
        bookingNumber: 12,
        details: null,
        maintenance: true,
      },
    ],
  },
  {
    room: 106,
    events: [
      {
        name: "Maintenance",
        startDate: "2024-05-15",
        endDate: "2024-05-13",
        bookingNumber: 13,
        details: null,
        maintenance: true,
      },
    ],
  },
  // Add more empty rooms as needed
];

export default function Calendar() {
  const generateCurrentDateArray = () => {
    const baseDate = new Date();
    const dates = [];
    for (let i = 0; i < 15; i++) {
      const date = subDays(baseDate, i);
      dates.unshift(startOfDay(date));
    }
    return dates;
  };

  React.useEffect(() => {
    const generated = generateCurrentDateArray();
    setDates(generated);
  }, []);

  const [dates, setDates] = useState<Date[]>([]);

  const renderHeader = () => {
    return (
      <TableRow>
        <TableHead className="text-xs">Room No</TableHead>
        {dates.map((date, index) => (
          <TableHead className="text-xs" key={index}>
            {format(date, "dd MMM EEE")}
          </TableHead>
        ))}
      </TableRow>
    );
  };

  const [showDialog, setShowDialog] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const renderRows = (): JSX.Element[] => {
    const bookings_added: number[] = [];
    return initialRooms.map((roomEvent) => {
      const { room, events } = roomEvent;

      return (
        <TableRow key={room}>
          <TableCell className="font-bold">{room}</TableCell>
          {dates.map((date, index) => {
            const parsedDate = startOfDay(date);
            const dayEvents = events.filter((event) => {
              const eventStart = startOfDay(parseISO(event.startDate));
              const eventEnd = startOfDay(parseISO(event.endDate));

              return isWithinInterval(parsedDate, {
                start: eventStart,
                end: eventEnd,
              });
            });

            const event = dayEvents[0];
            let colSpan = 1;

            if (event && bookings_added.includes(event.bookingNumber))
              return null;
            if (event) {
              const eventStart = startOfDay(parseISO(event.startDate));
              const eventEnd = startOfDay(parseISO(event.endDate));
              colSpan = differenceInDays(eventEnd, eventStart) + 1;
              bookings_added.push(event.bookingNumber);
            }

            return (
              <TableCell
                key={index}
                colSpan={colSpan}
                className={`relative p-0`}
              >
                {dayEvents.map((event, eventIndex) => (
                  <HoverCard key={eventIndex}>
                    <HoverCardTrigger asChild>
                      <div
                        onClick={() => {
                          if (!event.maintenance) {
                            setShowDialog(true);
                            setSelectedRoom(room.toString());
                          }
                        }}
                        className={`text-white rounded p-1 text-sm whitespace-nowrap text-ellipsis overflow-hidden  ${
                          dayEvents[0].maintenance
                            ? "bg-red-600"
                            : "bg-purple-400"
                        }`}
                      >
                        <span className="event-name">{event.name}</span>
                      </div>
                    </HoverCardTrigger>

                    {!event.maintenance ? (
                      <HoverCardContent className="w-[450px]">
                        <div className="mx-auto ">
                          <div className="font-bold text-sm mb-4 border-b pb-2">
                            {event.name}
                          </div>

                          <div className="grid grid-cols-2 gap-x-8 text-xs">
                            <div className="float-left">
                              <table>
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
                              </table>
                            </div>

                            <div className="float-right">
                              <table className="data">
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
                                    <b>Tot Charges:</b>
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
                              </table>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    ) : (
                      <HoverCardContent className="">
                        <div className="mx-auto ">
                          <div className="font-bold text-sm">{event.name}</div>
                        </div>
                      </HoverCardContent>
                    )}
                  </HoverCard>
                ))}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };

  return (
    <div className="mx-auto">
      <div className="wrapper bg-white rounded shadow w-full">
        <div className="header flex justify-between border-b p-2">
          <span className="text-lg font-bold">2024 May</span>
        </div>

        <ScrollArea className="whitespace-nowrap rounded-md border h-[80vh]">
          <Table className="">
            <TableCaption>Room Schedule</TableCaption>
            <TableHeader>{renderHeader()}</TableHeader>
            <TableBody>
              {renderRows()}
              {renderRows()}
            </TableBody>
          </Table>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="w-80">
            <DialogHeader>
              <DialogTitle className="text-center w-full">
                Room {selectedRoom}
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col justify-center items-center gap-4">
              <Button variant="link">Ledger</Button>
              <Button variant="link">Guest Profile</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
