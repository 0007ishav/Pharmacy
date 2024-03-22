"use client";
import Footer from "@/components/Footer";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Link from "next/link";

function NotFound() {
  return (
    <div className="h-auto md:h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
            <Link href={"/"}>
          <p className="mt-10 md:mt-0 max-w-lg mx-auto text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            COMING SOON
          </p>
            </Link>
        
        </motion.h1>
      </LampContainer>
    </div>
  );
}

export default NotFound;

    