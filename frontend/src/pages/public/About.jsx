import React from 'react'

import Hero from '../../components/about/Hero';
import OurStory from '../../components/about/OurStory';
import MissionVision from '../../components/about/MissionVission';
import Facilities from '../../components/about/Facilities';
import WhyChooseUs from '../../components/about/WhyChooseUs';
import CTA from "../../components/common/CTA";

const About = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <MissionVision />
      <Facilities />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}

export default About
