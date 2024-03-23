"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import EmailLink from "./EmailLink";
import Link from "next/link";

function ContactUS() {
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
        <Link  href={`mailto:${"ishanmedicose8684@gmail.com"}`}>
          <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Email
          </button>
        </Link>
        
          <Link target="_blank" href={"https://maps.app.goo.gl/DDfd3jsWuz6FgkWp9"}>
          <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Location
          </button>
          </Link>

          <Link target="_blank" href={"https://www.instagram.com/ishan_medicose123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}>
          <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Instagram
          </button>
          </Link>

        </motion.div>
      </AuroraBackground>
    </div>
  );
}

export default ContactUS;
