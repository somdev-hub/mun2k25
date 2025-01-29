"use client";

import { useSidebar } from "@/components/context/SidebarContext";
import React, { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { showSidebar } = useSidebar();

  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showSidebar]);

  return <>{children}</>;
};

export default Layout;
