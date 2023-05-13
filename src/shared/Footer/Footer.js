import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/iamges/logo.png";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-transparent lg:mx-10 mt-32">
      <div class="container p-6 mx-auto">
        <div class="lg:flex">
          <div class="w-full -mx-6 lg:w-2/5">
            <div class="px-6">
              <Link to="/">
                <img class="w-auto h-16" src={logo} alt="" />
              </Link>
            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">Home</h3>
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">
                  About Us
                </h3>
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">
                  Location
                </h3>
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">
                  Coffee Subscription
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr class="h-px w-full my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div className="lg:flex ">
          <div class="flex mt-6 -mx-2">
            {/* Tweitter */}
            <Link
              to="/"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              <svg
                class=" fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  fill="gray-400"
                />
              </svg>
            </Link>
            {/* LinkedIn */}
            <Link
              to="/"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg
                class=" fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  fill="gray-400"
                />
              </svg>
            </Link>
            {/* Instragram */}
            <Link
              to="/"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg
                class=" fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="gray-400"
                />
              </svg>
            </Link>
            {/* Discord */}
            <Link
              to="/"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Github"
            >
              <svg
                className="ml-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-discord"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                  fill="gray-400"
                ></path>{" "}
              </svg>
            </Link>
            {/* Mail */}
            <Link
              to="/"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="mail"
            >
              <svg
                class=" fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
                  fill="gray-400"
                />
              </svg>
            </Link>
          </div>
          <div className=" lg:flex justify-between">
            <p class="max-w-sm  lg:ml-4 mt-5 text-gray-300 dark:text-[rgba(254, 254, 254, 0.4)]">
              reachus@coffee.shop
            </p>
            <p class="max-w-sm lg:ml-20   mt-5 text-gray-300 dark:text-[rgba(254, 254, 254, 0.4)]">
              Privacy Policy
            </p>
            <p class="max-w-sm lg:ml-52   mt-5 text-gray-300 dark:text-[rgba(254, 254, 254, 0.4)]">
              Terms of use
            </p>
            <p class="max-w-sm lg:ml-52    mt-5 text-gray-300 dark:text-[rgba(254, 254, 254, 0.4)]">
              © CoffeShop 2023 - All rights reserved
            </p>
          </div>
        </div>

        <div className="lg:flex mt-3">
          <p class=" text-gray-300 dark:text-[rgba(254, 254, 254, 0.4)]">
            Designed by @Asraful Islam Khan
          </p>
          <p class=" lg:ml-56 text-gray-300 dark:text-[rgba(254, 254, 254, 0.4)]">
            CoffeeShop 1364019 B.C Ltd C/o Empowered Startups 744 W Hastings St
            #420, Vancouver, BC V6C 1A5, Canada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
