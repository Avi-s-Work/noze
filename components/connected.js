import Image from "next/image";
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
        <footer className="px-20 bottom-0 absolute h-20 w-full bg-gray-100 grid grid-cols-3 items-center justify-items-between">
          <div className="social w-32 flex items-center justify-between">
            <Image src="/images/fb.svg" alt="facebook" width="24" height="24" />
            <Image
              src="/images/twitter.svg"
              alt="twitter"
              width="24"
              height="24"
            />
            <Image
              src="/images/instagram.svg"
              alt="instagram"
              width="24"
              height="24"
            />
          </div>
          <div className="year text-sm font-semibold text-center">
            2021 NOZE
          </div>
          <div className="copyright text-xs font-semibold flex items-center justify-end gap-9">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <a href="">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}
