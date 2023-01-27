import React, {useEffect} from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../redux/store";
import {selectOverlayMenu} from "../../redux/slices/overlayMenuSlice";
import {overlayMenuTabs} from "../../data/menu.data";
import {Link} from "react-router-dom";
import {selectAuth} from "../../redux/slices/authSlice";
import {logout} from "../../api";

const Wrapper = styled.div`
  color: #fff;
  width: 100vw;
  height: 100%;
  background-image: url("https://media.graphassets.com/ZDX3n4mLRGCh37BD22F9");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 5.25rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Tabs = styled.div`
  padding: 6.25rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;

  & > a, button {
    display: flex;
    gap: 1.25rem;
    font-size: 1.75rem;
    text-transform: uppercase;

    &:hover {
      & > div > img {
        transform: translateX(0);
        opacity: 1;
      }
    }

    & > div > img {
      opacity: 0;
      transition: all 0.5s ease-in-out;
      transform: translateX(-5rem);

    }
  }

  & > button {
    background: none;
    border: none;
  }
`;

const OverlayMenu = () => {
    const overlayMenu = useAppSelector(selectOverlayMenu);
    const {user} = useAppSelector(selectAuth);

    if (typeof window !== 'undefined') {
        const menu = document.getElementById('overlay-menu');
        if (menu != null) {
            menu.style.height = `calc(${window.innerHeight}px - 5.25rem)`;
        }
    }

    const handleLogout = () => {
        try {
            logout();
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div
            id={'overlay-menu'}
            style={{
                position: "fixed",
                transform: overlayMenu ? "translateX(0)" : "translateX(-100vw)",
                transition: "all 0.3s ease-in-out",
            }}>
            <Wrapper id="overlayMenu">
                <Tabs>
                    {overlayMenuTabs.map((tab, index) => (
                        <Link to={tab.path} key={index} className="righteous">
                            {tab.title}
                            <div className="arrow">
                                <img src="./arrow.svg" alt="arrow"/>
                            </div>
                        </Link>
                    ))}
                    <Link to="/user/upload" className="righteous">
                        Upload
                    </Link>
                    {user && (
                        <>

                            <button className="righteous" onClick={() => handleLogout()}>
                                Logout
                            </button>
                        </>
                    )}
                </Tabs>
            </Wrapper>
        </div>
    );
};

export default OverlayMenu;
