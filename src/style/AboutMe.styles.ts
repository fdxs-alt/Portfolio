import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
export const AboutMeSection = styled.section`
    height: 75vh;
    max-height: 1200px;
    background-color: #56babd;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const AboutTitle = styled.h1`
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: white;
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
`;
export const SkillsSection = styled.section`
    padding: 1rem;
    width: 65%;
    margin: 0 auto;
    margin-top: -30vh;
    height: 85vh;
    max-height: 800px;
    border-radius: 1.5rem;
    background-color: white;
    display: flex;
    border: 2px solid ${props => props.theme.colors.fontColor};

    span:first-of-type {
        border-right: 3px solid ${props => props.theme.colors.fontColor};
    }
`;
export const Column = styled.span`
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
`;
export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
    margin-right: 0.9rem;
    color: ${props => props.theme.colors.darkFont};
`;
