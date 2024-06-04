import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";

export default function FrontDeskPage() {
  return (
    <>
      <div className="mx-10 space-y-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button className="bg-orange-100/50 text-orange-400 hover:bg-orange-100">
              Due in
            </Button>

            <Button className="bg-blue-100/50 text-blue-400 hover:bg-blue-100">
              Checked out
            </Button>

            <Button className="bg-red-100/50 text-red-400 hover:bg-red-100">
              Due out
            </Button>

            <Button className="bg-green-100/50 text-green-400 hover:bg-green-100">
              Checked in
            </Button>
          </div>

          <div className="flex gap-3 items-center">

            <div className="relative text-muted-foreground">
                <Input placeholder="Search by room number" className="pl-8 w-64"/>

                <Search   style={{
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                }} className="absolute left-2 h-4 w-4" />
            </div>

<Button className="font-normal">Create booking</Button>
          </div>
        </div>
        <div className="flex justify-between text-sm border-b">
          {[
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
          ].map((item, index) => (
            <TableHead key={index}>
              {item === "Feb" ? (
                <span className="rounded-full border-blue-400 border-2 bg-blue-100/50 hover:bg-blue-100 hover:text-blue-600 text-blue-400 px-3 py-2">
                  {item}
                </span>
              ) : (
                <span className="px-3 py-2">{item}</span>
              )}
            </TableHead>
          ))}
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                (item: number, index) => (
                  <TableHead key={index}>
                    {item === 10 ? (
                      <span className="rounded-full border-blue-400 border-2 bg-blue-100/50 hover:bg-blue-100 hover:text-blue-600 text-blue-400 px-3 py-2">
                        {item}
                      </span>
                    ) : (
                      <span className="px-3 py-2">{item}</span>
                    )}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-none">
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell></TableCell>
              <TableCell
                className="bg-orange-100/50 text-orange-400 py-3 rounded-xl"
                colSpan={3}
              >
                Lewis
              </TableCell>

              <TableCell colSpan={3}></TableCell>

              <TableCell
                className="bg-red-100/50 text-red-400 py-3 rounded-xl"
                colSpan={3}
              >
                Andrew
              </TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell></TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell colSpan={2}></TableCell>
              <TableCell
                className="bg-blue-100/50 text-blue-400 py-3 rounded-xl"
                colSpan={3}
              >
                Mark
              </TableCell>

              <TableCell colSpan={7}></TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell></TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell
                className="bg-blue-100/50 text-blue-400 py-3 rounded-xl"
                colSpan={3}
              >
                Tate
              </TableCell>

              <TableCell colSpan={4}></TableCell>

              <TableCell
                className="bg-blue-100/50 text-blue-400 py-3 rounded-xl"
                colSpan={3}
              >
                Andrew
              </TableCell>

              <TableCell colSpan={2}></TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell></TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell colSpan={3}></TableCell>
              <TableCell
                className="bg-orange-100/50 text-orange-400 py-3 rounded-xl"
                colSpan={3}
              >
                Manson
              </TableCell>

              <TableCell colSpan={6}></TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell></TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell></TableCell>
              <TableCell
                className="bg-orange-100/50 text-orange-400 py-3 rounded-xl"
                colSpan={3}
              >
                Bruce
              </TableCell>

              <TableCell colSpan={3}></TableCell>

              <TableCell
                className="bg-green-100/50 text-green-400 py-3 rounded-xl"
                colSpan={3}
              >
                Mave
              </TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
