import React from "react";
import Section from "./section";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="h-[6.1rem] fixed top-0 inset-x-0 px-6 bg-black/10 backdrop-blur-md z-50">
      <Section className="flex items-center justify-between h-full">
        <Link href="/">
          <Image
            src="/svg/logo-full.svg"
            alt="Vectorshield-logo"
            width={120}
            height={120}
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="text-xs flex gap-[4rem]">
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
          </ul>
        </nav>
        <button className="md:hidden">
          <Menu />
        </button>
      </Section>
    </header>
  );
};

export default Header;
