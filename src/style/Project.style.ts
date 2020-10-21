import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styled from 'styled-components';

type TWrapper = {
    isEven: boolean;
};
export const ProjectImage = styled(motion.img)<TWrapper>`
    max-width: 500px;
    width: 50%;
    object-fit: cover;
    border-radius: 0.8rem;
    box-shadow: ${props =>
        props.isEven
            ? '-10px 10px 25px #dbdbdb,10px -10px 25px #ffffff'
            : '10px 10px 25px #e6e6e6, -10px -10px 25px #ffffff'};
`;
export const PostitonedWrapper = styled.div<TWrapper>`
    width: 90%;
    margin-top: 2rem;
    align-self: ${props => (props.isEven ? 'flex-end' : 'flex-start')};
    flex-direction: ${props => (props.isEven ? 'row-reverse' : 'row')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

export const ContentWrapper = styled(motion.div)<TWrapper>`
    width: 50%;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: ${props =>
        props.isEven
            ? '10px 10px 25px #e6e6e6, -10px -10px 25px #ffffff'
            : '-10px 10px 25px #dbdbdb,10px -10px 25px #ffffff'};
`;
export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    text-align: justify;
`;
export const GithubLink = styled.a`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.darkFont};
    &:hover {
        color: ${props => props.theme.colors.darkGrey};
    }
`;

type TIcon = {
    sm?: boolean;
};
export const StyledIcon = styled(FontAwesomeIcon)<TIcon>`
    font-size: ${props => (props.sm ? '1.1rem' : '2.5rem')};
    color: ${props => (props.sm ? props.theme.colors.darkFont : 'inherit')};
    margin-right: 0.5rem;
`;
export const WorkInProgressTitle = styled.p`
    font-size: 1.1rem;
`;
