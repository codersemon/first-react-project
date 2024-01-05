// dependencies
import { useContext } from "react";
import Modal from "../modal/Modal";
import "./RegistrationModal.scss";
import LoginRegisterContext from "../../context/LoginRegisterContext";

const RegistrationModal = ({ control }) => {
  // login modal context
  const { setLogin } = useContext(LoginRegisterContext);

  // handle login modal
  const handleLoginModal = () => {
    control((prevState) => !prevState);
    setLogin((prevState) => !prevState);
  };

  return (
    <>
      <Modal className="reg-modal" title="Create an account" control={control}>
        <form className="reg-form">
          <div className="h-input">
            <input type="text" name="fname" placeholder="First name..." />
            <input type="text" name="lname" placeholder="Last name..." />
          </div>
          <input type="text" name="username" placeholder="Email address..." />
          <input type="password" name="password" placeholder="Password..." />
          <input type="submit" value="Register" className="login-btn" />
        </form>

        <div className="account-msg">
          <p>Have an account</p>
          <button className="create-account-btn" onClick={handleLoginModal}>
            Login Now
          </button>
        </div>
      </Modal>
    </>
  );
};

export default RegistrationModal;
