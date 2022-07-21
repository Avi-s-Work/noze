import Image from "next/image";
export default function Incredible() {
  return (
    <>
      <div className="max-w-screen-xl py-24 px-16 flex items-center justify-between mx-auto ">
        {/* Text Detail  */}
        <div className="w-3/5 border border-red-500">
          <h1 className="text-5xl text-indigo-900 font-bold text-left">
            Incredible <br /> power, right <br /> under your <br /> NOZE
          </h1>
        </div>
        {/* Video  */}
        <div className="w-full h-screen overflow-y-scroll incredible border border-red-500 grid grid-cols-2">
          <div className="w-full border border-purple-800 flex flex-col items-center">
            <div className="h-96 border-4 border-red-700 w-80 rounded-full relative overflow-hidden">
              <Image
                src="/images/wondering.png"
                alt="Noze"
                layout="fill"
                className="absolute"
                priority
              />
            </div>
            <div>
              <span>Check in.</span>
              <br />
              <span>
                Keep an eye on things in real-time so you can have peace of mind
                all the time.
              </span>
            </div>
          </div>
          <div className="w-full border border-purple-800">01</div>
          <div className="w-full border border-purple-800">01</div>
          <div className="w-full border border-purple-800">01</div>
          <div className="w-full border border-purple-800">01</div>
          <div className="w-full border border-purple-800">01</div>
        </div>
      </div>
    </>
  );
}
