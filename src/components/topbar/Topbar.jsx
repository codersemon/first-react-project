// dependencies
import { useContext } from "react";
import "./Topbar.scss";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import LoginModal from "../loginModal/LoginModal";
import RegistrationModal from "../registrationModal/RegistrationModal";
import LoginRegisterContext from "../../context/LoginRegisterContext";


const Topbar = () => {
  // login & Registration Modal context 
  const {login, setLogin, register, setRegister} = useContext(LoginRegisterContext);


  return (
    <>
      {login && <LoginModal control={setLogin} />}
      {register && <RegistrationModal control={setRegister} />}


      <section className="topbar">
        <div className="container">
          <div className="topbar-left">
            <ul>
              <li>
                {" "}
                <FaRegEnvelope /> contact@domain.com
              </li>
              <li>
                <FaPhoneAlt /> +8801712301231
              </li>
            </ul>
          </div>

          <div className="topbar-right">
            <ul>
              {/* {show login modal on click } */}
              <li onClick={() => setLogin((prevState) => !prevState)}>Login</li> 
              {/* show registration modal on click  */}
              <li onClick={() => setRegister((prevState => !prevState))}>Registration</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topbar;
