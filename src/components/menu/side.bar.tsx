import React from 'react';
import styled from "styled-components";
import {sideBarTabs} from "../../data/menu.data";
import {Link, useLocation} from "react-router-dom";

const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 11.6875rem;
  width: 7.125rem;
  height: calc(100vh - 11.6875rem);

  @media (min-width: 1024px) {
    display: flex;
  }
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.25rem;

  & .active {
    border-left: 2.5px solid #DC84F7;

    & > svg {
      color: #DC84F7;
      margin-left: calc(3rem - 2.5px);
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
      margin-left: 3rem;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #707175;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const Sidebar = () => {
    const router = useLocation();

    return (
        <Wrapper>
            <IconWrapper>
                {sideBarTabs.map((tab, index) => (
                    <Link to={tab.path} key={index}>
                        <div className={router.pathname === tab.path ? "active" : "non_active"}>
                            {tab.icon}
                        </div>
                    </Link>
                ))}
            </IconWrapper>
        </Wrapper>
    );
};

export default Sidebar;
