import React from 'react'

import Hero from "../../components/home/Hero"
import Statistics from '../../components/home/Statistics'
import WhyChooseUs from '../../components/home/WhyChooseUs'
import MembershipPreview from '../../components/home/MembershipPreview'
import TrainerPreview from '../../components/home/TrainerPreview'
import SchedulePreview from '../../components/home/SchedulePreview'
import Testimonials from '../../components/home/Testimonials'
import CTA from '../../components/common/CTA'
import HeroMarquee from '../../components/home/HeroMarquee'

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroMarquee />
      <Statistics />
      <WhyChooseUs />
      <MembershipPreview />
      <TrainerPreview />
      {/* <SchedulePreview /> */}
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home;
