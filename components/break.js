import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Break() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    console.log("scroll_inView", inView);
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 2 },
      });
    }

    if (!inView) {
      animation.start({
        y: 200,
        opacity: 0,
      });
    }
  }, [inView, animation]);
  return (
    <>
      <div
        ref={ref}
        className="max-w-screen-xl py-24 px-6 grid 
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
        {/* Text Detail  */}
        <div className="w-full">
          <motion.h1
            animate={animation}
            className="pb-16 text-5xl text-slate-900 font-bold text-center sm:text-left"
          >
            Break the Mold
          </motion.h1>
          <motion.p
            animate={animation}
            className="text-lg text-gray-600 text-center sm:text-left"
          >
            NOZE monitors the air for spores and other markers associated with
            the most common types of indoor mold. Our mold index will tell you
            if it’s likely that there’s mold around and whether your space is in
            danger of being a breeding ground.
          </motion.p>
        </div>
        {/* Video  */}
        <div className="flex justify-start overflow-hidden">
          <video
            src="https://getnoze.com/wp-content/themes/twentytwentyone/noze/assets/movies/NOZEabout2.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </>
  );
}
