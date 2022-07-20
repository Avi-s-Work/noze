export default function Connected() {
  return (
    <>
      <div className="w-full h-screen border-t border-white relative">
        <h1 className="mt-24 text-5xl text-slate-900 font-bold text-center">
          Stay connected with NOZE
        </h1>
        <p className="pt-6 pb-12 text-gray-600 text-center">
          NOZE is an AI powered air quality monitor that <br /> works to keep
          you safe. Breathe easy.
        </p>
        <div className="flex justify-center">
          <button className="bg-purple-700 hover:bg-purple-800 duration-300 text-white text-sm py-3 px-4 rounded-md hidden lg:flex">
            Join the waitlist
          </button>
        </div>
        <footer className="bottom-0 absolute h-20 w-full bg-gray-100">
            
        </footer>
      </div>
    </>
  );
}
