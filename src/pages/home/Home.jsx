// dependencies  
import { Helmet } from 'react-helmet';
import HomeBanner from '../../components/homeBanner/HomeBanner';
import './Home.scss';
import QuoteSection from './components/quote/QuoteSection';
import Services from './components/services/Services';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Homepage - First React Project</title>
    </Helmet>
    <HomeBanner />
    <Services />
    <QuoteSection />
    </>
  )
}

export default Home