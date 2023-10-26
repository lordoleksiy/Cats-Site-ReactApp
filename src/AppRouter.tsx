import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/layout/Layout.tsx";
import {Gallery} from "./components/gallery/gallery.tsx";
import {Profile} from "./components/profile/profile.tsx";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Gallery />
            },
            {
                path: '/profile',
                element: <Profile />
            }]
    }]);
