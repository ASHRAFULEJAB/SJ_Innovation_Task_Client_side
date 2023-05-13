import React from "react";
import { Link } from "react-router-dom";

const HomeDetails = ({ product }) => {
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
          <Link
            to="/menu"
            class="inline-flex items-center 
                justify-center ml-3  mt-10 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
