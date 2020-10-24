import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Wrapper = styled.div`
    width: 100%;
    min-height: 65vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NotFoundTitle = styled.h1`
    color: ${props => props.theme.colors.darkGrey};
    font-size: 5rem;
    text-decoration: solid;
    font-weight: 800;
    text-align: center;
`;
const NotFound = () => {
    return (
        <Layout>
            <Wrapper>
                <NotFoundTitle>Not found</NotFoundTitle>
            </Wrapper>
        </Layout>
    );
};

export default NotFound;
