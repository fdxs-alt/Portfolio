import { size } from './../data/RWD';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContactFormWrapper = styled.div`
    width: 70%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;

    @media (max-width: 1024px) {
        width: 90%;
    }
`;

export const ContactFormElement = styled(motion.form)`
    width: 70%;
    margin: 1.2rem auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;

    @media (max-width: ${size.tablet}) {
        width: 100%;
    }
`;
export const ContactLabel = styled.label`
    font-size: 1rem;
    color: ${props => props.theme.colors.darkFont};
    margin: 0.9rem 0;
`;
export const ContactInput = styled.input`
    width: 100%;
    border: 2px solid ${props => props.theme.colors.lightBlue};
    background-color: white;
    padding: 1.2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    outline: none;
`;
export const StyledTitle = styled.h1`
    padding: 1rem;
    font-size: 2.3rem;
    font-weight: 600;
    text-align: center;
`;
export const Wrapper = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
`;
export const MessageInput = styled.textarea`
    resize: vertical;
    padding: 1.2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    outline: none;
    width: 100%;
    border: 2px solid ${props => props.theme.colors.lightBlue};
`;
export const SubmitButton = styled.button`
    background-color: white;
    padding: 0.8rem;
    border: 3px solid ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.darkGrey};
    border-radius: 2rem;
    align-self: center;
    min-width: 150px;
    width: 25%;
    margin-top: 2rem;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover,
    :focus {
        outline: none;
        border: 3px solid ${props => props.theme.colors.darkFont};
        color: ${props => props.theme.colors.darkFont};
    }
`;

export const Success = styled.p`
    color: green;
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
`;

export const ErrorMess = styled.p`
    color: red;
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
`;
