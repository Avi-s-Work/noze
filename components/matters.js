import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function Matters() {
  const [matters, setMatters] = useState([]);
  const [selectedMatter, SetSelectedMatter] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-earth-60925.herokuapp.com/stations")
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
                <button onClick={() => clickSingleMatter(matter)}>
                  {matter.stationName}
                </button>
              </div>
            ))}
          </div>
          {/* Check In Details  */}
          <div className="w-full h-screen border border-red-700">
            {selectedMatter.map((singleMatters) => (
              <div key={singleMatters._id}>
                <h1>{singleMatters.frequency}</h1>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
