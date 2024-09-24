import React, { useState } from "react";
import "../styles/FlightSearch.css";
import "../styles/Responsive.css";
import "../images/pngwing.com.jpg";

const FlightSearch = ({ onFilterChange }) => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");

  const handleRoundTripClick = () => {
    setIsRoundTrip(true);
  };

  const handleOneWayClick = () => {
    setIsRoundTrip(false);
  };

  const handleFilterChange = () => {
    onFilterChange({
      departureDate,
      returnDate,
      departureAirport,
      arrivalAirport,
    });
  };

  return (
    <div className="flight-search">
      <div className="fs-t">
        <div className="icon-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            height="18px"
          >
            <path
              d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
              fill=" #4a0097"
            />
          </svg>
          <h2>BOOK YOUR FLIGHT</h2>
        </div>
        <div className="round-trip-toggle">
          <button
            className={`left-button ${isRoundTrip ? "active" : ""}`}
            onClick={handleRoundTripClick}
          >
            Round trip
          </button>
          <button
            className={`right-button ${!isRoundTrip ? "active" : ""}`}
            onClick={handleOneWayClick}
          >
            One way
          </button>
        </div>
      </div>

      <div className="search-bar">
        <div className="input-container-left">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18h18v2H3zm18.509-9.473a1.61 1.61 0 0 0-2.036-1.019L15 9 7 6 5 7l6 4-4 2-4-2-1 1 4 4 14.547-5.455a1.611 1.611 0 0 0 .962-2.018z"
              fill=" #4a0097"
            />
          </svg>
          <input
            type="text"
            placeholder="Departure Airport"
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}
          />
        </div>
        <div className="input-container-right">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.842 15.296a1.61 1.61 0 0 0 1.892-1.189v-.001a1.609 1.609 0 0 0-1.177-1.949l-4.576-1.133L9.825 4.21l-2.224-.225 2.931 6.589-4.449-.449-2.312-3.829-1.38.31 1.24 5.52 15.211 3.17zM3 18h18v2H3z "
              fill=" #4a0097"
            />
          </svg>
          <input
            type="text"
            placeholder="Arrival Airport"
            value={arrivalAirport}
            onChange={(e) => setArrivalAirport(e.target.value)}
          />
        </div>
        <div className="input-container-left">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 12h6v6h-6z" />
            <path
              d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.001 16H5V8h14l.001 12z"
              fill=" #4a0097"
            />
          </svg>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {isRoundTrip && (
          <div className="input-container-right">
            <svg
              height="24"
              viewBox="0 0 24 24 "
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 12h6v6h-6z" />
              <path
                d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.001 16H5V8h14l.001 12z"
                fill=" #4a0097"
              />
            </svg>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}
      </div>
      <button className="bottom-button" onClick={handleFilterChange}>
        Show flights
      </button>
    </div>
  );
};

export default FlightSearch;
