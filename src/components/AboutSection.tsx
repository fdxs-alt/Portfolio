import React from 'react';
import {
    AboutMeSection,
    AboutTitle,
    AboutParagraph,
    Column,
    ColumTitle,
    IconWrapper,
    Skill,
    SkillList,
    SkillsSection,
    StyledIcon,
} from '../style/AboutMe.styles';
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const AboutSection = () => {
    return (
        <div>
            <AboutMeSection>
                <AboutTitle>Nice to meet you</AboutTitle>
                <AboutParagraph>
                    I am 20 years old student of Politechnika Krakowska.
                    Programming became my passion about 1,5 years ago. I mostly
                    focus on web development, but I also interested in other
                    technologies like C++. I’m planning on developing my web
                    skills by learning microservices and also expanding my
                    knowledge in Telco industry. I found myself hardworking and
                    dedicated person.
                </AboutParagraph>
            </AboutMeSection>
            <SkillsSection>
                <Column>
                    <SkillList>
                        <IconWrapper>
                            <StyledIcon icon={faReact} />
                            <ColumTitle>FRONTEND</ColumTitle>
                        </IconWrapper>
                        <Skill>Typescript</Skill>
                        <Skill>React | Hooks | Context API</Skill>
                        <Skill>CSS | SASS</Skill>
                        <Skill>Styled components</Skill>
                        <Skill>Redux | redux-thunk</Skill>
                        <Skill>MobX</Skill>
                        <Skill>Apollo Client React</Skill>
                        <Skill>Gatsby</Skill>
                    </SkillList>
                </Column>
                <Column>
                    <SkillList>
                        <IconWrapper>
                            <StyledIcon icon={faNodeJs} />
                            <ColumTitle>BACKEND</ColumTitle>
                        </IconWrapper>
                        <Skill>Typescript</Skill>
                        <Skill>Node.js</Skill>
                        <Skill>Express</Skill>
                        <Skill>NestJS</Skill>
                        <Skill>Socket.io</Skill>
                        <Skill>MongoDB | Mongoose</Skill>
                        <Skill>TypeORM | PostgreSQL</Skill>
                        <Skill>Apollo Server | TypeGraphQL</Skill>
                    </SkillList>
                </Column>
            </SkillsSection>
        </div>
    );
};

export default AboutSection;
