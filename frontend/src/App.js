import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Router ekliyoruz
import FlightCard from "./components/FlightCard";
import "./App.css";
import Header from "./components/Header";
import FlightSearch from "./components/FlightSearch";
import Sidebar from "./components/Sidebar";
import MyFlights from "./components/MyFlights";

const App = () => {
  const [filters, setFilters] = useState({
    departureDate: "",
    returnDate: "",
    departureAirport: "",
    arrivalAirport: "",
  });

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          {/* MyFlights Route */}
          <Route path="/myflights" element={<MyFlights />} />
          {/* Ana Sayfa Route */}
          <Route
            path="/"
            element={
              <div className="main-container">
                <div className="left-container">
                  <FlightSearch onFilterChange={setFilters} />
                  <FlightCard filters={filters} />
                </div>
                <div className="right-container">
                  <Sidebar />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
