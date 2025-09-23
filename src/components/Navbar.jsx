import { useState } from "react";
import logo from "/images/Logo.png"; // dummy logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="d-flex align-items-center"
      style={{
        backgroundColor: "var(--primary-color)",
        height: "101.62px",
        width: "100%",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a href="#" className="navbar-brand m-0 p-0">
          <img src={logo} alt="logo" style={{ width: "226px" }} />
        </a>

        {/* Desktop Nav Links */}
        <ul className="d-none d-md-flex list-unstyled m-0">
          {["Services", "About Us", "Contact Us", "Careers"].map((item, i) => (
            <li
              key={i}
              style={{
                marginLeft: i === 0 ? "0px" : "28px",
                width: "92px",
                height: "17px",
              }}
            >
              <a href="#" className="text-white text-decoration-none fw-normal">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="d-md-none border-0 bg-transparent"
          onClick={() => setIsOpen(true)}
          style={{ width: "31px", height: "24px" }}
        >
          <div className="bg-white mb-1" style={{ height: "3px" }}></div>
          <div className="bg-white mb-1" style={{ height: "3px" }}></div>
          <div className="bg-white" style={{ height: "3px" }}></div>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column align-items-start p-4"
          style={{ zIndex: 1050 }}
        >
          {/* Close Button */}
          <button
            className="ms-auto border-0 bg-transparent fs-2"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {/* Vertical Nav Links */}
          <ul className="list-unstyled mt-4 w-100">
            {["Home", "Services", "About Us", "Contact Us", "Careers"].map(
              (item, i) => (
                <li
                  key={i}
                  className="mb-2"
                  style={{ width: "335px", height: "28px" }}
                >
                  <a
                    href="#"
                    className="d-block text-dark fw-bold text-decoration-none"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
