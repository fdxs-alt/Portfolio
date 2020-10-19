import React from 'react'
import styled from 'styled-components'
import {
    AboutMeSection,
    AboutTitle,
    AboutParagraph,
} from '../style/AboutMe.styles'

const SkillsSection = styled.section`
    width: 75%;
    margin: 0 auto;
    margin-top: -15%;
    height: 85vh;
    max-height: 1500px;
    border-radius: 1.5rem;
    background-color: white;
    display: flex;
    border: 2px solid ${props => props.theme.colors.fontColor};
`
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
            <SkillsSection>ojsik</SkillsSection>
        </div>
    )
}

export default AboutSection
