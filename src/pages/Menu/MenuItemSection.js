import React from "react";

const MenuItemSection = ({ product }) => {
  const { _id, des, img, price, name, title } = product;
  return (
    <div>
      <div class="  mt-8 xl:mt-16  relative">
        <div
          class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
        >
          <img class="  absolute h-28 w-28 left-20 -top-10 " src={img} alt="" />

          <div className="mt-12 text-center">
            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              {name}
            </h1>
            <p class="mt-4 text-2xl font-semibold text-[#00CDAC] capitalize dark:text-[#00CDAC]">
              Price:${price}
            </p>

            <p class="mt-2 text-gray-500 capitalize   dark:text-white">
              {des?.slice(0, 100)}
            </p>
          </div>
          <button
            to="/register"
            class="inline-flex items-center 
                justify-center ml-3  mt-10 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            Order Now
          </button>
        </div>
      </div>
      {/* <div class="  mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <img
                  class="  absolute h-28 w-28 left-20 -top-10 "
                  src=''
                  alt=""
                />

                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Talent Tokens
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    Talent Token are tied to creator’s growth. Creators can
                    reward supporters that want to join on their journey.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-14 h-12 w-[177px] px-6 font-medium tracking-wide
                 text-[#8E79F3] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Coming Soon
                </button>
              </div>
            </div>
            <div class="  mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <img
                  class="  absolute h-28 w-28 left-20 -top-10 "
                  src=''
                  alt=""
                />

                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Tokenised Crowdfunding
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    Tokenised crowdfunding allows creators to raise capital to
                    improve the quality of their content.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-6 h-12 w-[177px] px-6 font-medium tracking-wide
                 text-[#8E79F3] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Coming Soon
                </button>
              </div>
            </div>
            <div class=" lg:ml-32 mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <img
                  class="  absolute h-28 w-28 left-20 -top-10 "
                  src=''
                  alt=""
                />

                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Talent Content Platform
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    A platform that allows creators to create and have direct
                    control of audience revenues.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-12 h-12 w-[177px] px-6 font-medium tracking-wide
                 text-[#8E79F3] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Coming Soon
                </button>
              </div>
            </div>
            <div class=" lg:ml-32 mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    NFT Marketplace
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    Native NFT marketplace that allows creators and pre-NFT
                    right holders to create and sell licensed NFTs.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-14 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Beta Launch Dec 13
                </button>
              </div>
            </div> */}
    </div>
  );
};

export default MenuItemSection;
