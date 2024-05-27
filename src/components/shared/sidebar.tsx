import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  CalendarCheck,
  CheckCircle,
  ChevronUp,
  Hotel,
  ListChecks,
  Tally3,
  X,
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
      {
        name: "Reservation Check In",
        link: "/check-in",
      },

      {
        name: "Reservation Check Out",
        link: "/check-out",
      },

      {
        name: "Bookings",
        link: "/bookings",
      },

      {
        name: "Tentative Bookings",
        link: "/bookings/tentative",
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

  const [collapsed, setCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="min-h-screen w-full flex">
      <div
        className={`border-r bg-muted/40 ${
          collapsed
            ? "w-[70px] transition-all ease-in-out duration-300 transform"
            : "w-[280px] transition-all ease-in-out duration-300 transform"
        }`}
      >
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              to="/"
              className={`flex items-center gap-2 font-semibold ${
                collapsed ? "scale-0 hidden" : "scale-100"
              }`}
            >
              <Hotel className="h-6 w-6" />
              <span className={`${collapsed && "hidden"}`}>Diyar Group</span>
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto"
              onClick={toggleSidebar}
            >
              {collapsed ? (
                <Tally3 className="h-4 w-4 rotate-90" />
              ) : (
                <X className="h-4 w-4" />
              )}

              <span className="sr-only">Toggle</span>
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
                      if (collapsed) {
                        setCollapsed(false);
                        return;
                      }
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
                      <span className={`${collapsed && "hidden"}`}>
                        {item.name}
                      </span>
                    </div>

                    <div
                      className={`flex justify-end items-center ${
                        collapsed && "hidden"
                      }`}
                    >
                      <ChevronUp
                        className={`h-4 w-4 transition transform duration-300 ease-in-out ${
                          dropDown.includes(item.name) && "rotate-180"
                        }`}
                      />
                    </div>
                  </div>

                  {dropDown.includes(item.name) && (
                    <div
                      className={`flex flex-col pl-3 ${collapsed && "hidden"}`}
                    >
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

      <main className="w-full">{children}</main>
    </div>
  );
};

export default SideBar;
