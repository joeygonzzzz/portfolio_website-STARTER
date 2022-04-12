import React from 'react';
import { DiFirebase, DiReact, DiZend, } from 'react-icons/di';
import {BiConfused, BiLoader} from "react-icons/bi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have been working with technologies in the web development world that mainly focus on front end development. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js <br />
            React-Native <br />
            Node.js <br />
            SCSS <br />
            CSS <br />
            HTML <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiConfused size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            In Progress! <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiLoader size="3rem" />
        <ListContainer>
          <ListTitle>Hosting Sites</ListTitle>
          <ListParagraph>
            Experience with <br />
            Netlify
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
