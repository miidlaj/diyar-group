import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CloudDownload, EllipsisVertical, Filter, Plus, Settings } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ReservationCheckIn() {
  const bookings = [
    {
      referenceNo: "12345",
      companyName: "ABC Corp",
      agentName: "John Doe",
      checkIn: "2024-05-01",
      checkOut: "2024-05-05",
      optionalDate: "2024-05-06",
      totalAmount: 1000,
      balanceAmount: 200,
      advance: 800,
      status: "Pending",
    },
    {
      referenceNo: "12346",
      companyName: "XYZ Ltd",
      agentName: "Jane Smith",
      checkIn: "2024-06-01",
      checkOut: "2024-06-05",
      optionalDate: "2024-06-06",
      totalAmount: 1200,
      balanceAmount: 300,
      advance: 900,
      status: "Approved",
    },
    {
      referenceNo: "12347",
      companyName: "Acme Inc",
      agentName: "Jim Brown",
      checkIn: "2024-07-01",
      checkOut: "2024-07-05",
      optionalDate: "2024-07-06",
      totalAmount: 1500,
      balanceAmount: 500,
      advance: 1000,
      status: "OD Due",
    },
    {
      referenceNo: "12345",
      companyName: "ABC Corp",
      agentName: "John Doe",
      checkIn: "2024-05-01",
      checkOut: "2024-05-05",
      optionalDate: "2024-05-06",
      totalAmount: 1000,
      balanceAmount: 200,
      advance: 800,
      status: "Rejected",
    },
  ];

  return (
    <>
      <div className="mx-10">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h1 className="text-lg font-bold flex items-center gap-2">
              Booking List{" "}
              <Badge className="bg-purple-100 text-purple-500 font-mono">
                162
              </Badge>
            </h1>
            <p className="text-lg">Total 16 Check in Today</p>
          </div>

          <div className="flex gap-2">
            <Button size="icon" variant="outline">
              <Plus className="h-4 w-4" />
            </Button>

            <Button size="icon" variant="outline">
              <CloudDownload className="h-4 w-4" />
            </Button>

            <Button variant="outline" className="flex gap-2 items-center">
              <Settings className="h-4 w-4" /> Settings
            </Button>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex gap-2">
            <Button size="icon" variant="outline">
              <CloudDownload className="h-5 w-5" />
            </Button>

            <Button variant="outline" className="flex gap-2 items-center">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              {[
                "Reference No.",
                "Company Name",
                "Agent Name",
                "Check in",
                "Check out",
                "Optional Date",
                "Total amount",
                "Balance Amount",
                "Advance",
                "Status",
                "",
              ].map((item, index) => (
                <TableHead key={index}>{item}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((item) => {
              let bg = "";
              let text = "";
              switch (item.status) {
                case "Rejected":
                  bg = "bg-red-100";
                  text = "text-red-400";
                  break;
                case "OD Due":
                  bg = "bg-orange-100";
                  text = "text-orange-400";
                  break;
                case "Approved":
                  bg = "bg-green-100";
                  text = "text-green-400";
                  break;
                case "Pending":
                  bg = "bg-orange-100";
                  text = "text-orange-400";
                  break;

                default:
                  break;
              }
              return (
                <TableRow key={item.referenceNo}>
                  <TableCell className="font-medium">
                    {item.companyName}
                  </TableCell>
                  <TableCell>{item.companyName}</TableCell>
                  <TableCell>{item.agentName}</TableCell>
                  <TableCell>{item.checkIn}</TableCell>
                  <TableCell>{item.checkOut}</TableCell>
                  <TableCell>{item.optionalDate}</TableCell>
                  <TableCell>{item.totalAmount}</TableCell>
                  <TableCell>{item.balanceAmount}</TableCell>
                  <TableCell>{item.advance}</TableCell>
                  <TableCell>
                    <Badge className={bg + " " + text}>{item.status}</Badge>
                  </TableCell>

                  <TableCell>
                  <EllipsisVertical className="h-4 w-4" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
         
        </Table>
      </div>
    </>
  );
}
