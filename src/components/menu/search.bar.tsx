import React from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../redux/store";
import {selectSearch} from "../../redux/slices/searchSlice";
import {selectOverlayMenu} from "../../redux/slices/overlayMenuSlice";


const Wrapper = styled.div`
  height: 5.25rem;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  transition: all 0.5s ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const SearchWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  & > input {
    background: #1C1E1F;
    border: none;
    padding: 1rem 2.9375rem;
    width: 100%;
    border-radius: 10px;
    font-size: 0.9375rem;
    outline-color: #D088F1;
    color: #9B9C9F;

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

const SearchBar = () => {
    const search = useAppSelector(selectSearch);
    const overlayMenu = useAppSelector(selectOverlayMenu);

    return (
        <Wrapper style={{top: search ? "5.25rem" : "0", opacity: search ? "1" : "0"}}>
            <SearchWrapper>
                <input type="text" placeholder="Search" style={{userSelect: overlayMenu ? "none" : "auto"}}
                       disabled={overlayMenu ? true : false}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
            </SearchWrapper>
        </Wrapper>
    );
};

export default SearchBar;
