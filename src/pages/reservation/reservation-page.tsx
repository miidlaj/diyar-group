import { Route, Routes } from "react-router-dom";
import NewReservationPage from "./new/new-reservation-page";
import ReservationCheckIn from "./reservation-checkin/page";
import ConfirmTentativePage from "./new/confirm";
import ConfirmPage from "./new/confirm";

export default function ReservationPage() {
  return (
    <>
      <Routes>
        <Route path="/new" element={<NewReservationPage />} />
        <Route path="/confirm-tentative" element={<ConfirmTentativePage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/check-in" element={<ReservationCheckIn />} />
      </Routes>
    </>
  );
}
