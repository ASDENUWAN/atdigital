import logo from "/images/Logo.png";
function Footer() {
  return (
    <footer
      className="text-white py-5"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="#" className="navbar-brand m-0 p-0">
              <img src={logo} alt="logo" style={{ width: "180px" }} />
            </a>
            <p>Your goal is our target. Not anything in between...</p>
          </div>
          <div className="col-md-4">
            <h6>Our Technologies</h6>
            <ul className="list-unstyled">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Our Services</h6>
            <ul className="list-unstyled">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
