import React, { useContext, useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import { UserAuthContext } from "../../AuthContext/AuthProvider";
import HomeDetails from "./HomeDetails";

const Home = () => {
  const [productPage, setProductPage] = useState([]);
  const { loader, setLoader } = useContext(UserAuthContext);

  useEffect(() => {
    fetch("https://sji-novation-task-server.vercel.app/product-home")
      .then((res) => res.json())
      .then((data) => {
        setLoader();
        setProductPage(data);
      });
  }, []);
  return (
    <div>
      <HeroSection />
      <section class="bg-transparent lg:mx-72 mt-32 lg:mt-0">
        <div class="h-[22rem] bg-gray-100 dark:bg-transparent mb-20">
          <h1 className="text-[#00CDAC] text-center text-2xl font-bold lg:text-4xl">
            OUR MENUS
          </h1>
        </div>

        <div
          class="container px-6 py-10 mx-auto  -mt-72 sm:-mt-80 md:-mt-96 relative
          grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
          "
        >
          {productPage.map((product) => (
            <HomeDetails key={product._id} product={product}></HomeDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
