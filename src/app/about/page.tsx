import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative">
      <div className="relative h-max">
        <Image
          src="/images/about-us.png"
          alt="Sample Image"
          layout="responsive"
          width={1200}
          height={800}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-normal">
        <div className="text-black pl-40">
          <h1 className="text-4xl md:text-xl font-bold">Our Mission</h1>
          <p className="text-lg md:text-xl mt-4">
            We change the way people eat forever
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full ">
        <div className="flex justify-center gap-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 bg-white">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#4CAF50" }}
              >
                Who We Are
              </h2>
              <p className="text-gray-700 text-base">
                NutriServe is dedicated to empowering individuals to make
                informed, health-conscious decisions about their meals and
                lifestyle. Founded in [Year], we've grown from a small team of
                nutrition enthusiasts to a leading provider in nutritional
                planning and advice.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 bg-white">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#FFA726" }}
              >
                Our Mission
              </h2>
              <p className="text-gray-700 text-base">
                NutriServe is dedicated to empowering individuals to make
                informed, health-conscious decisions about their meals and
                lifestyle. Founded in [Year], we've grown from a small team of
                nutrition enthusiasts to a leading provider in nutritional
                planning and advice.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 bg-white">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#29B6F6" }}
              >
                Why Choose Us
              </h2>
              <p className="text-gray-700 text-base">
                NutriServe is dedicated to empowering individuals to make
                informed, health-conscious decisions about their meals and
                lifestyle. Founded in [Year], we've grown from a small team of
                nutrition enthusiasts to a leading provider in nutritional
                planning and advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
