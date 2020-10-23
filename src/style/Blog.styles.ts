import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { size } from '../data/RWD';

export const BlogPostWrapper = styled.div`
    width: 60%;
    margin: auto;
    min-height: 90vh;
    max-width: 1200px;

    @media (max-width: ${size.tablet}) {
        width: 80%;
    }

    @media (max-width: ${size.mobile}) {
        width: 90%;
    }
`;
export const Title = styled(Link)`
    color: ${props => props.theme.colors.darkFont};
    width: 100%;
    padding: 0;
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

    @media(min-width: ${size.desktop}) {
        font-size: 3rem;
    }
`;
export const Data = styled.div`
    padding: 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 500;

    @media(min-width: ${size.desktop}) {
        font-size: 1.3rem;
    }
`;
export const Description = styled.p`
    font-size: 1.2rem;
    padding: 0.5rem 0;
    text-align: justify;

    @media (max-width: ${size.tablet}) {
        font-size: 1rem;
    }

    @media(min-width: ${size.desktop}) {
        font-size: 1.4rem;
    }
`;
export const PostWrapper = styled(motion.div)`
    padding: 1rem;
`;
