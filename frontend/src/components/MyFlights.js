import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../images/pngwing.com.jpg";
import "../styles/MyFlights.css";

const MyFlights = () => {
  const [myFlights, setMyFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyFlights = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/reservations"
        );
        console.log(response.data);
        setMyFlights(response.data || []);
      } catch (err) {
        console.error("Error fetching my flight data", err);
        setError("Could not fetch flight data.");
      } finally {
        setLoading(false);
      }
    };
    fetchMyFlights();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flight-container">
      <h2>My Flights</h2>
      {myFlights.length === 0 ? (
        <p>No flights booked yet.</p>
      ) : (
        myFlights.map((flight) => (
          <div className="flight-details" key={flight._id}>
            <img
              src="https://st4.depositphotos.com/8055500/31526/v/1600/depositphotos_315268376-stock-illustration-plane-icon-airport-and-airplane.jpg"
              alt="Flight"
              className="flight-thumbnail" // Add image class
            />
            <div className="flight-description">
              <h3>Flight Code: {flight.flightNumber}</h3>
              <p>
                Scheduled Time:{" "}
                {new Date(flight.scheduleDateTime).toLocaleTimeString()}
              </p>
              <p>
                Estimated Landing Time:{" "}
                {new Date(flight.estimatedLandingTime).toLocaleTimeString()}
              </p>
              <p>
                Actual Landing Time:{" "}
                {new Date(flight.actualLandingTime).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))
      )}
      <Link to="/" className="return-button">
        Back
      </Link>{" "}
    </div>
  );
};

export default MyFlights;
