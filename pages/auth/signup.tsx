import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import AuthBackground from "@/components/auth/background.auth";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
`;

const Signup = () => {
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
        <Wrapper id="auth-signup" style={{height: height}}>
            <AuthBackground/>
        </Wrapper>
    );
};

export default Signup;
