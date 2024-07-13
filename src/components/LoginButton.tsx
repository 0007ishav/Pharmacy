"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LoginButton = () => {
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

  const loginButtonWidth = width < 768 ? 40 : 150;
  const loginButtonHeight = width < 768 ? 27 : 70;

  const handleLoginClick = () => {
    // Replace with your backend authentication sign-in URL
    const signInUrl = "https://pharmacy-backend-smoky.vercel.app/sign-in";
    window.location.href = signInUrl;
  };

  return (
    <div
      className="fixed top-3 right-12 md:top-2 md:right-2 flex justify-center items-center"
      style={{ width: `${loginButtonWidth}px`, height: `${loginButtonHeight}px` }}
    >
      
      <button onClick={handleLoginClick} className="px-3 py-2 rounded-xl border border-neutral-600 text-black bg-white  hover:bg-green-700 transition duration-200">
  Login/Signup
</button>
      
    </div>
  );
};

export default LoginButton;


