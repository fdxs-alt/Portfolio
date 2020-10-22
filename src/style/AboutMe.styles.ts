import { size } from './../data/RWD';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styled from 'styled-components';
export const AboutMeSection = styled.section`
    height: 65vh;
    background-color: #56babd;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;

    @media (min-width: 1366px) {
        margin-top: 2rem;
    }

    @media (max-width: ${size.laptop}) {
        margin-top: 0;
    }
`;
export const AboutTitle = styled.h1`
    font-size: 2.2rem;
    margin-top: 2rem;
    color: white;

    @media (max-width: ${size.tablet}) {
        font-size: 1.9rem;
    }
`;
export const AboutParagraph = styled.p`
    font-size: 1.1rem;
    color: white;
    width: 50%;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 1.8;
    padding: 1rem;

    @media (max-width: ${size.laptop}) {
        width: 60%;
    }

    @media (max-width: ${size.tablet}) {
        width: 80%;
        font-size: 0.9rem;
    }

    @media (max-width: ${size.mobile}) {
        width: 95%;
        font-size: 0.7rem;
        text-align: justify;
    }
`;
export const SkillsSection = styled.section`
    overflow: hidden;
    padding: 1rem;
    width: 65%;
    margin: 0 auto;
    margin-top: -30vh;
    height: 85vh;
    max-height: 750px;
    border-radius: 1.5rem;
    background-color: white;
    display: flex;
    border: 2px solid ${props => props.theme.colors.fontColor};

    span:first-of-type {
        border-right: 3px solid ${props => props.theme.colors.fontColor};
    }

    @media (max-width: 1024px) {
        width: 75%;
        max-height: 600px;
    }

    @media (max-width: ${size.tablet}) {
        width: 85%;
        max-height: 500px;
        margin-top: -25vh;
    }

    @media (max-width: 550px) {
        width: 95%;
        max-height: 400px;
    }
`;
export const Column = styled(motion.span)`
    width: 50%;
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const SkillList = styled.ul`
    list-style: none;
`;
export const Skill = styled.li`
    padding: 0.8rem;
    letter-spacing: 2px;
    font-size: 1.2rem;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 0.9rem;
        padding: 0.6rem;
    }

    @media (max-width: 550px) {
        font-size: 0.7rem;
        padding: 0.4rem;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.8rem;
`;
export const ColumTitle = styled.h1`
    letter-spacing: 2px;
    font-size: 2rem;
    color: ${props => props.theme.colors.darkFont};
    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 1.3rem;
    }

    @media (max-width: 550px) {
        font-size: 1rem;
    }
`;
export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
    margin-right: 0.9rem;
    color: ${props => props.theme.colors.darkFont};

    @media (max-width: 1024px) {
        font-size: 2rem;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 1.5rem;
    }

    @media (max-width: 550px) {
        font-size: 1rem;
    }
`;
export const WorkWrapper = styled.div`
    width: 80%;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-bottom: 2px solid ${props => props.theme.colors.lightBlue};
`;

export const ProjectsTitle = styled.h1`
    padding: 1rem;
    font-size: 2.3rem;

    @media (max-width: ${size.tablet}) {
        font-size: 1.9rem;
    }
`;
export const ProjectTitleSmall = styled.p`
    color: ${props => props.theme.colors.darkGrey};
    padding: 1.4rem;
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
    text-align: center;

    @media (max-width: ${size.tablet}) {
        font-size: 1rem;
        padding: 1rem;
    }
`;
