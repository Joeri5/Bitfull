import React, {useState} from 'react';
import Layout from "../../components/layout/layout";
import {Navigate} from "react-router-dom";
import {selectAuth} from "../../redux/slices/authSlice";
import {useAppSelector} from "../../redux/store";
import styled from "styled-components";

const Wrapper = styled.div`
`;

const DashboardPage = () => {
    const user = useAppSelector(selectAuth);

    if (!user) {
        return <Navigate to="/auth/login"/>;
    }
    return (
        <Layout title="dashboard">
            <Wrapper>

            </Wrapper>
        </Layout>
    );
};

export default DashboardPage;
