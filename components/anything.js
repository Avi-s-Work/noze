import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
export default function Anything() {
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
        y: 100,
        opacity: 0,
      });
    }
  }, [inView, animation]);
  return (
    <>
      <div
        ref={ref}
        className="relative max-w-screen-xl mt-48 mb-6 flex
    items-center 
    mx-auto"
      >
        {/* video */}
        <section className="h-screen">
          <div
            style={{ width: "65%" }}
            className="absolute -right-20 overflow-x-hidden"
          >
            <video
              src="https://getnoze.com/wp-content/themes/twentytwentyone/noze/assets/movies/m_about1.mp4"
              autoPlay
              loop
              muted
            ></video>
            <p className="text-center">Engineered by Stratuscent inc.</p>
          </div>
        </section>
        {/* Text Detail  */}
        <section className="w-full pl-28 h-screen">
          <div className="absolute">
            <motion.h1
              animate={animation}
              className="pb-12 text-5xl text-slate-900 font-bold text-left"
            >
              Anything but <br /> ordinary.
            </motion.h1>
            <motion.p
              animate={animation}
              className="text-lg text-gray-600 text-left"
            >
              Some would say it’s out of this world. That’s not far off.
            </motion.p>
            {/* Accordion  */}
            <div
              style={{ height: "200px" }}
              className="mt-20 overflow-y-scroll incredible"
            >
              <div className="mb-12 border-l-2 border-slate-800 pl-8">
                <h1
                  animate={animation}
                  className="pb-4 text-lg text-slate-900 font-bold text-left"
                >
                  NASA INSPIRED
                </h1>
                <p
                  animate={animation}
                  className="text-md text-gray-600 text-left"
                >
                  NOZE is powered by a single sensor built on years of NASA
                  <br />
                  innovation. Our technology raises the bar to new heights
                  <div className="tooltip mx-1" data-tip="For more click here.">
                    <div>
                      <Image
                        src="/images/info.svg"
                        alt="Noze"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  by <br /> using the digital sense of smell to keep track of
                  the air you’re breathing.
                </p>
              </div>
              <div className="border-l-2 border-slate-800 pl-8">
                <h1
                  animate={animation}
                  className="pb-4 text-lg text-slate-900 font-bold text-left"
                >
                  ENGINEERED TO THINK
                </h1>
                <p
                  animate={animation}
                  className="text-md text-gray-600 text-left"
                >
                  NOZE uses artificial intelligence to decode the air around you
                  in <br /> real-time, all the time. It actively samples the air
                  every second and <br /> breaks things down into specifics so
                  that you can act while <br /> it matters.
                </p>
              </div>
            </div>
            {/* Accordion  */}
          </div>
        </section>
      </div>
    </>
  );
}
