"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { assets } from "@/public/data";
import { useAppContext } from "@/context/AppContext";

function Header() {
  const {getCartCount} = useAppContext()
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/collection" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav
      className={`${
        !isHomePage ? "bg-white" : "bg-transparent"
      } w-full fixed top-0 left-0 flex items-center justify-between py-4 px-5 md:px-10 shadow-md z-50 transition-all`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1">
        <Image src={assets.logo} height={33} width={33} alt="LogoIcon" />
        <h3 className="text-2xl hidden sm:block">
          Ama<span className="text-destructive font-bold">Son</span>
        </h3>
      </Link>

      <div className="hidden sm:flex items-center gap-8">
        <div className="flex gap-4 md:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 font-medium ${
                pathname === link.href &&
                "border-b border-destructive text-destructive"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Burger first */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden z-50"
          aria-label="Menu"
        >
          <Image src={assets.menu} height={25} width={25} alt="menuIcon" />
        </button>

        {/* Basket */}
        <Link href="/cart" className="relative cursor-pointer">
          <Image src={assets.basket} height={25} width={25} alt="basketIcon" />
          <button className="absolute -top-3 -right-2 text-xs text-white bg-destructive w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </Link>

        {/* Login */}
        <button className="btn-destructive flexCenter gap-1 px-4">
          <Image
            src={assets.user}
            height={19}
            width={19}
            alt="userIcon"
            className="invert-100"
          />
          Login
        </button>
      </div>

      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-white shadow-md flex-col items-start px-5 py-4 sm:hidden z-40`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`py-2 font-medium ${
              pathname === link.href &&
              "border-b border-destructive text-destructive"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Header;
