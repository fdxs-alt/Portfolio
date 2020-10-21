import React, { ChangeEvent, useState } from 'react';
import {} from 'emailjs-com';
import styled from 'styled-components';

const ContactFormWrapper = styled.div`
    width: 70%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
`;

const ContactFormElement = styled.form`
    width: 70%;
    margin: 1.2rem auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;
const ContactLabel = styled.label`
    font-size: 1rem;
    color: ${props => props.theme.colors.darkFont};
    margin: 0.9rem 0;
`;
const ContactInput = styled.input`
    width: 100%;
    border: 2px solid ${props => props.theme.colors.lightBlue};
    background-color: white;
    padding: 1.2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    outline: none;
`;
const StyledTitle = styled.h1`
    padding: 1rem;
    font-size: 2.3rem;
    font-weight: 600;
`;
const Wrapper = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
`;
const MessageInput = styled.textarea`
    resize: vertical;
    padding: 1.2rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    outline: none;
    width: 100%;
    border: 2px solid ${props => props.theme.colors.lightBlue};
`;
const SubmitButton = styled.button`
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
`;
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSumbit = () => {};

    return (
        <ContactFormWrapper>
            <StyledTitle>Are you interested? Contact me!</StyledTitle>
            <ContactFormElement>
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Wrapper>
                        <ContactLabel htmlFor="name">Name</ContactLabel>
                        <ContactInput
                            name="name"
                            value={name}
                            type="text"
                            required
                            onChange={e => setName(e.target.value)}
                        />
                    </Wrapper>
                    <Wrapper>
                        <ContactLabel htmlFor="email">Email</ContactLabel>
                        <ContactInput
                            name="email"
                            value={email}
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </Wrapper>
                </div>
                <ContactLabel htmlFor="message">Message</ContactLabel>
                <MessageInput
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    cols={4}
                    rows={8}
                />
                <SubmitButton type="button">Submit</SubmitButton>
            </ContactFormElement>
        </ContactFormWrapper>
    );
};

export default ContactForm;
