import React from 'react';
import styled from "styled-components";

interface FeaturedTitleProps {
    colorBefore?: string
    title: string
    colorAfter?: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h3 {
    font-size: 1.25rem;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.75rem;
    }

    span {
      color: #DC84F7;
    }
  }

  & > button {
    background: #202324;
    border: none;
    border-radius: 30px;
    padding: 0.75rem 1.25rem;

    @media (min-width: 768px) {
      padding: 0.75rem 1.5rem;
    }

    @media (min-width: 1024px) {
      padding: 0.75rem 2rem;
    }

    & > span {
      font-size: 0.75rem;
      color: #ffffff;

      @media (min-width: 768px) {
        font-size: 0.875rem;
      }
    }
  }
`;

const FeaturedTitle = ({colorBefore, title, colorAfter}: FeaturedTitleProps) => {
    return (
        <Wrapper>
            <h3>
                <span>{colorBefore}</span>
                {title}
                <span>{colorAfter}</span>
            </h3>
            <button>
                <span>View All</span>
            </button>
        </Wrapper>
    );
};

export default FeaturedTitle;
