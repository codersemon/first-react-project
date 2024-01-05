// dependencies  
import { Helmet } from 'react-helmet';
import HomeBanner from '../../components/homeBanner/HomeBanner';
import './Home.scss';
import QuoteSection from './components/quote/QuoteSection';

import Achievement from './components/achievement/achievement';
import Services from './components/services/Services';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Homepage - First React Project</title>
    </Helmet>
    <Achievement />
    <HomeBanner />
    <Services />
    <QuoteSection />
    </>
  )
}

export default Home