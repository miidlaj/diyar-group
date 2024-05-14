import { Route, Routes } from "react-router-dom";
import NewReservationPage from "./new/new-reservation-page";
import SideBar from "./sidebar";
import Header from "./header";

export default function ReservationPage() {
  return (
    <>
      <div className="max-w-[100vw] flex">
        <SideBar />

        <div className="">
          <Header />
          <Routes>
            <Route path="/new" element={<NewReservationPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
