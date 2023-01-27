import React from 'react';
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  padding: 1.5625rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 2.5rem 0;
    width: calc(100vw - 7.125rem);
  }

  & > p {
    display: flex;
    align-items: center;

    & > span {
      text-transform: uppercase;

      & > img {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
`;

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <Wrapper>
            <p>
                &copy; {year} &nbsp;
                <span>
                    <img src="./logo.svg" alt=""/>
                </span>
                &nbsp; <span className="righteous">bitfull</span>&nbsp;- All rights reserved
            </p>
        </Wrapper>
    );
};

export default Footer;
