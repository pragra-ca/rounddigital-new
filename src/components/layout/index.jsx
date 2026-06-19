import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-ink">
      <Navbar />
      <main className="flex-grow pt-14">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
