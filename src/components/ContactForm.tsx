import React, { ChangeEvent, FormEvent, useState } from 'react';
import { send } from 'emailjs-com';
import {
    Wrapper,
    ContactFormWrapper,
    StyledTitle,
    ContactFormElement,
    ContactLabel,
    ContactInput,
    MessageInput,
    SubmitButton,
} from '../style/ContactForm.styles';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState<string | null>(null);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData();

        data.append('from_name', name);
        data.append('email', email);
        data.append('message', message);

        try {
            await send(
                process.env.GATSBY_SERVICE_ID as string,
                process.env.GATSBY_TEMPLATE as string,
                {
                    from_name: name,
                    email,
                    message,
                },
                process.env.GATSBY_USER_ID
            );
            setSuccess('SUCCESS');
        } catch (error) {
            setSuccess('ERROR');
        }

        setEmail('');
        setMessage('');
        setName('');

        setTimeout(() => {
            setSuccess(null);
        }, 3000);
    };

    const { inView, ref } = useInView({
        triggerOnce: true,
    });

    return (
        <ContactFormWrapper>
            <StyledTitle ref={ref}>Lets stay in touch 🙌</StyledTitle>
            <ContactFormElement
                onSubmit={(e: FormEvent) => handleSubmit(e)}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.5 }}
            >
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
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setName(e.target.value)
                            }
                        />
                    </Wrapper>
                    <Wrapper>
                        <ContactLabel htmlFor="email">Email</ContactLabel>
                        <ContactInput
                            name="email"
                            value={email}
                            type="email"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                            required
                        />
                    </Wrapper>
                </div>
                <ContactLabel htmlFor="message">Message</ContactLabel>
                <MessageInput
                    name="message"
                    value={message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target.value)
                    }
                    required
                    cols={4}
                    rows={8}
                />
                <SubmitButton type="submit">
                    {success
                        ? success === 'SUCCESS'
                            ? 'Email sent'
                            : 'Error'
                        : 'Submit'}
                </SubmitButton>
            </ContactFormElement>
        </ContactFormWrapper>
    );
};

export default ContactForm;
