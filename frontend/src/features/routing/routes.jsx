import { ReportPage, ReportsPage } from '@/pages';

export const publicRoutes = [
    {
        path: "/auth",
        element: <div>auth</div>,
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
