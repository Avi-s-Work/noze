import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 border-b">
        <div className="ml-10">
          <Image src="/logo.svg" alt="Noze" width="106" height="29" />
        </div>

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
        <div className="navbar-end mr-10 hidden lg:flex">
          <span className="text-gray-600 text-md mr-9">Order for $249</span>
          <button className="bg-purple-800 hover:bg-purple-900 duration-300 text-white py-3 px-8 rounded-md font-semibold">
            <span style={{ fontSize: "14.5px" }}>Pre Order</span>
          </button>
        </div>
      </div>
    </>
  );
}
