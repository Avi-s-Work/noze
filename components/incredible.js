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
          <div className="w-full flex flex-col items-center">
            <div className="bg-purple-200 h-96 w-80 rounded-full relative overflow-hidden flex items-center justify-center">
              <Image
                src="/images/check_in.png"
                alt="Noze"
                width="300"
                height="344"
                className="absolute"
              />
            </div>
            <div className="text-center pt-6">
              <strong className="font-bold">Check in.</strong>
              <br />
              <span className="">
                Keep an eye on things in real- <br /> time so you can have peace
                of <br /> mind all the time.
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
