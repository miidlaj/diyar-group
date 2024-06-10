import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const rooms = [
  {
    value: "807",
    label: "807- Nathan",
  },
  {
    value: "115",
    label: "115 - Jamal",
  },
  {
    value: "116",
    label: "116 - Alesandro",
  },
  {
    value: "811",
    label: "811 - Hasim",
  },
  {
    value: "113",
    label: "113 - Ho",
  },
  {
    value: "101,105",
    label: "101,105 - Dinh",
  },
  {
    value: "101",
    label: "101 - mmmmm",
  },
];

export default function RoomSearch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? rooms.find((room) => room.value === value)?.label
            : "Select Room..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search room..." className="h-9" />
          <CommandList>
            <CommandEmpty>No room found.</CommandEmpty>
            <CommandGroup>
              {rooms.map((room) => (
                <CommandItem
                  key={room.value}
                  value={room.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {room.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === room.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
