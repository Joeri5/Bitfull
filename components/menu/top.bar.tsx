import React from 'react';
import styled from 'styled-components';
import Link from "next/link";
import {topBarTabs} from "@/data/menu.data";

const Wrapper = styled.nav`
  padding: 2rem 2rem;
  position: fixed;
  display: flex;
  align-items: center;
  height: 5.25rem;
  width: 100vw;
  z-index: 10;
  backdrop-filter: blur(10px);

  @media (min-width: 1024px) {
    padding: 2rem 3.125rem;
    height: 8.125rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Logo = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const LogoDesktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  & > h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  @media (min-width: 1280px) {
    gap: 3rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  & > .login {
    color: #fff;

    &:hover {
      opacity: 0.8;
    }
  }

  & > .sign_up {
    background: #D088F1;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;

    &:hover {
      background: #E194F8;
    }

    &:active {
      background: #D364F5;
    }
  }
`;

const TabWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;

    & > a {
      text-transform: uppercase;
      font-size: 0.9375rem;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (min-width: 1280px) {
    gap: 2.25rem;
  }

  @media (min-width: 1300px) {
    gap: 3.75rem;
  }
`;

const SearchWrapper = styled.div`
  display: none;
  max-width: 30rem;
  position: relative;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    width: 20%;
  }

  @media (min-width: 1280px) {
    width: 100%;
  }

  & > input {
    background: #1C1E1F;
    border: none;
    padding: 1rem 2.9375rem;
    width: 100%;
    border-radius: 10px;
    font-size: 0.9375rem;
    outline-color: #D088F1;

    &::placeholder {
      color: #9B9C9F;
      font-size: 0.8125rem;
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2pt #D088F1;
    }
  }

  & > svg {
    position: absolute;
    left: 0.5625rem;
    width: 1.5rem;
    height: 1.5rem;
    color: #9B9C9F;
  }
`;


const TopBar = () => {
    return (
        <Wrapper>
            <Container>
                <Logo src="/logo.svg" alt="bitfull logo"/>
                <LogoDesktop>
                    <img src="/logo_desktop.svg" alt="bitfull logo"/>
                    <h1 className="righteous">bitfull</h1>
                </LogoDesktop>
                <TabWrapper>
                    {topBarTabs.map((tab, index) => (
                        <Link href={tab.path} key={index} className="righteous">
                            {tab.title}
                        </Link>
                    ))}
                </TabWrapper>
                <SearchWrapper>
                    <input type="text" placeholder="Search"/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                </SearchWrapper>
                <LinkWrapper>
                    <Link href={'/auth/login'} className="login">
                        Login
                    </Link>
                    <Link href={'/auth/signup'} className="sign_up">
                        Sign Up
                    </Link>
                </LinkWrapper>
            </Container>
        </Wrapper>
    );
};

export default TopBar;
