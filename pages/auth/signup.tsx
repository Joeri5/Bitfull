import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import AuthBackground from "@/components/auth/background.auth";
import styled from "styled-components";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/redux/store";
import {
    selectConfirmPassword,
    selectEmail,
    selectFirstName,
    selectLastName,
    selectPassword,
    selectPhone,
    selectProfilePicture,
    selectUsername,
    setConfirmPassword,
    setEmail,
    setFirstName,
    setLastName,
    setPassword, setUsername
} from "@/redux/slices/formSlice";
import Head from "next/head";

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
    color: #ffffff;

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

const Error = styled.p`
  color: red;
  font-size: 0.8125rem;
  text-align: center;
`;

const BackWrapper = styled.div`
  & > button {
    background: none;
    border: none;
    display: flex;

    & > :hover {
      filter: brightness(0.9);
      cursor: pointer;
    }

    & > p {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      height: 100%;
      font-size: 0.8125rem;

      & > span {
        & > svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;

const Signup = () => {
    let [height, setHeight] = React.useState(0);
    const [emailInput, setEmailInput] = useState(true);
    const [passwordInput, setPasswordInput] = useState(false);
    const [nameInput, setNameInput] = useState(false);
    const [userInput, setUserInput] = useState(false);
    const [error, setError] = useState('');
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
    }, []);


    useEffect(() => {
        if (password.length > 0 && confirmPassword.length > 0) {
            if (password != confirmPassword) {
                setError('Passwords do not match');
            } else {
                setError('');
            }
        }
    }, [password, confirmPassword]);


    return (
        <>
            <Head>
                <title>Bitfull - Sign Up</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <link rel="icon" href="/logo.svg"/>
            </Head>
            <Wrapper id="auth-login" style={{height: `${height}px`}}>
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
                                       onChange={(e: any) => dispatch(setEmail(e.target.value))}
                                />
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
                                           placeholder="Password"
                                           onChange={(e: any) => dispatch(setPassword(e.target.value))}/>
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
                                    <Input value={confirmPassword} type="password" id="repeat_password"
                                           name="repeat_password"
                                           placeholder="Repeat password"
                                           onChange={(e: any) => dispatch(setConfirmPassword(e.target.value))}
                                    />
                                </InputWrapper>
                            </>
                        )}
                        {nameInput && (
                            <>
                                <InputWrapper>
                                    <IconWrapper>
                                        <Icon>
                                            <svg width="12" height="24" viewBox="0 0 12 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_67_2201)">
                                                    <path
                                                        d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_67_2201">
                                                        <rect width="12" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Icon>
                                    </IconWrapper>
                                    <Input value={firstName} type="text" id="firstName" name="firstName"
                                           placeholder="First Name"
                                           onChange={(e: any) => dispatch(setFirstName(e.target.value))}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <IconWrapper>
                                        <Icon>
                                            <svg width="12" height="24" viewBox="0 0 12 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_67_2201)">
                                                    <path
                                                        d="M3.74998 6C3.74998 6.99456 3.35489 7.94839 2.65163 8.65165C1.94837 9.35491 0.994538 9.75 -2.3365e-05 9.75C-0.994585 9.75 -1.94841 9.35491 -2.65167 8.65165C-3.35494 7.94839 -3.75002 6.99456 -3.75002 6C-3.75002 5.00544 -3.35494 4.05161 -2.65167 3.34835C-1.94841 2.64509 -0.994585 2.25 -2.3365e-05 2.25C0.994538 2.25 1.94837 2.64509 2.65163 3.34835C3.35489 4.05161 3.74998 5.00544 3.74998 6ZM-7.49902 20.118C-7.46689 18.1504 -6.66269 16.2742 -5.25985 14.894C-3.85701 13.5139 -1.96794 12.7405 -2.3365e-05 12.7405C1.96789 12.7405 3.85696 13.5139 5.2598 14.894C6.66264 16.2742 7.46684 18.1504 7.49898 20.118C5.14637 21.1968 2.58812 21.7535 -2.3365e-05 21.75C-2.67602 21.75 -5.21602 21.166 -7.49902 20.118Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_67_2201">
                                                        <rect width="12" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Icon>
                                    </IconWrapper>
                                    <Input value={lastName} type="text" id="lastName" name="lastName"
                                           placeholder="Last Name"
                                           onChange={(e: any) => dispatch(setLastName(e.target.value))}
                                    />
                                </InputWrapper>
                            </>
                        )}
                        {userInput && (
                            <>
                                <InputWrapper>
                                    <IconWrapper>
                                        <Icon>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round"
                                                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
                                            </svg>
                                        </Icon>
                                    </IconWrapper>
                                    <Input value={username} type="text" id="username" name="username"
                                           placeholder="Username"
                                           onChange={(e: any) => dispatch(setUsername(e.target.value))}
                                    />
                                </InputWrapper>
                            </>
                        )}
                        <InputWrapper>
                            <button type={userInput ? "submit" : "button"}
                                    id="button"
                                    disabled={emailInput ? email.length === 0 : false || nameInput ? firstName.length === 0 || lastName.length === 0 : false || userInput ? username.length === 0 : false || passwordInput ? password.length === 0 || confirmPassword.length === 0 || password != confirmPassword : false}
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
                    <Error style={{display: error.length === 0 ? "none" : ""}}>
                        {error}
                    </Error>
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
                    <BackWrapper>
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
                                <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15.75 19.5L8.25 12l7.5-7.5"/>
                                    </svg>
                                </span>
                                    Back
                                </p>
                            </button>
                        )}
                    </BackWrapper>
                    <LinkWrapper>
                        <p>Already have an account? <Link href="/auth/login">Login</Link></p>
                    </LinkWrapper>
                </FormWrapper>
            </Wrapper>
        </>
    );
};

export default Signup;
