import { ReportPage, ReportsPage, AuthPage } from '@/pages';

export const publicRoutes = [
    {
        path: "/auth",
        element: <AuthPage />,
    },
];

export const privateRoutes = [
    ...publicRoutes,
    {
        path: "/profile",
        element: <div>profile</div>,
    },
    {
        path: "/orders/:id",
        element: <ReportPage />
    },
    {
        path: "/orders",
        element: <ReportsPage />,
    },
];
