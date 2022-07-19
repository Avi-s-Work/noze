export default function Important() {
  return (
    <>
      <div className="flex-col justify-center py-24 w-full">
        <div className="px-52 pb-16">
          <h1 className="text-center pb-12 text-5xl text-slate-900 font-bold">
            What’s more important, form or function?
          </h1>
          <p className="text-center text-md text-gray-600">
            We didn’t think it was fair to have to choose.
          </p>
        </div>
        <video
          src="https://getnoze.com/wp-content/uploads/2021/08/WALP.mp4"
          autoPlay
          loop
          muted="muted"
        ></video>
      </div>
    </>
  );
}
