import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 border-b relative">
        {/* Logo  */}

        <a href="/about" className="ml-4 lg:ml-10 xl:ml-10">
          <Image
            src="/../public/images/NOZE_Logo.webp"
            alt="Noze"
            width="125"
            height="35"
          />
        </a>

        {/* NavLinks  */}

        <div className="navbar-start hidden lg:flex">
          <Link href="#">
            <span className="text-sm cursor-pointer ml-8 mr-8 text-purple-500 hover:text-purple-700">
              Overview
            </span>
          </Link>

          <Link href="">
            <span className="text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
              Specs
            </span>
          </Link>

          <Link href="">
            <span className="text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
              FAQs
            </span>
          </Link>
        </div>

        {/* Pre Order Button  */}

        <div className="navbar-end mr-10 hidden lg:flex">
          <span className="text-gray-600 text-md mr-9">Order for $249</span>
          <button className="bg-purple-800 hover:bg-purple-900 duration-300 text-white py-3 px-8 rounded-md font-semibold">
            <span style={{ fontSize: "14.5px" }}>Pre Order</span>
          </button>
        </div>

        {/* Little Accordion */}

        <div className="w-32 mr-2 sec-container px-3">
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
    </>
  );
}
