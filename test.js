export const adminPaths = [
    {
        path: "dashboard",
        element: <AdminDashboard />,
    },
    {
        index: true,
        element: <AdminDashboard />,
    },
    {
        path: "create-admin",
        element: <CreateAdmin />,
    },
    {
        path: "create-faculty",
        element: <CreateFaculty />,
    },
    {
        path: "create-student",
        element: <CreateStudent />,
    },
];