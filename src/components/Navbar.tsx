"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Logo from "./Logo";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Logo />
      
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <Link href={"/aboutus"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Us"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Categories">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink  href="/pain-relief">Pain Relief</HoveredLink>
            <HoveredLink href="/allergy">Allergy</HoveredLink>
            <HoveredLink href="/digestive-health">Digestive Health</HoveredLink>
            <HoveredLink href="/skincare">Skincare</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
