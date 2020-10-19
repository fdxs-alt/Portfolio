import React from 'react'
import Layout from '../components/Layout'
import Image from '../images/undraw_web_developer_p3e5.svg'
import styled from 'styled-components'
import AboutSection from '../components/AboutSection'
const MainContent = styled.section`
    display: grid;
    grid-template-columns: 40% 50%;
    padding: 2.5rem;
    width: 85%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    height: 75vh;
`
const ImageTag = styled.img`
    max-width: 450px;
`
const AboutMe = styled.p`
    font-weight: 700;
    font-size: 2.5rem;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const About = styled.p`
    margin-top: 0.6rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.darkGrey};
`
export default function Home() {
    return (
        <Layout>
            <MainContent>
                <ImageTag src={Image} alt="code_thinking" />
                <Wrapper>
                    <p style={{ fontSize: '1.8rem' }}>Hello 👋, my name is</p>
                    <AboutMe>Jakub Sukiennik</AboutMe>
                    <About>Passionate fullstack developer from Poland</About>
                </Wrapper>
            </MainContent>
            <AboutSection />
        </Layout>
    )
}
