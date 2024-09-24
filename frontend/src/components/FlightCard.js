import React, { useEffect, useState } from "react";
import "../styles/FlightCard.css"; // Adjust the path as necessary
import axios from "axios";

const FlightCard = ({ filters }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/flights");
        setFlights(response.data.flights);
      } catch (error) {
        console.error("Error fetching flight data", error);
      }
    };
    fetchFlights();
  }, []);

  const calculateDuration = (departureTime, arrivalTime) => {
    const durationMinutes = Math.round(
      Math.abs(arrivalTime - departureTime) / 60000
    ); // Convert milliseconds to minutes
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const handleBookFlight = async (flight) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/reservations",
        {
          flightName: flight.flightName,
          flightNumber: flight.flightNumber,
          bookingDate: new Date(), // Or use flight.bookingDate if needed
          aircraftType: flight.aircraftType,
          baggageClaim: flight.baggageClaim,
          actualLandingTime: flight.actualLandingTime,
          estimatedLandingTime: flight.estimatedLandingTime,
          expectedTimeOnBelt: flight.expectedTimeOnBelt,
          flightDirection: flight.flightDirection,
          isOperationalFlight: flight.isOperationalFlight,
          mainFlight: flight.mainFlight,
          prefixIATA: flight.prefixIATA,
          prefixICAO: flight.prefixICAO,
          airlineCode: flight.airlineCode,
          publicFlightState: flight.publicFlightState,
          route: flight.route,
          scheduleDateTime: flight.scheduleDateTime,
          scheduleDate: flight.scheduleDate,
          scheduleTime: flight.scheduleTime,
          serviceType: flight.serviceType,
          terminal: flight.terminal,
        }
      );
      console.log("Flight booked successfully:", response.data);
    } catch (error) {
      console.error("Error booking flight:", error);
    }
  };

  const filteredFlights = flights.filter((flight) => {
    const departureTime = new Date(flight.scheduleDateTime);
    const arrivalTime = new Date(flight.actualLandingTime);

    const departureDate = departureTime.toDateString();
    const returnDate = arrivalTime.toDateString();

    return (
      (!filters.departureDate ||
        departureDate === new Date(filters.departureDate).toDateString()) &&
      (!filters.returnDate ||
        returnDate === new Date(filters.returnDate).toDateString()) &&
      (!filters.departureAirport ||
        flight.prefixIATA.includes(filters.departureAirport)) &&
      (!filters.arrivalAirport ||
        flight.route.destinations.some((destination) =>
          destination.includes(filters.arrivalAirport)
        ))
    );
  });

  return (
    <div className="flight-info">
      {filteredFlights.map((flight) => {
        const departureTime = new Date(flight.scheduleDateTime);
        const arrivalTime = new Date(flight.actualLandingTime);
        const flightDuration = calculateDuration(departureTime, arrivalTime);

        return (
          <div className="flight-card" key={flight.id}>
            <div className="flight-header">
              <div className="flight-route">
                {flight.prefixIATA} - {flight.route.destinations.join(", ")}
              </div>
              <div className="flight-times">
                <div className="flight-departure">
                  <p
                    className="departure-text"
                    style={{ color: "#666", fontSize: "14px" }}
                  >
                    {" "}
                    <svg
                      viewBox="0 0 640 512"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                    >
                      <path d="M484.6 62C502.6 52.8 522.6 48 542.8 48H600.2C627.2 48 645.9 74.95 636.4 100.2C618.2 148.9 582.1 188.9 535.6 212.2L262.8 348.6C258.3 350.8 253.4 352 248.4 352H110.7C101.4 352 92.5 347.9 86.42 340.8L13.34 255.6C6.562 247.7 9.019 235.5 18.33 230.8L50.49 214.8C59.05 210.5 69.06 210.2 77.8 214.1L135.1 239.1L234.6 189.7L87.64 95.2C77.21 88.49 78.05 72.98 89.14 67.43L135 44.48C150.1 36.52 169.5 35.55 186.1 41.8L381 114.9L484.6 62zM0 480C0 462.3 14.33 448 32 448H608C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480z" />
                    </svg>{" "}
                    {"   "}
                    Departure
                  </p>

                  <h2 className="departure-text">
                    {departureTime.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h2>
                  <p className="departure-text">Airport: {flight.prefixIATA}</p>
                </div>
                <div className="line"></div>
                <div></div>
                <div className="flight-duration">
                  <div>{flight.flightNumber}</div>
                  <div>
                    <svg
                      viewBox="0 0 576 512"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M482.3 192C516.5 192 576 221 576 256C576 292 516.5 320 482.3 320H365.7L265.2 495.9C259.5 505.8 248.9 512 237.4 512H181.2C170.6 512 162.9 501.8 165.8 491.6L214.9 320H112L68.8 377.6C65.78 381.6 61.04 384 56 384H14.03C6.284 384 0 377.7 0 369.1C0 368.7 .1818 367.4 .5398 366.1L32 256L.5398 145.9C.1818 144.6 0 143.3 0 142C0 134.3 6.284 128 14.03 128H56C61.04 128 65.78 130.4 68.8 134.4L112 192H214.9L165.8 20.4C162.9 10.17 170.6 0 181.2 0H237.4C248.9 0 259.5 6.153 265.2 16.12L365.7 192H482.3z"
                        fill=" #4a0097"
                      />
                    </svg>
                  </div>

                  {flightDuration}
                </div>
                <div className="line"></div>
                <div className="flight-arrival">
                  <p
                    className="arrival-text"
                    style={{ color: "#666", fontSize: "14px" }}
                  >
                    {" "}
                    <svg
                      viewBox="0 0 640 512"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM44.81 205.66l88.74 80a62.607 62.607 0 0 0 25.47 13.93l287.6 78.35c26.48 7.21 54.56 8.72 81 1.36 29.67-8.27 43.44-21.21 47.25-35.71 3.83-14.5-1.73-32.71-23.37-54.96-19.28-19.82-44.35-32.79-70.83-40l-97.51-26.56L282.8 30.22c-1.51-5.81-5.95-10.35-11.66-11.91L206.05.58c-10.56-2.88-20.9 5.32-20.71 16.44l47.92 164.21-102.2-27.84-27.59-67.88c-1.93-4.89-6.01-8.57-11.02-9.93L52.72 64.75c-10.34-2.82-20.53 5-20.72 15.88l.23 101.78c.19 8.91 6.03 17.34 12.58 23.25z" />
                    </svg>
                    Arrival
                  </p>

                  <h2 className="arrival-text">
                    {arrivalTime.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h2>
                  <p className="arrival-text">
                    Airport: {flight.route.destinations.join(", ")}
                  </p>
                </div>
              </div>
            </div>
            <div className="book-flight-button-container">
              <button
                className="book-flight-button"
                onClick={() => handleBookFlight(flight)}
              >
                Book Flight
              </button>
              <a href="#" className="flight-details-link">
                Check the details
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlightCard;
