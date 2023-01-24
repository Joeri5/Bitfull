import React from 'react';
import Head from "next/head";
import TopBar from "@/components/menu/top.bar";
import Sidebar from "@/components/menu/side.bar";
import BottomBar from "@/components/menu/bottom.bar";
import OverlayMenu from "@/components/menu/overlay.menu";
import {useAppSelector} from "@/redux/store";
import {selectOverlayMenu} from "@/redux/slices/overlayMenuSlice";
import styled from "styled-components";
import SearchBar from "@/components/menu/search.bar";
import {selectSearch} from "@/redux/slices/searchSlice";


interface LayoutProps {
    children: React.ReactNode
    title: string
}


const ChildrenWrapper = styled.div`
  & > .search {
    transition: padding-top 0.5s ease-in-out;
    color: #fff;
    padding: 11.5rem 2rem 6.25rem 2rem;

    @media (min-width: 1024px) {
      transition: none;
      padding: 10.6875rem 3.125rem 0 9.1rem;
    }

    @media (min-width: 1280px) {
      transition: none;
      padding: 10.6875rem 3.125rem 0 10.1rem;
    }
  }

  & > .non_search {
    transition: padding-top 0.5s ease-in-out;
    color: #fff;
    padding: 6.25rem 2rem 6.25rem 2rem;

    @media (min-width: 1024px) {
      transition: none;
      padding: 10.6875rem 3.125rem 0 9.1rem;
    }

    @media (min-width: 1280px) {
      transition: none;
      padding: 10.6875rem 3.125rem 0 10.1rem;
    }
  }
`;

const Layout = ({children, title}: LayoutProps) => {
    const overlayMenu = useAppSelector(selectOverlayMenu);
    const search = useAppSelector(selectSearch);

    return (
        <>
            <Head>
                <title>Bitfull - {title}</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <link rel="icon" href="/logo.svg"/>
            </Head>
            <main>
                <TopBar/>
                <Sidebar/>
                <OverlayMenu/>
                <ChildrenWrapper style={{
                    display: overlayMenu ? "none" : ""
                }}>
                    <div className={`${search ? "search" : "non_search"}`}>
                        {children}
                    </div>
                </ChildrenWrapper>
                <div style={{
                    opacity: overlayMenu ? "0" : "1",
                    transition: "all 0.5s ease-in-out",
                    userSelect: overlayMenu ? "none" : "auto"
                }}>
                    <SearchBar/>
                </div>
                <BottomBar/>
            </main>
        </>
    );
};

export default Layout;
