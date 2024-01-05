// dependencies
import { useState } from "react";
import "./QuoteForm.scss";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const QuoteForm = () => {


    // Variables for fields 
    const websiteTypes = [
        "Blog",
        "E-commerce",
        "Portfolio",
        "News",
        "Social Media",
        "Forum",
        "Educational",
        "Business",
        "Personal",
        "Travel"
      ];

      const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const ecommerceType = [
        "Multi vendor",
        "Booking / Appointment",
        "Dropshipping",
        "Digital Products",
        "Electronics Shop",
      ]

      const durationsArray = [
        "5 Days",
        "7 Days",
        "10 Days",
        "15 Days",
        "20 Days",
        "25 Days",
        "30 Days",
        "1.5 Months",
        "2 Months"
      ];

    //   form state 
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '', 
        websiteType: '',
        ecomType: '',
        pages: '', 
        duration: '',
    })

    // input change handle 
    const handleInput = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    }

    // handle submit 
    const handleSubmit = (e) =>{
        e.preventDefault();

        // validation 
        if(!input.fname || !input.lname || !input.email || !input.websiteType || !input.pages || !input.duration){
            toast.error('all input required');
        }else{
            Swal.fire({
                title: "Are you sure?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#0496ff",
                cancelButtonColor: "#eb2f06",
                confirmButtonText: "Yes, Submit"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Quote submitted",
                    text: "We have received your information. Will get you back shortly",
                    icon: "success"
                  });
                  console.log(input);
                }
              });
        }

    }


  return (
    <>
      <div className="quote-wrapper">
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="h-input">
            <input type="text" name="fname" placeholder="First name..."  value={input.fname} onChange={handleInput}/>
            <input type="text" name="lname" placeholder="Last name..."  value={input.lname} onChange={handleInput}/>
          </div>

          <input type="text" name="email" placeholder="Email address..."  value={input.email} onChange={handleInput}/>
          
          <select name="websiteType" value={input.websiteType} onChange={handleInput}>
            <option>-- Website type --</option>
            {websiteTypes.map((item, i) => {
                return <option value={item} key={i}>{item}</option>
            })}
          </select>

          {input.websiteType == 'E-commerce' && <select name="ecomType" value={input.ecomType} onChange={handleInput}>
            <option>-- eCommerce Type --</option>
            {ecommerceType.map((item, i) => {
                return <option value={item} key={i}>{item}</option>
            })}
          </select>}

          <select name="pages" value={input.pages} onChange={handleInput}>
            <option>-- Total pages --</option>
            {numbersArray.map((item, i) => {
                return <option value={item} key={i}>{item}</option>
            })}
          </select>

          <select name="duration" value={input.duration} onChange={handleInput}>
            <option>-- Expect delivery within --</option>
            {durationsArray.map((item, i) => {
                return <option value={item} key={i}>{item}</option>
            })}
          </select>

          <input type="submit" value="Submit Quote" className="quote-submit-btn" />
        </form>
      </div>
    </>
  );
};

export default QuoteForm;
