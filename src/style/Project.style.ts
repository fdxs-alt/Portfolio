import { size } from './../data/RWD';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styled from 'styled-components';

type TWrapper = {
    isEven: boolean;
};
export const ProjectImage = styled(motion.img)<TWrapper>`
    width: 50%;
    object-fit: cover;
    border-radius: 0.8rem;
    box-shadow: ${props =>
        props.isEven
            ? '-10px 10px 25px #dbdbdb,10px -10px 25px #ffffff'
            : '10px 10px 25px #e6e6e6, -10px -10px 25px #ffffff'};

    @media (max-width: ${size.laptop}) {
        width: 100%;
        max-width: 900px;

        box-shadow: ${props =>
            props.isEven
                ? '-5px 5px 15px #dbdbdb,5px -5px 15px #ffffff'
                : '5px 5px 15px #e6e6e6, -5px -5px 15px #ffffff'};
    }
`;
export const PostitonedWrapper = styled.div<TWrapper>`
    max-width: 1500px;
    width: 95%;
    margin-top: 2rem;
    align-self: ${props => (props.isEven ? 'flex-end' : 'flex-start')};
    flex-direction: ${props => (props.isEven ? 'row-reverse' : 'row')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    @media (max-width: ${size.laptop}) {
        flex-direction: column;
        align-self: center;
    }
`;

export const ContentWrapper = styled(motion.div)<TWrapper>`
    width: 40%;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: ${props =>
        props.isEven
            ? '10px 10px 25px #e6e6e6, -10px -10px 25px #ffffff'
            : '-10px 10px 25px #dbdbdb,10px -10px 25px #ffffff'};

    @media (max-width: ${size.laptop}) {
        width: 90%;
        margin-top: 2rem;
        box-shadow: ${props =>
            props.isEven
                ? '5px 5px 15px #e6e6e6, -5px -5px 15px #ffffff'
                : '-5px 5px 15px #dbdbdb,5px -5px 15px #ffffff'};
    }

    @media (max-width: ${size.laptop}) {
        padding: 1.5rem;
    }
`;
export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    text-align: justify;

    @media (max-width: ${size.laptop}) {
        text-align: center;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 0.8rem;
    }
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

    @media (max-width: ${size.tablet}) {
        font-size: 0.9rem;
    }
`;
export const IconWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem;
    align-items: center;

    @media (max-width: ${size.laptop}) {
        text-align: center;
        justify-content: center;
    }
`;
