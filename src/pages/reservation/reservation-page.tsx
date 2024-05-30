import { Route, Routes } from "react-router-dom";
import ReservationList from "./list/page";
import TentativeList from "./list/tentative-list";
import ReservationCheckIn from "./check-in/check-in-page";
import ReservationCheckOutPage from "./check-out/check-out-page";
import NewReservation from "./new/new-reservation-page";
import NewReservationPage from "./new/new-reservation";

export default function ReservationPage() {
  return (
    <>
      <Routes>
        <Route path="/neww" element={<NewReservation />} />
        <Route path="/new" element={<NewReservationPage />} />

        <Route path="/bookings" element={<ReservationList />} />
        <Route path="/check-in" element={<ReservationCheckIn />} />
        <Route path="/check-out" element={<ReservationCheckOutPage />} />

        <Route path="/bookings/tentative" element={<TentativeList />} />
      </Routes>
    </>
  );
}
