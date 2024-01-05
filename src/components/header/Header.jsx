// dependencies
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import Button from "../button/Button";
import { checkURL } from "../../utils/utils";
import { useContext, useState } from "react";
import AdminNotificationContext from "../../context/AdminNotificationContext";
import QuoteForm from "../quoteForm/QuoteForm";
import Modal from "../modal/Modal";

const Header = () => {
  // current location identify
  const location = useLocation();

  // notification counter
  const { counter } = useContext(AdminNotificationContext);

  // quote state
  const [quote, setQuote] = useState(false);


  return (
    <>
    {/* Quotation modal  */}
      {quote && <Modal control={setQuote} title="Create your quotation">
        <QuoteForm />
      </Modal>}

      <header className="primary-header">
        <div className="container">
          <div className="header-left">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-middle">
            <nav>
              <ul>
                <li>
                  <Link
                    to="/"
                    className={location.pathname == "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={location.pathname == "/about" ? "active" : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={location.pathname == "/contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    className={
                      checkURL(location.pathname, "admin") ? "active" : ""
                    }
                  >
                    Admin
                  </Link>{" "}
                  {counter > 0 ? (
                    <span className="n-counter">{counter}</span>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <span className="btn btn-primary quote-btn" onClick={() => setQuote(true)}>GET A QUOTE</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
