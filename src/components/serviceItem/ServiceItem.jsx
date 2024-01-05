import Button from "../button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import "./ServiceItem.scss";

const ServiceItem = ({ img, title, subTitle, link }) => {
  return (
    <div className="service-content">
      <div className="thumb">
        <img src={img} alt="" />
      </div>

      <div className="content">
        <div className="item-sub-title">{subTitle}</div>
        <p className="item-title">{title}</p>
        <Button to={link}>
          Learn More <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};

export default ServiceItem;
