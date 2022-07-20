export default function Break() {
  return (
    <>
      <div
        className="max-w-screen-xl py-24 px-6 grid 
    grid-cols-1 
    md:grid-cols-1 
    xl:grid-cols-2 
    lg:grid-cols-2
    items-center
    md:px-16 
    lg:px-16 
    xl:px-16 
    mx-auto"
      >
        {/* Text Detail  */}
        <div className="w-full">
          <h1 className="pb-16 text-5xl text-slate-900 font-bold text-center sm:text-left">
            Break the Mold
          </h1>
          <p className="text-lg text-gray-600 text-center sm:text-left">
            NOZE monitors the air for spores and other markers associated with
            the most common types of indoor mold. Our mold index will tell you
            if it’s likely that there’s mold around and whether your space is in
            danger of being a breeding ground.
          </p>
        </div>
        {/* Video  */}
        <div className="flex justify-start overflow-hidden">
          <video
            src="https://getnoze.com/wp-content/themes/twentytwentyone/noze/assets/movies/NOZEabout2.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </>
  );
}
