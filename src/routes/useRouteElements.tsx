import { useRoutes } from "react-router-dom";
import { PATH } from "../paths";
import { Suspense, lazy } from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";

/**
 * @description
 * Lazy loading for components
 */
const HomePage = lazy(() => import("../pages/home"));
const BoardPage = lazy(() => import("../pages/board"));
const LoginPage = lazy(() => import("../pages/auth/Login"));
const RegisterPage = lazy(() => import("../pages/auth/Register"));
const ErrorPage = lazy(() => import("../pages/error"));

//...

/**
 * @description
 * Define routes
 * 
 * @returns 
 * Routing elements
 */

const useRouteElements = (): any => {
    const elements = useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: PATH.HOME,
                    index: true,
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <HomePage />
                        </Suspense>
                    ),
                },
                {
                    path: PATH.BOARD,
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <BoardPage />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "",
            element: <AuthLayout />,
            children: [
                {
                    path: PATH.LOGIN,
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <LoginPage />
                        </Suspense>
                    )
                },
                {
                    path: PATH.REGISTER,
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <RegisterPage />
                        </Suspense>
                    )
                }
            ]
        },
        {
            path: PATH.ADMIN,
            element: <AdminLayout />,
            children: [
                {
                    path: "",
                    index: true,
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <>Admin Content here....</>
                        </Suspense>
                    )
                }
            ]
        },
        {
            path: "*",
            element: (
                <Suspense fallback={<div>Loading</div>}>
                    <ErrorPage error={"404 Not Found"} />
                </Suspense>
            ),
        }
    ]);

    return elements;
};

export default useRouteElements;
