import { Navigate, useRoutes } from "react-router-dom";
import Invoices from "./pages/Invoices";
import Expenses from "./pages/Expenses";
import Invoice from "./pages/invoice";
import { Layout } from "./layout";

export default function Router() {
  return useRoutes([
    {
      path:"/",
      element:<Layout />
    },
    {
      path: "/invoices",
      element: <Invoices />,
      children: [{ path:":invoiceId", element: <Invoice /> }],
    },
    {
      path: "/expenses",
      element: <Expenses />,
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
