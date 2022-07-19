import Image from "next/image";
export default function Wondering() {
  return (
    <>
      <div
        className="max-w-screen-xl py-24 px-36 grid 
    grid-cols-1 
    md:grid-cols-1 
    xl:grid-cols-2 
    lg:grid-cols-2
    items-center 
    mx-auto"
      >
        {/* Image Masking */}
        <div className="flex items-center justify-center border border-emerald-400">
          <div className="bg-red-400 h-96 w-96 rounded-full">
            <Image
              src="/../public/images/wondering.png"
              alt="Noze"
              layout="fill"
            />
          </div>
        </div>
        {/* Text Detail  */}
        <div className=" flex justify-end border border-emerald-400">
          <div>
            <h1 className="pb-6 text-5xl text-slate-900 font-bold text-center sm:text-left">
              Wondering if <br /> you should get <br /> a NOZE?
            </h1>
            <p className="text-lg text-gray-600 text-center sm:text-left">
              Any way you slice it, it’s a no brainer.
            </p>
            <ol className="pt-10 wondering-list text-lg">
              <li>Reduce Virus spread</li>
              <li>Watch out for Mold</li>
              <li>Keep Asthma in check</li>
              <li>Avoid Allergy flare ups</li>
              <li>Improve your Sleep</li>
              <li>Boost Productivity & Focus</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
