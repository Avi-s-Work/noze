import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Important() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    // console.log("scroll_inView", inView);
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
      <div ref={ref} className="flex-col justify-center py-24 w-full">
        <div className="px-52 pb-16">
          <motion.h1
            animate={animation}
            className="text-center pb-12 text-5xl text-slate-900 font-bold"
          >
            What’s more important, form or function?
          </motion.h1>
          <motion.p
            animate={animation}
            className="text-center text-md text-gray-600"
          >
            We didn’t think it was fair to have to choose.
          </motion.p>
        </div>
        <video
          src="https://getnoze.com/wp-content/uploads/2021/08/WALP.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </>
  );
}
