import React from 'react';
import styled from "styled-components";
import {bottomBarTabs} from "@/data/menu";
import {useRouter} from "next/router";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/redux/store";
import {toggleOverlayMenu} from "@/redux/slices/overlayMenuSlice";
import {selectSearch, toggleSearch} from "@/redux/slices/searchSlice";

const Wrapper = styled.div`
  height: 5.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  bottom: 0;
  position: fixed;
  background: rgba(255, 255, 255, 0.1);
  padding: 0 2rem 0 2rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.25rem;

  & .active {

    & > svg {
      color: #DC84F7;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #C534F2;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  & .non_active {
    & > svg {
      color: #9B9C9F;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #707175;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  & > button {
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
    }

    & > svg {
      color: #9B9C9F;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #707175;
      }
    }
  }
`;

const BottomBar = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const search = useAppSelector(selectSearch);

    console.log(search);

    return (
        <Wrapper id="bottom-bar">
            <IconWrapper>
                {bottomBarTabs.map((tab, index) => (
                    <Link href={tab.path} key={index}>
                        <div className={router.pathname === tab.path ? "active" : "non_active"}>
                            {tab.icon}
                        </div>
                    </Link>
                ))}
                <button onClick={() => dispatch(toggleSearch())}>
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51031 17.2096 6.60258 15.803 5.196C14.3965 3.78943 12.4887 2.99922 10.4995 2.99922C8.51035 2.99922 6.60262 3.78943 5.19605 5.196C3.78947 6.60258 2.99927 8.51031 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button onClick={() => dispatch(toggleOverlayMenu())}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.90625 7.03125H21.0937M3.90625 12.5H21.0937M3.90625 17.9687H21.0937"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </IconWrapper>
        </Wrapper>
    );
};

export default BottomBar;
