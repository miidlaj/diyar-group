import { Route, Routes } from "react-router-dom";
import ReservationList from "./list/reservation-list";
import TentativeList from "./list/tentative-list";
import ReservationCheckOutPage from "./check-out/check-out-page";
import NewReservation from "./new/new-reservation-page";
import NewReservationPage from "./new/new-reservation";
import GuestPage from "./guests/GuestPage";
import RoomsPage from "./rooms/rooms-page";
import RateCodePage from "./rate-code/rate-code-page";
import PlanPage from "./plan/PlanPage";
import FrontDeskPage from "./front-desk/front-desk-page";
import ReservationCheckInDep from "./check-in/check-in-page-dep";
import CheckInPage from "./check-in/check-in-page";

export default function ReservationPage() {
  return (
    <>
      <Routes>
        <Route path="/neww" element={<NewReservation />} />
        <Route path="/new" element={<NewReservationPage />} />
        <Route path="/guests" element={<GuestPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rate-code" element={<RateCodePage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/front-desk" element={<FrontDeskPage />} />

        <Route path="/bookings" element={<ReservationList />} />
        <Route path="/check-in" element={<CheckInPage />} />
        <Route path="/check-inn" element={<ReservationCheckInDep />} />
        <Route path="/check-out" element={<ReservationCheckOutPage />} />

        <Route path="/bookings/tentative" element={<TentativeList />} />
      </Routes>
    </>
  );
}
