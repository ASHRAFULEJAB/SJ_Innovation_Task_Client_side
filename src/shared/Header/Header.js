import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../AuthContext/AuthProvider";
import logo from "../../assets/iamges/logo.png";

const TOP_OFFSET = 66;
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userLogout } = useContext(UserAuthContext);
  const handleLogout = () => {
    userLogout()
      .then(() => {})
      .catch((e) => console.log(e));
  };
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div class="w-full fixed z-40 ">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <div class="relative flex items-center justify-between">
          <div class="flex items-center lg:mr-96">
            <Link
              to="/"
              aria-label="Company"
              class="inline-flex items-center mr-8"
            >
              <img src={logo} className="h-8 lg:h-16 text-white" alt="Logo" />
            </Link>
            <ul class="flex items-center hidden space-x-8 lg:flex lg:ml-10 justify-between">
              <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  aria-label="Our product"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Menu
                </Link>
              </li>
            </ul>
          </div>
          <ul class="flex items-center hidden space-x-8 lg:flex lg:ml-96">
            {user?.uid ? (
              <>
                <li onClick={handleLogout}>
                  <Link
                    to="/login"
                    className="inline-flex items-center 
                justify-center h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    aria-label="Sign in"
                    class="font-medium tracking-wide
                 text-[#52C1B9] transition-colors duration-200 hover:text-teal-400"
                  >
                    Login{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    class="inline-flex items-center 
                justify-center h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              class="p-2  ml-52 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
                  fill="#1ADEBB"
                />{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
                  fill="#1ADEBB"
                />{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 15C9 14.4477 9.44772 14 10 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H10C9.44772 16 9 15.5523 9 15Z"
                  fill="#1ADEBB"
                />{" "}
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-black  border rounded shadow-sm">
                  <div class="flex items-center text-white justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        class="inline-flex items-center"
                      >
                        <img src={logo} className="h-14 lg:h-14" alt="Logo" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          class="font-medium tracking-wide
                           text-gray-100 transition-colors duration-200 hover:text-purple-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/menu"
                          aria-label="Our product"
                          class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
                        >
                          Menu
                        </Link>
                      </li>

                      {user?.uid ? (
                        <>
                          <li onClick={handleLogout}>
                            <Link
                              to="/login"
                              className="inline-flex items-center 
                justify-center h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-noneinline-flex w-full"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Logout
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/login"
                              aria-label="Sign in"
                              class="font-medium tracking-wide
                               text-[#52C1B9] transition-colors duration-200 hover:text-teal-400"
                            >
                              Sign in
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/register"
                              class="inline-flex items-center 
                justify-center h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-noneinline-flex w-full "
                              aria-label="Sign up"
                            >
                              Sign up
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
