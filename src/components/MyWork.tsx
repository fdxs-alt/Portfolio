import React from 'react';
import data from '../data/data';
import Project from './Project';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { GithubLink, StyledIcon } from '../style/Project.style';
import {
    WorkWrapper,
    ProjectsTitle,
    ProjectTitleSmall,
} from '../style/AboutMe.styles';

export interface IData {
    description: string;
    link: string;
    photo?: undefined;
    workInProgress?: boolean;
    deploy?: string;
}

const MyWork = () => {
    return (
        <WorkWrapper>
            <ProjectsTitle>My projects</ProjectsTitle>
            <ProjectTitleSmall>
                Here are some of my projects. Some of them need to be deyployed,
                or I'm working on them, but are almost finished.
            </ProjectTitleSmall>
            {data.map((p: IData, i: number) => (
                <Project
                    key={i}
                    description={p.description}
                    link={p.link}
                    photo={p.photo}
                    workInProgress={p.workInProgress}
                    deploy={p.deploy}
                    order={i + 1}
                />
            ))}
            <ProjectTitleSmall>
                <GithubLink href="https://github.com/fdxs-alt" target="blank">
                    Find out more about my projects on
                    <StyledIcon
                        icon={faGithubSquare}
                        style={{ marginLeft: '0.5rem' }}
                    />
                </GithubLink>
            </ProjectTitleSmall>
        </WorkWrapper>
    );
};

export default MyWork;
