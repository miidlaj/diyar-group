import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Bell,
  CalendarCheck,
  CheckCircle,
  ChevronUp,
  Hotel,
  ListChecks,
} from "lucide-react";

const links = [
  {
    name: "Reservation",
    icon: CalendarCheck,
    link: "/reservation",
    sub: [
      {
        name: "Reservation",
        link: "/new",
      },
    ],
  },

  {
    name: "Queries",
    icon: ListChecks,
    link: "/queries",
    sub: [
      {
        name: "Calendar",
        link: "/calendar",
      },
      {
        name: "Today Arrivals",
        link: "/today-arrivals",
      },
    ],
  },
];
const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [dropDown, setDropDown] = React.useState<string[]>([]);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Hotel className="h-6 w-6" />
              <span className="">Diyar Group</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {links.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer"
                    onClick={() => {
                      if (dropDown.includes(item.name)) {
                        setDropDown((prev) =>
                          prev.filter((x) => x !== item.name)
                        );
                      } else {
                        setDropDown((prev) => prev.concat(item.name));
                      }
                    }}
                  >
                    <div className="flex gap-3 items-center">
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </div>

                    <div className=" flex justify-end items-center">
                      <ChevronUp className="h-4 w-4" />
                    </div>
                  </div>

                  {dropDown.includes(item.name) && (
                    <div className="flex flex-col pl-3">
                      {item.sub.map((child, index) => (
                        <Link
                          key={index}
                          to={item.link + child.link}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                          <CheckCircle className="h-3 w-3" />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default SideBar;
