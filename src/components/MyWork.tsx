import React from 'react';
import data from '../data/data';
import Project from './Project';
import styled from 'styled-components';

const WorkWrapper = styled.div`
    width: 80%;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectsTitle = styled.h1`
    padding: 1rem;
    font-size: 2.3rem;
`;
const ProjectTitleSmall = styled.p`
    color: ${props => props.theme.colors.darkGrey};
    padding: 1rem;
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
`;
export interface IData {
    description: string;
    link: string;
    photo?: undefined;
    workInProgress?: boolean;
    deploy?: boolean;
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
        </WorkWrapper>
    );
};

export default MyWork;
