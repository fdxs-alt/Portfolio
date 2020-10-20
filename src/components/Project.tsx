import React from 'react';
import { IData } from './MyWork';
import styled from 'styled-components';
import {
    PostitonedWrapper,
    ProjectImage,
    ContentWrapper,
} from '../style/Project.style';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProject extends IData {
    order: number;
}

const Description = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
    text-align: justify;
`;
const GithubLink = styled.a`
    margin-right: 0.5rem;
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

const Project: React.FC<IProject> = ({
    description,
    link,
    photo,
    order,
    workInProgress,
    deploy,
}) => {
    const isEven = order % 2 == 0;

    return (
        <PostitonedWrapper isEven={isEven}>
            <ProjectImage src={photo} isEven={isEven} />
            <ContentWrapper isEven={isEven}>
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
