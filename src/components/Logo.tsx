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
    const handleResize = () => {
      updateWidth();
    };
  
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      updateWidth();
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const logoWidth = width < 768 ? 50 : 150;
  const logoHeight = width < 768 ? 27 : 70;

  return (
    <div className="fixed top-5 left-5 md:top-2 md:left-2">
      <Link href="/">
        <Image
          src="/Logo/logo-white.png"
          alt="Logo"
          width={logoWidth}
          height={logoHeight}
          layout="fixed"
          className="relative"
        />
      </Link>
    </div>
  );
};

export default Logo;
