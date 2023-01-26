import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import AuthBackground from "@/components/auth/background.auth";
import styled from "styled-components";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/redux/store";
import {
    selectConfirmPassword,
    selectEmail,
    selectFirstName, selectLastName,
    selectPassword,
    selectPhone, selectProfilePicture, selectUsername, setEmail
} from "@/redux/slices/formSlice";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: relative;
`;

const FormWrapper = styled.div`
  color: #ffffff;
  position: absolute;
  padding: 2rem 2rem;
  z-index: 10;
  top: 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  & > h1 {
    font-size: 1.75rem;

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 2rem 3.125rem;
    width: 40%;
    left: 55%;
    gap: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  height: 2.5rem;

  & > button {
    width: 100%;
    padding: 1rem 2.9375rem;
    background: #D088F1;
    border-radius: 10px;
    border: none;
    font-size: 0.9rem;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      background: #E194F8;
    }

    &:active {
      background: #D364F5;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 1rem;
  transform: translateY(0.15rem);
`;

const Icon = styled.div`
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #D088F1;
  }
`;

const Input = styled.input`
  background: #1C1E1F;
  width: 100%;
  border-radius: 10px;
  font-size: 0.9375rem;
  outline-color: #D088F1;
  color: #9B9C9F;
  padding: 1rem 2.9375rem;
  border: 2px solid rgba(255, 255, 255, 0.1);

  &::placeholder {
    color: #9B9C9F;
    font-size: 0.8125rem;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2pt #D088F1;
    border: 2px solid #D088F1;

    @media (min-width: 1024px) {
      border: none
    }
  }
`;

const OrWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  & > hr {
    width: 20%;
  }

  & > p {
    font-size: 0.8125rem;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  justify-content: center;

  @media (min-width: 1024px) {
    gap: 2.5rem
  }

  & > :hover {
    filter: brightness(0.9);
  }

  & > :active {
    filter: brightness(0.6);
  }
`;

const Option = styled.button`
  display: flex;
  background: #ffffff;
  border: none;
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    width: 40%;
    height: 3.25rem;
  }

  & > p {
    font-size: 0.8rem;
    font-weight: 600;

    @media (min-width: 1024px) {
      font-size: 0.9rem;
    }
  }
`;

const OptionIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media (min-width: 1024px) {
    width: 2rem;
    height: 2rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: 0.8125rem;
    color: #9B9C9F;

    & > a {
      color: #D088F1;
    }
  }
`;

const Signup = () => {
    let [height, setHeight] = React.useState(0);
    const [emailInput, setEmailInput] = useState(true);
    const [passwordInput, setPasswordInput] = useState(false);
    const [nameInput, setNameInput] = useState(false);
    const [userInput, setUserInput] = useState(false);

    const dispatch = useAppDispatch();

    const email = useAppSelector(selectEmail);
    const password = useAppSelector(selectPassword);
    const confirmPassword = useAppSelector(selectConfirmPassword);
    const firstName = useAppSelector(selectFirstName);
    const lastName = useAppSelector(selectLastName);
    const phone = useAppSelector(selectPhone);
    const username = useAppSelector(selectUsername);
    const profilePicture = useAppSelector(selectProfilePicture);

    useEffect(() => {
        setHeight(typeof window !== 'undefined' ? window.innerHeight : 0);
    }, []);

    const handleResize = useCallback(() => {
        setHeight(window.innerHeight);
    }, [])

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <Wrapper id="auth-login" style={{height: height}}>
            <BackgroundWrapper>
                <AuthBackground/>
            </BackgroundWrapper>
            <FormWrapper>
                <h1>Let&#39;s get started!</h1>
                <Form>
                    {emailInput && (
                        <InputWrapper>
                            <IconWrapper>
                                <Icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>
                                </Icon>
                            </IconWrapper>
                            <Input value={email} type="email" id="email" name="email" placeholder="Email"
                                   onChange={(e: any) => dispatch(setEmail(e.target.value))}/>
                        </InputWrapper>
                    )}
                    {passwordInput && (
                        <>
                            <InputWrapper>
                                <IconWrapper>
                                    <Icon>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                        </svg>
                                    </Icon>
                                </IconWrapper>
                                <Input value={password} type="password" id="password" name="password"
                                       placeholder="Password"/>
                            </InputWrapper>
                            <InputWrapper>
                                <IconWrapper>
                                    <Icon>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                        </svg>
                                    </Icon>
                                </IconWrapper>
                                <Input value={confirmPassword} type="repeat_password" id="repeat_password"
                                       name="repeat_password"
                                       placeholder="Repeat password"/>
                            </InputWrapper>
                        </>
                    )}
                    <InputWrapper>
                        <button type={userInput ? "submit" : "button"}
                                disabled={emailInput ? email.length === 0 : passwordInput ? password.length === 0 || confirmPassword.length === 0 : false || userInput ? firstName.length === 0 || lastName.length === 0 || phone.length === 0 || username.length === 0 : false}
                                onClick={() => {
                                    if (emailInput) {
                                        setEmailInput(false);
                                        setPasswordInput(true);
                                    } else if (passwordInput) {
                                        setPasswordInput(false);
                                        setNameInput(true);
                                    } else if (nameInput) {
                                        setNameInput(false);
                                        setUserInput(true);
                                    }
                                }}
                                className="btn btn-primary">
                            {userInput ? "Sign Up" : "Continue"}
                        </button>
                    </InputWrapper>
                </Form>
                {emailInput && (
                    <>
                        <OrWrapper>
                            <hr/>
                            <p>or</p>
                            <hr/>
                        </OrWrapper>
                        <OptionsWrapper>
                            <Option>
                                <OptionIcon src="/icons8-google.svg" alt=""/>
                                <p style={{color: "#000000"}}>Google</p>
                            </Option>
                            <Option style={{background: "#3976EA"}}>
                                <OptionIcon src="/f_logo_RGB-White_100.png" alt=""/>
                                <p style={{color: "#ffffff"}}>Facebook</p>
                            </Option>
                        </OptionsWrapper>
                    </>
                )}
                {!emailInput && (
                    <button onClick={() => {
                        if (passwordInput) {
                            setPasswordInput(false);
                            setEmailInput(true);
                        } else if (nameInput) {
                            setNameInput(false);
                            setPasswordInput(true);
                        } else if (userInput) {
                            setUserInput(false);
                            setNameInput(true);
                        }
                    }
                    }>
                        <p>Back</p>
                    </button>
                )}
                <LinkWrapper>
                    <p>Already have an account? <Link href="/auth/login">Login</Link></p>
                </LinkWrapper>
            </FormWrapper>
        </Wrapper>
    );
};

export default Signup;
