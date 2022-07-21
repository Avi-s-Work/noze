import Image from "next/image";
export default function Incredible() {
  return (
    <>
      <div className="max-w-screen-xl py-24 px-16 flex items-center justify-between mx-auto ">
        {/* Text Detail  */}
        <div className="w-3/5">
          <h1 className="text-5xl text-indigo-900 font-bold text-left">
            Incredible <br /> power, right <br /> under your <br /> NOZE
          </h1>
        </div>
        {/* Video  */}
        <div className="w-full h-screen overflow-y-scroll incredible grid grid-cols-2">
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
              <strong className="font-bold text-lg">Check in.</strong>
              <br />
              <span>
                Keep an eye on things in real- <br /> time so you can have peace
                of <br /> mind all the time.
              </span>
            </div>
          </div>
          <div className="w-full"></div>
          <div className="w-full"></div>
          <div className="w-full flex flex-col items-center">
            <div className="bg-purple-200 h-96 w-80 rounded-full relative overflow-hidden flex items-center justify-center">
              <Image
                src="/images/track_in.png"
                alt="Noze"
                width="300"
                height="344"
                className="absolute"
              />
            </div>
            <div className="text-center pt-6">
              <strong className="font-bold text-lg">Track it.</strong>
              <br />
              <span>
                Dive into the details to <br /> understand exactly what’s <br />
                going on so you can take <br /> action in the moment.
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="bg-purple-200 h-96 w-80 rounded-full relative overflow-hidden flex items-center justify-center">
              <Image
                src="/images/share_it.png"
                alt="Noze"
                width="300"
                height="344"
                className="absolute"
              />
            </div>
            <div className="text-center pt-6">
              <strong className="font-bold text-lg">Share it.</strong>
              <br />
              <span>
                Let others see what’s in the air before they come inside by
                sharing access to your Noze.
              </span>
              <br />
              <br />
              <i className="text-sm">
                Are you a business?
                <div
                  className="tooltip ml-2"
                  data-tip="You can stream your NOZE dashboard to a screen on-site, let people scan a QR code right off your door or even include it in your Google listing."
                >
                  <div>
                    <Image
                      src="/images/info.svg"
                      alt="Noze"
                      width="15"
                      height="15"
                    />
                  </div>
                </div>
              </i>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </>
  );
}
