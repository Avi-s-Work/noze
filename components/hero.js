import Image from "next/image";
import Link from "next/link";
export default function Hero() {
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
    mx-auto 
    text-gray-900"
      >
        <div className="w-full">
          <h1 className="text-5xl text-slate-900 font-bold">
            There’s something <br /> new in the air
          </h1>
          <p className="pb-12 pt-12 text-lg text-gray-600">
            NOZE is an AI powered air quality monitor that works to <br /> keep
            you safe. Breathe easy.
          </p>
          <button className="bg-purple-700 hover:bg-purple-800 duration-300 text-white text-sm py-3 px-4 rounded-md">
            Join the waitlist
          </button>
        </div>
        {/* Banner  */}
        <div className="flex justify-start">
          <div
            className="bg-white 
      mt-16
      lg:mt-10 
      xl:mt-10
      lg:px-0
      xl:px-0
      md:px-24"
          >
            <Image
              src="/../public/images/NOZE-Hero-1.png"
              alt="Noze"
              width="460"
              height="540"
            />
          </div>
        </div>
      </div>
    </>
  );
}
