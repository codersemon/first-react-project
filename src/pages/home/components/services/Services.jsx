// dependencies
import { useState } from "react";
import ServiceItem from "../../../../components/serviceItem/ServiceItem";
import "./Services.scss";
import axios from "axios";
import { useEffect } from "react";

const Services = () => {
  // services state
  const [services, setServices] = useState([]);

  // get all services
  const getAllServices = async () => {
    const allServices = await axios.get("http://localhost:5000/services?_limit=3");

    setServices(allServices.data);
  };

  // get all service on load only
  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <section className="services-section">
      <div className="container">
        <p className="sub-title">WHAT WE DO</p>
        <h2 className="title">
          The Importance Of Self-Care And Setting Healthy Boundaries
        </h2>

        <div className="services-wrap">
          {services.map((item, index) => {
            return (
              <div key={index} className="service-item">
                <ServiceItem
                  img={item.img}
                  title={item.title}
                  subTitle={item.subTitle}
                  link={item.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
