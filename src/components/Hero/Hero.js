import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Thanks for visiting! <br />
        My name is Jose "Joey" Gonzales, an aspiring front-end developer!
      </SectionTitle>
      <SectionText>
      I am a web developer with a focus on the front-end utilizing JavaScript ES6, communications, and various team building methodologies. I have a previous background of 7+ years in teaching. As a teacher, I am always trying to find ways to simplify ideas and instruction so that students can understand it easier and I believe that fully translates to coding, the more simple and to the point, you will receive a more effective end result. I am looking to bring my combined experience to web design and align myself with a company to build new ideas and bring them to fruition.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;