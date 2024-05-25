import { Route, Routes } from "react-router-dom";
import NewReservationPage from "./new/new-reservation-page";
import ReservationList from "./list/page";
import TentativeList from "./list/tentative-list";
import ReservationCheckIn from "./check-in/page";

export default function ReservationPage() {
  return (
    <>
      <Routes>
        <Route path="/new" element={<NewReservationPage />} />

        <Route path="/bookings" element={<ReservationList />} />
        <Route path="/check-in" element={<ReservationCheckIn />} />
        <Route path="/bookings/tentative" element={<TentativeList />} />
      </Routes>
    </>
  );
}
