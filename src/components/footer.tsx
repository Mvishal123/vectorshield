import React from "react";
import Section from "./section";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <Section className="py-10 flex items-center justify-between">
        <div>
          <Image src="/svg/logo-full.svg" alt="logo" width={100} height={100} />
        </div>
        <nav>
            <ul className="flex items-center [&_li]:text-xs [&_li]:font-light gap-20">
                <li><Link  href="/about">About</Link></li>
                <li><Link  href="/privacypolicy">Privacy Policy</Link></li>
                <li><Link  href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
      </Section>
    </footer>
  );
};

export default Footer;
