import React from 'react';
import Layout from '../components/Layout';
import Image from '../images/undraw_web_developer_p3e5.svg';
import AboutSection from '../components/AboutSection';
import {
    MainContent,
    AboutMe,
    About,
    ImageTag,
    Wrapper,
} from '../style/Home.style';
import MyWork from '../components/MyWork';

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
            <MyWork />
        </Layout>
    );
}
