import styled from 'styled-components';

export const MainContent = styled.section`
    display: flex;
    padding: 2.5rem;
    width: 85%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    height: 75vh;
`;
export const ImageTag = styled.img`
    max-width: 450px;
`;
export const AboutMe = styled.p`
    font-weight: 700;
    font-size: 2.5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const About = styled.p`
    margin-top: 0.6rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.darkGrey};
`;
