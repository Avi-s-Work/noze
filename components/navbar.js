import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [count, setCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const increaser = () => setCount(count + 1);
  const decreaser = () => setCount(count - 1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div
          className={`fixed top-0 z-30 w-full px-4 py-4 lg:px-2 lg:py-2 bg-white border-b ${
            isScrolled && "shadow-lg"
          }`}
        >
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

              {/* Cart Drawer */}
              <div>
                {showSidebar ? (
                  <div>
                    <button className="bg-purple-800 hover:bg-purple-900 duration-300 text-white py-3 px-8 rounded-md font-semibold">
                      <span style={{ fontSize: "14.5px" }}>Pre Order</span>
                    </button>
                    <button
                      className="flex font-bold px-2 text-2xl text-slate-400 items-center cursor-pointer fixed right-3 top-3 z-50"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="bg-purple-800 hover:bg-purple-900 duration-300 text-white py-3 px-8 rounded-md font-semibold"
                  >
                    <span style={{ fontSize: "14.5px" }}>Pre Order</span>
                  </button>
                )}

                <div
                  className={`top-0 right-0 w-[27vw] bg-white text-white fixed h-full z-40  ease-in-out duration-300 ${
                    showSidebar
                      ? "translate-x-0 shadow-2xl"
                      : "translate-x-full"
                  }`}
                >
                  {/* Cart Bar  */}
                  <h3 className="ml-4 mt-4 text-xl text-slate-900">Cart</h3>
                  <div className="flex items-center mt-4 pl-10 h-32">
                    {/* Noze Device   */}
                    <div>
                      <Image
                        src="/images/NOZE_Cart.png"
                        alt="Noze"
                        width="36"
                        height="66"
                      />
                    </div>
                    {/* Counter  */}
                    <div className="pl-10">
                      <p className="text-sm mb-6 text-slate-900">
                        Noze | Smart Air Quality Monitor
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          <div
                            onClick={decreaser}
                            className="decrease text-slate-900 flex items-center justify-between border rounded-none btn btn-sm bg-white hover:bg-white "
                          >
                            -
                          </div>
                          <div className="quantity text-slate-900 flex items-center justify-between border rounded-none btn btn-sm bg-white hover:bg-white px-5">
                            {count}
                          </div>
                          <div
                            onClick={increaser}
                            className="increase text-slate-900 flex items-center justify-between border rounded-none btn btn-sm bg-white hover:bg-white "
                          >
                            +
                          </div>
                        </div>
                        <div className="price">
                          <span className="text-slate-900 text-xs font-semibold">
                            $249.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Check Out Bar  */}
                  <div className="w-full flex flex-col px-4 absolute bottom-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs text-slate-900">SUBTOTAL</span>
                      <span className="text-sm text-slate-900">$1,245.00</span>
                    </div>
                    <p
                      style={{ fontSize: "10px" }}
                      className="text-slate-900 text-center mb-4"
                    >
                      Shipping and discount codes are added at checkout.
                    </p>
                    <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-4 rounded-md text-md font-semibold text-center border-0 cursor-pointer">
                      <span>Checkout</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Cart Drawer */}
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
        </div>
        {/* Cart Scroll Button */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="stickyCart bg-purple-800 hover:bg-purple-900 duration-300 text-white py-3 px-8 rounded-md font-semibold flex flex-col items-center"
        >
          <span className="text-md font-semibold text-white mb-1">{count}</span>
          <FontAwesomeIcon
            className="text-white text-xl"
            icon={faShoppingCart}
          />
        </button>
      </div>
    </>
  );
}
