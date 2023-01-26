import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  & > img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;

    @media (min-width: 1024px) {
      width: 50vw;
    }
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  color: #ffffff;
  padding: 2rem 2rem;
  @media (min-width: 1024px) {
    padding: 2rem 3.125rem;
  }
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

const AuthBackground = () => {
    let [height, setHeight] = React.useState(0);

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
        <Wrapper id="auth-background" style={{height: height}}>
            <ContentWrapper>
                <Logo src="/logo.svg" alt="bitfull logo"/>
                <LogoDesktop>
                    <img src="/logo_desktop.svg" alt="bitfull logo"/>
                    <h1 className="righteous">bitfull</h1>
                </LogoDesktop>
            </ContentWrapper>
            <ImageWrapper>
                <img src="/background.svg" alt=""/>
            </ImageWrapper>
        </Wrapper>
    );
};

export default AuthBackground;
