import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { themeChange } from "theme-change";
import Footer from "./Footer";

export interface IWebsiteLayoutProps {
  children: React.ReactNode;
}

const WebsiteLayout: React.FC<IWebsiteLayoutProps> = function WebsiteLayout({
  children,
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
