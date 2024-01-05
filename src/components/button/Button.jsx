// dependencies 
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({to, type = 'primary', children}) => {
  return (
    <>
   <Link to={to} className={`btn btn-${type}` }>{children}</Link>
    </>
  )
}

export default Button