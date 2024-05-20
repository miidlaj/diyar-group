import { Route, Routes } from "react-router-dom";
import Calendar from "./calendar/calendar";
import TodayArrivalsPage from "./today-arrivals/page";

export default function QueriesPage() {
  return (
    <>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/today-arrivals" element={<TodayArrivalsPage />} />
      </Routes>
    </>
  );
}
