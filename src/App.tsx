import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login-page";
import ReservationPage from "./pages/reservation/reservation-page";
import QueriesPage from "./pages/queries/page";
import SideBar from "./components/shared/sidebar";
import Header from "./components/shared/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-[100vw] flex">
          <SideBar>
            <div>
              <Header />

              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/reservation/*" element={<ReservationPage />} />
                <Route path="/queries/*" element={<QueriesPage />} />
              </Routes>
            </div>
          </SideBar>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
