// dependencies 
import Button from "../button/Button";
import "./HomeBanner.scss";
import { FaArrowRight } from "react-icons/fa";
import bannerImg from "../../assets/hero-banner.png";

const HomeBanner = () => {
  return (
    <section className="home-banner" style={{ background: `url(${bannerImg})` }}>
        <div className="container">
        <h4>TRUST US FOR WEB CREATION</h4>
        <h1>Lets Create Your <span>Dream Website</span> With Our Professionals</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

        <Button>OUR SERVICES</Button>
        <Button type="transparent">Our PACKAGES <FaArrowRight /></Button>

        </div>
    </section>
  )
}

export default HomeBanner