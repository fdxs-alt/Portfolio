import React from 'react';
import { IData } from './MyWork';
import {
    PostitonedWrapper,
    ProjectImage,
    ContentWrapper,
    Description,
    GithubLink,
    StyledIcon,
    WorkInProgressTitle,
} from '../style/Project.style';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faTools } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

interface IProject extends IData {
    order: number;
}

const Project: React.FC<IProject> = ({
    description,
    link,
    photo,
    order,
    workInProgress,
    deploy,
}) => {
    const isEven = order % 2 == 0;
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <PostitonedWrapper ref={ref} isEven={isEven}>
            <ProjectImage
                src={photo}
                isEven={isEven}
                initial={{ x: isEven ? '100vw' : '-100vw' }}
                animate={{ x: inView ? 0 : '' }}
                transition={{ delay: 0., type: 'tween', duration: 1 }}
            />
            <ContentWrapper
                isEven={isEven}
                whileHover={{ scale: 1.05 }}
                initial={{ x: isEven ? '100vw' : '-100vw' }}
                animate={{ x: inView ? 0 : '' }}
                transition={{ delay: 0.2, type: 'tween' }}
            >
                <Description>{description}</Description>
                <div
                    style={{
                        marginTop: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <GithubLink href={`${link}`} target="blank">
                        <StyledIcon icon={faGithub} />
                    </GithubLink>

                    {deploy ? (
                        <GithubLink href={`${deploy}`} target="blank">
                            <StyledIcon icon={faGlobe} />
                        </GithubLink>
                    ) : workInProgress ? (
                        <WorkInProgressTitle>
                            <StyledIcon icon={faTools} sm />
                            In development
                        </WorkInProgressTitle>
                    ) : (
                        <WorkInProgressTitle>
                            <StyledIcon icon={faTools} sm />
                            To deploy
                        </WorkInProgressTitle>
                    )}
                </div>
            </ContentWrapper>
        </PostitonedWrapper>
    );
};

export default Project;
