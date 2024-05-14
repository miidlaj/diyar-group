import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login-page";
import ReservationPage from "./pages/reservation/reservation-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reservation/*" element={<ReservationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
