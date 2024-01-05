// dependencies
import PageTitle from "../../components/pageTitle/PageTitle";
import "./Contact.scss";
import contactImg from "../../assets/contact-img.png";
import {useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'

const Contact = () => {
  // create state for input handle
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    sub: "",
    msg: "",
    district: "",
    gender: "",
  });

  // handle input value
  const handleInput = (e) => {
    // set new value
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    // prevent default submit action
    e.preventDefault();

    // data validation
    if (
      !input.fname ||
      !input.lname ||
      !input.email ||
      !input.district ||
      !input.gender ||
      !input.sub ||
      !input.msg
    ) {
      toast.error("All fields required", {theme: "colored"});

      return;
    } else {
      Swal.fire({
        title: "Do you want to submit the form?",
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Submit",
        // denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log(input);
          Swal.fire({
            position: "center",
            icon: "success",
            text: "Form Submitted Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }

  };

  // District Array
  const district = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      <PageTitle title="Contact Us" />

      <section className="contac-form-section">
        <div className="container">
          <div className="form-wrap">
            <div className="contact-left">
              <img src={contactImg} />
            </div>

            <div className="contact-right">
              <h3>Leave A Message For Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={input.fname}
                  onChange={handleInput}
                />

                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={input.lname}
                  onChange={handleInput}
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={input.email}
                  onChange={handleInput}
                />

                <select
                  name="district"
                  value={input.district}
                  onChange={handleInput}
                >
                  <option value="">--Select--</option>
                  {district.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>

                <div className="gender">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleInput}
                    />{" "}
                    Male
                  </label>{" "}
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleInput}
                    />{" "}
                    Female
                  </label>{" "}
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      onChange={handleInput}
                    />{" "}
                    Other
                  </label>
                </div>

                <input
                  type="text"
                  name="sub"
                  placeholder="Subject"
                  value={input.sub}
                  onChange={handleInput}
                />

                <textarea
                  name="msg"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  value={input.msg}
                  onChange={handleInput}
                ></textarea>

                <input type="submit" value="Send Message" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
