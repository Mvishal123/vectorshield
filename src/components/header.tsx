import React from "react";
import Section from "./section";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[6.1rem] fixed top-0 inset-x-0 px-6 bg-black/50 backdrop-blur-lg z-50">
      <Section className="flex items-center justify-between h-full">
        <Link href="/">
          <Image
            src="/svg/logo-full.svg"
            alt="Vectorshield-logo"
            width={120}
            height={120}
          />
        </Link>
        <nav>
            <ul className="text-xs flex gap-[4rem]">
                <li> <Link href="/features">Features</Link></li>
                <li> <Link href="/features">How it Works?</Link></li>
                <li> <Link href="/features">Contact Us</Link></li>
            </ul>
        </nav>
      </Section>
    </header>
  );
};

export default Header;
