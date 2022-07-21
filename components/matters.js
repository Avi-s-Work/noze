import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function Matters() {
  const [matters, setMatters] = useState([]);
  const [selectedMatter, SetSelectedMatter] = useState([]);

  const [click, setClick] = useState(0);

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
        y: 100,
        opacity: 0,
      });
    }
  }, [inView, animation]);

  useEffect(() => {
    fetch("/matters.json")
      .then((res) => res.json())
      .then((data) => setMatters(data));
  }, []);

  //Select Matter Click Handler
  const clickSingleMatter = (matter) => {
    setClick(click + 1);
    console.log(click);
    const singleMatter = [matter];
    SetSelectedMatter(singleMatter);
  };
  return (
    <>
      <div ref={ref} className="w-full mt-32">
        <motion.div animate={animation}>
          <h1 className="text-5xl text-slate-900 font-bold text-center">
            What you can’t see matters.
          </h1>
          <p className="mt-12 text-lg text-gray-600 text-center">
            NOZE also monitors a range of other pollutants to help make indoor{" "}
            <br />
            spaces safer places to live, work, and visit.
          </p>
        </motion.div>
        <section className="max-w-screen-xl py-24 px-16 flex items-center justify-between mx-auto ">
          {/* Heading  */}
          <div className="w-3/5 px-4">
            {matters.map((matter) => (
              <div key={matter._id} matter={matter}>
                <button
                  id="clicker"
                  className="text-purple-300 text-xl font-bold hover:font-light focus:text-purple-900 hover:text-purple-500 mb-4"
                  onClick={() => clickSingleMatter(matter)}
                >
                  {matter.button}
                </button>
              </div>
            ))}
          </div>
          {/* Check In Details  */}
          <div className="w-full">
            {!click ? (
              <div
                className="rounded-full relative overflow-hidden"
                style={{ width: "817px", height: "517px" }}
              >
                <Image
                  src="/images/matters1.png"
                  alt=""
                  layout="fill"
                  priority
                  className="absolute"
                ></Image>
                <h1 className="absolute text-center text-white text-4xl top-36 left-28 right-28">
                  Clouds our thinking, lowers productivity & affects our sleep.
                </h1>
                <p className="absolute text-center text-white text-lg text-semibold bottom-28 left-40 right-40">
                  Exhaled breath from people & pets and open flames are the most
                  common sources.
                </p>
              </div>
            ) : (
              <div></div>
            )}
            {selectedMatter.map((singleMatters) => (
              <div
                className="rounded-full relative overflow-hidden"
                style={{ width: "817px", height: "517px" }}
                key={singleMatters._id}
              >
                <Image
                  src={singleMatters.imgUrl}
                  alt=""
                  layout="fill"
                  priority
                  className="absolute"
                ></Image>
                <h1 className="absolute text-center text-white text-4xl top-36 left-28 right-28">
                  {singleMatters.matterTitle}
                </h1>
                <p className="absolute text-center text-white text-lg text-semibold bottom-28 left-40 right-40">
                  {singleMatters.matterDescription}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
