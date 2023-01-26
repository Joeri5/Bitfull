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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (min-width: 1024px) {
    padding: 2rem 3.125rem;
  }
`;

const LogoWrapper = styled.div`
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

const TextWrapper = styled.div`
  display: none;
  flex-direction: column;
  padding: 2rem 0;

  @media (min-width: 1024px) {
    gap: 1.5625rem;
    display: flex;
  }

  & > h1 {
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 4rem;
    }

    @media (min-width: 1280px) {
      font-size: 2.75rem;
    }

    @media (min-width: 1440px) {
      font-size: 3.25rem;
    }

    @media (min-width: 1536px) {
      font-size: 3.75rem;
    }
  }

  & > p {
    font-size: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
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
                <LogoWrapper>
                    <Logo src="/logo.svg" alt="bitfull logo"/>
                    <LogoDesktop>
                        <img src="/logo_desktop.svg" alt="bitfull logo"/>
                        <h1 className="righteous">bitfull</h1>
                    </LogoDesktop>
                </LogoWrapper>
                <TextWrapper>
                    <h1 className="righteous">PLAY, COMPETE,<br/>
                        FOLLOW POPULAR <br/>
                        STREAMERS <br/>
                    </h1>
                    <p>
                        The best streamers gather here to have a good time,
                        be among us, join us!
                    </p>
                </TextWrapper>
            </ContentWrapper>
            <ImageWrapper>
                <img src="/background.svg" alt=""/>
            </ImageWrapper>
        </Wrapper>
    );
};

export default AuthBackground;
