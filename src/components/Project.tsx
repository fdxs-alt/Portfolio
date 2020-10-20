import React from 'react';
import { IData } from './MyWork';
import styled from 'styled-components';
import {
    PostitonedWrapper,
    ProjectImage,
    ContentWrapper,
} from '../style/Project.style';

interface IProject extends IData {
    order: number;
}

const Project: React.FC<IProject> = ({ description, link, photo, order }) => {
    const isEven = order % 2 == 0;

    return (
        <PostitonedWrapper isEven={isEven}>
            <ProjectImage src={photo} isEven={isEven} />
            <ContentWrapper isEven={isEven}>
                <p>{description}</p>
            </ContentWrapper>
        </PostitonedWrapper>
    );
};

export default Project;
