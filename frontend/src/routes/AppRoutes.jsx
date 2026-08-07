import { useRoutes } from "react-router-dom";

import publicRoutes from "./PublicRoutes";
import adminRoutes from "./AdminRoutes";
import customerRoutes from "./CustomerRoutes";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
    return useRoutes([
        ...publicRoutes,
        ...adminRoutes,
        ...customerRoutes,
        {
            path: "*",
            element: <ErrorPage />
        }
    ])
}

export default AppRoutes;