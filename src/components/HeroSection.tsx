import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-100 to-green-400 ">
        Ishan Medicose - A Medicinal Hub
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto ">
        At our pharmacy, we understand that health is a personal matter, and that's why we offer a wide range of products to cater to every individual's needs.
        </p>
        <div className="mt-4">
          <Link href={"/aboutus"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
