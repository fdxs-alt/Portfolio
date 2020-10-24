import { motion } from 'framer-motion';
import styled from 'styled-components';
import { size } from '../data/RWD';

export const Title = styled(motion.h1)`
    color: ${props => props.theme.colors.darkFont};
    width: 100%;
    padding: 2rem 1rem;
    font-size: 2.1rem;
    text-decoration: none;
    font-weight: 800;

    &:hover {
        color: ${props => props.theme.colors.darkGrey};
    }

    @media (max-width: ${size.tablet}) {
        font-size: 1.8rem;
    }

    @media (max-width: ${size.mobile}) {
        font-size: 1.5rem;
    }

    @media (min-width: ${size.desktop}) {
        font-size: 3rem;
    }
`;
export const BlogContent = styled.div`
    padding: 0 1rem;

    h3 {
        padding: 0.5rem 0;
        font-size: 1.6rem;
    }

    p {
        padding: 0.5rem 0;
        font-size: 1.2rem;
    }

    li {
        padding: 0.5rem 2rem;
        font-size: 1.2rem;
        list-style-position: inside;
    }
`;
