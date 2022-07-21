import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-30 w-full px-4 py-4 lg:px-2 lg:py-2 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          {/* Logo & Navs  */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center ml-5 lg:ml-8 xl:ml-8 cursor-pointer">
                <Image
                  src="/images/logo.svg"
                  alt="Noze"
                  width="108"
                  height="28"
                />
              </div>
            </Link>
            <div className="navbar-start hidden lg:flex">
              <Link href="/">
                <span className="text-sm cursor-pointer ml-8 mr-8 text-purple-500 hover:text-purple-700">
                  Overview
                </span>
              </Link>

              <Link href="/specs">
                <span className="text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
                  Specs
                </span>
              </Link>

              <Link href="/faqsnav">
                <span className="text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
                  FAQs
                </span>
              </Link>
            </div>
          </div>
          {/* Pre Order  */}
          <div className="mr-10 hidden lg:flex items-center">
            <span className="text-gray-600 text-md mr-9">Order for $249</span>
            <button className="bg-purple-800 hover:bg-purple-900 duration-300 text-white py-3 px-8 rounded-md font-semibold">
              <span style={{ fontSize: "14.5px" }}>Pre Order</span>
            </button>
          </div>
          {/* Little Accordion */}
          <div className="sm:hidden flex flex-col items-start w-32 mr-2 sec-container px-3">
            <div className="question">
              <span className="text-sm">Overview</span>
              <FontAwesomeIcon
                className="text-purple-200 text-xs ml-6"
                icon={faAngleDown}
              />
            </div>
            <div className="answercont">
              <div className="answer pb-1">
                <span className="text-sm">
                  Specs<span className="text-white">faqs</span>
                </span>
                <br />
                <span className="text-sm">FAQs</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
