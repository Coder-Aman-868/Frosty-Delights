import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Hero from './components/Hero'
import NewCupCream from './components/NewCupCream'
import OnSundaySpecial from './components/OnSundaySpecial'
import OurtTopSelling from './components/OurtTopSelling'
import WhyChooseUs from './components/WhyChooseUs'

function App() {

  return (
    <>
      <Header />
      <>
        <Hero />
        <NewCupCream />
        <OurtTopSelling />
        <OnSundaySpecial />
        <WhyChooseUs />
        <Footer />
      </>
      <Footer />
    </>
  )
}

export default App
