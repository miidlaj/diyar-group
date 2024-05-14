import { Bell, Search } from "lucide-react";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-7 px-0 box-border max-w-full">
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 box-border max-w-full gap-[20px] mq750:flex-wrap">
        <div className="w-[400px] rounded bg-grey-grey-50 box-border flex flex-row items-center justify-center py-1.5 px-[15px] gap-[8px] max-w-full border-[1px] border-solid border-dashboard">
          <Search className="h-6 w-6 relative text-gray-400 overflow-hidden shrink-0 min-h-[24px]" />
          <input
            className="w-[calc(100%_-_54px)] [border:none] [outline:none] font-overline-medium text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-grey-grey-400 text-left inline-block min-w-[202px] max-w-[calc(100%_-_32px)] p-0"
            placeholder="Search for rooms and offers"
            type="text"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-5">
          <div className="flex flex-row items-start justify-start p-2">
            <Bell className="h-6 w-6 relative text-gray-400 overflow-hidden shrink-0" />
          </div>
          <img
            className="h-10 w-10 relative object-cover min-h-[40px] rounded-full"
            loading="lazy"
            alt=""
            src="https://avatars.githubusercontent.com/u/124599?v=4"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
