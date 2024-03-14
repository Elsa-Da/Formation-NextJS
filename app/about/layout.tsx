import React from "react";
import { LayoutProps } from "../lib/types";

const AdminLayout = ({ children }: LayoutProps) => {
  return <div style={{ backgroundColor: "red" }}>{children}</div>;
};

export default AdminLayout;
