"use client";

import React, { useEffect, useState } from "react";
import Section from "./section";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const resizeListener = () => setIsOpen(false);

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <header className="h-header fixed top-0 inset-x-0 px-6 bg-black/10 backdrop-blur-md z-50">
      <Section className="flex items-center justify-between h-full">
        <Link href="/">
          <Image
            src="/svg/logo-full.svg"
            alt="Vectorshield-logo"
            width={120}
            height={120}
          />
        </Link>
        <nav className="fixed inset-0 md:relative">
          <ul
            className={clsx(
              "text-xs flex-col text-center max-md:py-20 max-md:text-background max-md:font-light space-y-[4rem] md:space-y-0 md:text-start md:flex-row md:flex gap-[4rem]",
              isOpen ? "inset-0 bg-white" : "hidden"
            )}
          >
            <li>
              {" "}
              <Link href="/features">Features</Link>
            </li>
            <li>
              {" "}
              <Link href="/features">How it Works?</Link>
            </li>
            <li>
              {" "}
              <Link href="/features">Contact Us</Link>
            </li>
            <button className="md:hidden" onClick={toggleMenu}>
              <X strokeWidth={2} />{" "}
            </button>
          </ul>
        </nav>
        <button className="z-10 md:hidden" onClick={toggleMenu}>
          <Menu />
        </button>
      </Section>
    </header>
  );
};

export default Header;
