"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      <div className="fixed top-5 left-5 md:top-2 md:left-2">
        <Link href="/" >
          <Image
            src="/Logo/logo-white.png"
            alt="Logo"
            width={width < 1024 ? "70" : "250"}
            height={width < 1024 ? "15" : "74"}
            className="relative"
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
