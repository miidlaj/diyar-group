import { Route, Routes } from "react-router-dom";
import NewReservationPage from "./new/new-reservation-page";

export default function ReservationPage() {
  return (
    <>
     
          <Routes>
            <Route path="/new" element={<NewReservationPage />} />
          </Routes>
       
    </>
  );
}
