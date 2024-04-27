import { createBrowserRouter, useLocation } from 'react-router-dom';
import React, { ReactNode, useEffect } from 'react';
import { AppLayout } from '../layouts';
import { ErrorPage, HomePage } from '../pages';

// Custom scroll restoration function
export const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        }); // Scroll to the top when the location changes
    }, [pathname]);

    return null; // This component doesn't render anything
};

type PageProps = {
    children: ReactNode;
};

// Create an HOC to wrap your route components with ScrollToTop
const PageWrapper = ({ children }: PageProps) => {
    return (
        <>
            <ScrollToTop />
            {children}
        </>
    );
};

// Create the router
const router = createBrowserRouter([
    {
        path: '/',
        element: <PageWrapper children={<AppLayout />} />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '',
                element: <HomePage />,
            },
        ],
    },
]);

// eslint-disable-next-line react-refresh/only-export-components
export default router;
