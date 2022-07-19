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
        <div className="flex items-center justify-center">
          <div className="h-96 w-96 rounded-full relative overflow-hidden">
            <Image
              src="/../public/images/wondering.png"
              alt="Noze"
              layout="fill"
              className="absolute"
            />
          </div>
        </div>
        {/* Text Detail  */}
        <div className=" flex justify-end">
          <div>
            <h1 className="pb-6 text-5xl text-slate-900 font-bold text-center sm:text-left">
              Wondering if <br /> you should get <br /> a NOZE?
            </h1>
            <p className="text-lg text-gray-600 text-center sm:text-left">
              Any way you slice it, it’s a no brainer.
            </p>
            <ol className="pt-10 wondering-list text-lg">
              <li>&nbsp;1. Reduce Virus spread</li>
              <li>2. Watch out for Mold</li>
              <li>3. Keep Asthma in check</li>
              <li>4. Avoid Allergy flare ups</li>
              <li>5. Improve your Sleep</li>
              <li>6. Boost Productivity & Focus</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
