import Header from "@/components/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Header />
      <div className="mt-[18.4rem]">{children}</div>
    </main>
  );
};

export default Layout;
