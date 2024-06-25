import { ReportPage, AddPage } from '@/pages';

export const publicRoutes = [
    {
        path: "/orders/:id",
        element: <ReportPage />
    },
    {
        path: "/add",
        element: <AddPage />
    }
];

export const privateRoutes = [
    ...publicRoutes
];
