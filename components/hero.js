import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    console.log("scroll_inView", inView);
    if (inView) {
      animation.start({
        y: 8,
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        y: 500,
      });
    }
  }, [inView, animation]);

  return (
    <>
      <div
        className="max-w-screen-xl px-6 grid 
    grid-cols-1 
    md:grid-cols-1 
    xl:grid-cols-2 
    lg:grid-cols-2
    items-center
    md:px-16 
    lg:px-16 
    xl:px-16 
    mx-auto"
      >
        <div className="w-full">
          <h1 className="pt-8 xl:pt-0 lg:pt-0 text-5xl text-slate-900 font-bold text-center sm:text-left">
            There’s something <br /> new in the air
          </h1>
          <p className="pb-6 pt-4 xl:pt-12 lg:pt-12 xl:pb-12 lg:pb-12 text-lg text-gray-600 text-center sm:text-left">
            NOZE is an AI powered air quality monitor that works to <br /> keep
            you safe. Breathe easy.
          </p>
          <button className="bg-purple-700 hover:bg-purple-800 duration-300 text-white text-sm py-3 px-4 rounded-md hidden lg:flex">
            Join the waitlist
          </button>
        </div>
        {/* Banner  */}
        <div ref={ref} className="flex justify-start overflow-hidden">
          <motion.div
            animate={animation}
            className="bg-white mt-0 lg:mt-8 xl:mt-8 lg:px-0 xl:px-0 md:px-24"
          >
            <Image
              src="/images/NOZE_Device.png"
              alt="Noze"
              width="460"
              height="540"
              priority
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
