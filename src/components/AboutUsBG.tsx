"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import Footer from "./Footer";

function AboutUsBG() {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center">
              <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Ishan Medicose - A Medicinal Hub
              </h1>

              <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                Welcome to our pharmacy, your one-stop-shop for all your
                healthcare needs. We are dedicated to providing our customers
                with the best products and services to help them live healthy
                and happy lives.
              </p>

              <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                At our pharmacy, we understand that health is a personal matter,
                and that's why we offer a wide range of products to cater to
                every individual's needs. Whether you're looking for
                prescription medications, over-the-counter drugs, or health
                supplements, we've got you covered.
              </p>
              <div className="mt-4"></div>
              <p className="mt-10 md:mt-0 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                KEEP HEALTH CLOSE
              </p>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      <Footer />
    </div>
  );
}

export default AboutUsBG;
