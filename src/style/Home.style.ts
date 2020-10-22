import { size } from './../data/RWD';
import styled from 'styled-components';

export const MainContent = styled.section`
    display: flex;
    padding: 2.5rem;
    width: 85%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    height: 75vh;
    max-width: 1200px;

    @media (max-width: ${size.laptop}) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;
export const ImageTag = styled.img`
    max-width: 450px;
    width: 100%;

    @media (max-width: ${size.laptop}) {
        max-width: 550px;
    }
`;
export const AboutMe = styled.p`
    font-weight: 700;
    font-size: 2.5rem;

    @media (max-width: ${size.laptop}) {
        text-align: center;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 2.2rem;
    }

    @media (max-width: ${size.mobile}) {
        font-size: 1.8rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const About = styled.p`
    margin-top: 0.6rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.darkGrey};

    @media (max-width: ${size.laptop}) {
        text-align: center;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 1.3rem;
    }

    @media (max-width: ${size.mobile}) {
        font-size: 0.9rem;
    }
`;
