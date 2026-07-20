import { useRoutes } from "react-router-dom";

import publicRoutes from "./PublicRoutes";
import adminRoutes from "./AdminRoutes";
import customerRoutes from "./CustomerRoutes";

const AppRoutes = () => {
    return useRoutes([
        ...publicRoutes,
        ...adminRoutes,
        ...customerRoutes,
        {
            path: "*",
            element:<h1>404 page not found</h1>
        }
    ])
}

export default AppRoutes;