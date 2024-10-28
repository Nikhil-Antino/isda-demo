"use client";

import React, { useEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../shared/Button";
import { FiX, FiMenu } from "react-icons/fi";
import cn from "classnames";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767.98px)");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [isMobile]);

  return (
    <nav
      className={cn(
        "flex items-center gap-x-8 justify-between lg:justify-evenly py-4 px-4 relative bg-primary-dark sticky -top-1 z-40"
      )}
    >
      <section className="text-white">
        <Image
          src="/images/logo/7.png"
          alt="logo"
          width={250}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
      </section>

      <div className="lg:hidden">
        <button className="outline-none z-1" onClick={toggleMenu}>
          {isOpen ? (
            <FiX className="h-8 w-8 text-white" />
          ) : (
            <FiMenu className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      {isOpen && <MobileNavBar toggleMenu={toggleMenu} />}

      <section className="hidden lg:block">
        <ul className="flex items-center gap-x-6 text-white">
          <li className="text-lg font-medium">
            <Link href={"#career-path"}>Career Path</Link>
          </li>

          <li className="text-lg font-medium">
            <Link href={"#success-stories"}>Success Stories</Link>
          </li>

          <li className="text-lg font-medium">
            <Link href={"#program"}>Program</Link>
          </li>

          <li className="text-lg font-medium">
            <Link href={"#FAQs"}>FAQs</Link>
          </li>
        </ul>
      </section>

      <section className="hidden lg:flex items-center gap-x-5">
        <PrimaryButton size="large">SIGN IN</PrimaryButton>
      </section>
    </nav>
  );
}

export default NavBar;

function MobileNavBar({ toggleMenu }) {
  return (
    <section className="absolute top-full left-0 w-full bg-primary-dark flex flex-col gap-y-8 items-center px-4 py-5 z-10">
      <ul className="flex flex-col items-center gap-y-4 text-white">
        <li className="text-lg font-medium" onClick={toggleMenu}>
          <Link href={"#career-path"}>Career Path</Link>
        </li>

        <li className="text-lg font-medium" onClick={toggleMenu}>
          <Link href={"#success-stories"}>Success Stories</Link>
        </li>

        <li className="text-lg font-medium" onClick={toggleMenu}>
          <Link href={"#program"}>Program</Link>
        </li>

        <li className="text-lg font-medium" onClick={toggleMenu}>
          <Link href={"#FAQs"}>FAQs</Link>
        </li>
      </ul>

      <div className="grid gap-y-6 w-full">
        <PrimaryButton>SIGN IN</PrimaryButton>
      </div>
    </section>
  );
}
