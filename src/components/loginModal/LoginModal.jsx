// dependencies
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import "./LoginModal.scss";
import { useContext } from "react";
import LoginRegisterContext from "../../context/LoginRegisterContext";

const LoginModal = ({ control }) => {
  // Registration Modal context
  const { setRegister } = useContext(LoginRegisterContext);

  // handle create account modal
  const handleCreateModal = () => {
    control((prevState) => !prevState);
    setRegister((prevState) => !prevState);
  };

  return (
    <>
      <Modal className="login-modal" title="Login" control={control}>
        <form className="login-form">
          <input type="text" name="username" placeholder="Email address..." />
          <input type="password" name="password" placeholder="Password..." />
          <input type="submit" value="Log in" className="login-btn" />
        </form>
        <p className="forgot-msg">
          Forgot password? <Link>Reset Now</Link>
        </p>

        <div className="no-account-msg">
          <p>Have no account?</p>
          <button className="create-account-btn" onClick={handleCreateModal}>
            Create account
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
