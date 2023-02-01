import React, {ReactNode, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store, useAppDispatch, useAppSelector} from "./redux/store";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home.page";
import LoginPage from "./pages/auth/login.page";
import {identify} from "./api";
import {selectAuth, setUser} from "./redux/slices/authSlice";
import DashboardPage from "./pages/dashboard/dashboard.page";
import UserPage from "./pages/user/user.page";
import UserUpload from "./pages/user/user.upload";
import SignupPage from "./pages/auth/signup.page";

const router = createBrowserRouter(
    createRoutesFromElements([
        <>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/auth/login" element={<LoginPage/>}/>
            <Route path="/auth/signup" element={<SignupPage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/user/:username" element={<UserPage/>}/>
            <Route path={"/user/upload"} element={<UserUpload/>}/>
        </>
    ])
)

// const AuthWrapper = (props: { children: ReactNode }) => {
//     const dispatch = useAppDispatch();
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         (async () => {
//             const user = await identify();
//             dispatch(setUser(user));
//             setLoading(false);
//         })();
//     }, []);
//
//     return (
//         <>
//             {loading ? <div>Laden...</div> : props.children}
//         </>
//     )
// }

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<AuthWrapper>*/}
            <RouterProvider router={router}/>
            {/*</AuthWrapper>*/}
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
