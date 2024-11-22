import React from "react";
import ReactDOM from "react-dom/client";
import AdminPortal from "./components/AdminPortal";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const AppLayoutComponent = () => {
  return <AdminPortal />;
};

root.render(<AppLayoutComponent />);
