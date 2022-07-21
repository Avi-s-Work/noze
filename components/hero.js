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
          {/* Modal  */}
          <div>
            <label
              htmlFor="my-modal-3"
              className="w-1/4 bg-purple-700 hover:bg-purple-800 duration-300 text-white text-sm py-3 px-4 rounded-md hidden lg:flex justify-center border-0 modal-button cursor-pointer"
            >
              <span>Join the waitlist</span>
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="text-slate-900 font-bold cursor-pointer absolute right-6 top-4"
                >
                  ✕
                </label>
                <h1 className="pt-10 text-4xl text-slate-900 font-black text-center">
                  Be the first to know
                </h1>
                <p className="pb-6 pt-8 text-gray-600 text-center">
                  Leave us your details and we’ll keep you <br /> up to date
                  about NOZE.
                </p>
                {/* form  */}
                <form className="w-full max-w-lg">
                  <div className="flex flex-col items-center">
                    <input
                      className="w-2/4 block text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400 mb-2 text-sm"
                      type="text"
                      placeholder="Full Name"
                    />
                    <input
                      className="w-2/4 block text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400 mb-2 text-sm"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className="w-2/4 block text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400 mb-2 text-sm"
                      type="email"
                      placeholder="Email"
                    />
                    <button
                      type="submit"
                      className="bg-purple-700 w-2/4 hover:bg-purple-800 duration-300 text-white text-sm py-3 px-4 rounded-md mt-5 mb-12"
                    >
                      Join the waitlist
                    </button>
                  </div>
                </form>
                {/* form  */}
              </div>
            </div>
          </div>
          {/* Modal  */}
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
