import styled from 'styled-components';

type TWrapper = {
    isEven: boolean;
};
export const ProjectImage = styled.img<TWrapper>`
    max-width: 500px;
    width: 50%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: ${props =>
        props.isEven
            ? '-10px 10px 25px #dbdbdb,10px -10px 25px #ffffff'
            : '10px 10px 25px #e6e6e6, -10px -10px 25px #ffffff'};
`;
export const PostitonedWrapper = styled.div<TWrapper>`
    width: 90%;
    margin-top: 2rem;
    align-self: ${props => (props.isEven ? 'flex-end' : 'flex-start')};
    flex-direction: ${props => (props.isEven ? 'row-reverse' : 'row')};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContentWrapper = styled.div<TWrapper>`
    width: 50%;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: ${props =>
        props.isEven
            ? '10px 10px 25px #e6e6e6, -10px -10px 25px #ffffff'
            : '-10px 10px 25px #dbdbdb,10px -10px 25px #ffffff'};
`;
