import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Landing from "./pages/Landing";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import Link from "./pages/link";
import RedirectLink from "./pages/redirect-link";
import UrlProvider from "./context";
import RequireAuth from "./components/require-auth";
import NotFound from "./pages/not-found";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Landing />,
            },
            {
                path: "/auth",
                element: <Auth />,
            },
            {
                path: "/dashboard",
                element: (
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                ),
            },
            {
                path: "/link/:id",
                element: (
                    <RequireAuth>
                        <Link />
                    </RequireAuth>
                ),
            },
            {
                path: "/rd/:id",
                element: <RedirectLink />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

function App() {
    return (
        <UrlProvider>
            <RouterProvider router={router} />
        </UrlProvider>
    );
}

export default App;
