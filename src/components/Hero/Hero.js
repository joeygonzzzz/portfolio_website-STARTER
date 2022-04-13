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
      Welcome to my portfolio site! You will find links to projects I have done as well as some information about me and how to contact me!
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/in/jgonzales22'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;