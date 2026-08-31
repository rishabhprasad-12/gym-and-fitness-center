import React from "react";
import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import DashboardRoutes from "./routes/CustomerRoutes";
import AppRoutes from "./routes/AppRoutes";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <AppRoutes />
    </div>
  );
};

export default App;
