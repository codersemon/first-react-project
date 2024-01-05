// dependencies
import "./Modal.scss";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, className, title, subtitle, footer, control }) => {
  return (
    <>
      <div className={`modal-wrapper ${className}`}>
        <div className="modal-container">
          <div className="modal-header">
            <div className="content">
              <h3 className="title">{title}</h3>
              {subtitle && <p className="subtitle">{subtitle}</p>}
            </div>
            <span className='close-btn' onClick={() => control(false)}><FaTimes /></span>
          </div>
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-modal-wrapperfooter">{footer}</div>}
        </div>
      </div>
    </>
  );
};

export default Modal;
