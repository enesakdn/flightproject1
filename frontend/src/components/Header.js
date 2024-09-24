import React from "react";
import { Link } from "react-router-dom"; // Link ekledik
import "../images/pngwing.com.jpg";
import "../images/CV-İMAGE.jpg";
import "../styles/Responsive.css";
import "../styles/Header.css"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      <div className="plane-icon-container">
        <img
          src={require("../images/pngwing.com.jpg")}
          alt="Plane Icon"
          className="plane-icon"
        />
        <h2>PLANE SCAPE</h2>
      </div>
      <div className="header-a">
        <nav className="header-s">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="20px"
            >
              <path
                d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                fill="#00007f"
              />
            </svg>
            <a>Deals</a>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 512 512"
              color="white"
            >
              <path
                d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                fill="#00007f"
              />
            </svg>
            <a>Discover</a>
          </div>
        </nav>
        <div className="user">
          {/* Kullanıcı ikonuna tıklandığında myflights sayfasına yönlendirme */}
          <Link to="/myflights">
            <img
              src={require("../images/CV-İMAGE.jpg")}
              alt="User Icon"
              className="user-icon"
            />
            <span>Enes Akdoğan</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
