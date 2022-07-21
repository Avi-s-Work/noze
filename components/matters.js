import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function Matters() {
  const [matters, setMatters] = useState([]);
  const [selectedMatter, SetSelectedMatter] = useState([]);

  useEffect(() => {
    fetch("/matters.json")
      .then((res) => res.json())
      .then((data) => setMatters(data));
  }, []);

  //Select Matter Click Handler
  const clickSingleMatter = (matter) => {
    const singleMatter = [matter];
    SetSelectedMatter(singleMatter);
  };
  return (
    <>
      <div className="w-full">
        <h1 className="px-6 text-5xl text-slate-900 font-bold text-center">
          What you can’t see matters.
        </h1>
        <section className="max-w-screen-xl py-24 px-16 flex items-center justify-between mx-auto ">
          {/* Heading  */}
          <div className="w-3/5">
            {matters.map((matter) => (
              <div key={matter._id} matter={matter}>
                <button
                  className="text-purple-300 text-xl font-bold hover:font-light focus:text-purple-900 hover:text-purple-500 mb-4"
                  onClick={() => clickSingleMatter(matter)}
                >
                  {matter.button}
                </button>
              </div>
            ))}
          </div>
          {/* Check In Details  */}
          <div className="w-full border border-red-700">
            {selectedMatter.map((singleMatters) => (
              <div
                className="rounded-full relative overflow-hidden"
                style={{ width: "817px", height: "517px" }}
                key={singleMatters._id}
              >
                <Image
                  src="/images/matters1.png"
                  alt=""
                  layout="fill"
                  priority
                  className="absolute"
                ></Image>
                <h1 className="absolute text-center text-white text-4xl top-28">
                  {singleMatters.matterTitle}
                </h1>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
