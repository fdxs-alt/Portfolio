import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Wrapper } from '../style/Layout.style';
import { GithubLink, StyledIcon } from '../style/Project.style';

const StyledMeTitle = styled.p`
    font-size: 1rem;
`;

const Footer = () => {
    const { inView, ref } = useInView();
    return (
        <Wrapper ref={ref}>
            <StyledMeTitle>© 2020 Jakub Sukiennik</StyledMeTitle>
            <motion.div
                style={{ padding: '1rem' }}
                initial={{ y: '500px' }}
                animate={{ y: inView ? 0 : '500px' }}
            >
                <GithubLink
                    href="https://github.com/fdxs-alt"
                    style={{ display: 'inline' }}
                >
                    <StyledIcon icon={faGithub} />
                </GithubLink>
                <GithubLink
                    href="https://twitter.com/JakubSukiennik2"
                    style={{ display: 'inline' }}
                >
                    <StyledIcon icon={faTwitter} />
                </GithubLink>
            </motion.div>
        </Wrapper>
    );
};

export default Footer;
