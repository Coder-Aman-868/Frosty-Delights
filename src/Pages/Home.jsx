import React from 'react'
import Hero from '../components/Hero'
import NewCupCream from '../components/NewCupCream'
import OnSundaySpecial from '../components/OnSundaySpecial'
import OurtTopSelling from '../components/OurtTopSelling'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
    return (
        <div>
            <Hero />
            <NewCupCream />
            <OurtTopSelling />
            <OnSundaySpecial />
            <WhyChooseUs />
        </div>
    )
}

export default Home