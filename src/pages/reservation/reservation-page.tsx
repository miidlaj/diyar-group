import { Route, Routes } from "react-router-dom";
import NewReservationPage from "./new/new-reservation-page";
import ReservationCheckIn from "./reservation-checkin/page";

export default function ReservationPage() {
  return (
    <>
      <Routes>
        <Route path="/new" element={<NewReservationPage />} />
        
        <Route path="/check-in" element={<ReservationCheckIn />} />
      </Routes>
    </>
  );
}
