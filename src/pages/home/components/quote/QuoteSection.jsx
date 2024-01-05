// dependencies 
import Lottie from "lottie-react";
import QuoteForm from "../../../../components/quoteForm/QuoteForm"
import "./QuoteSection.scss";
import contactLottie from "../../../../assets/lottie/contact.json"

const QuoteSection = () => {
  return (
    <section className="quote-area">
        <div className="container">
            <div className="quote-left">
                <Lottie animationData={contactLottie} loop={true} style={{height: 350}} />
            </div>
            <div className="quote-right">
                <h2>Submit your quotation</h2>
                <QuoteForm />
            </div>
        </div>
    </section>
  )
}

export default QuoteSection