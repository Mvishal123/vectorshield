import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
