export default function Conquer() {
  return (
    <>
      <div
        className="max-w-screen-xl py-24 grid 
    grid-cols-1 
    md:grid-cols-1 
    xl:grid-cols-2 
    lg:grid-cols-2
    items-center    
    mx-auto"
      >
        {/* Video  */}
        <div className="flex justify-start ml-6">
          <video
            src="https://getnoze.com/wp-content/themes/twentytwentyone/noze/assets/movies/NOZEabout1.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        {/* Text Detail  */}
        <div className="flex justify-end pl-12">
          <div>
            <h1 className="pb-16 text-5xl text-slate-900 font-bold text-center sm:text-left">
              Сonquer the Virus
            </h1>
            <p className="text-lg text-gray-600 text-center sm:text-left">
              Noze tracks the airborne markers (VOCs) associated with the
              Coronavirus family. Our AI uses that information to deliver a
              real-time risk index that will not only tell you if your space is
              prone to spreading the virus, but whether there’s a chance the
              virus is actually in the air.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
