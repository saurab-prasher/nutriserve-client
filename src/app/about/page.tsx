import React from "react";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <div
        className='bg-gray-100 p-5 h-screen'
        style={{ backgroundColor: "#F5F5F5" }}
      >
        {" "}
        {/* Background */}
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold mb-6' style={{ color: "#424242" }}>
            About Us
          </h1>{" "}
          {/* Text Color */}
          <div
            className='bg-white p-6 rounded-lg shadow-lg'
            style={{ color: "#424242" }}
          >
            {" "}
            {/* Card */}
            <h2
              className='text-2xl font-bold mb-4'
              style={{ color: "#4CAF50" }}
            >
              Who We Are
            </h2>{" "}
            {/* Main Color */}
            <p className='mb-4'>
              NutriServe is dedicated to empowering individuals to make
              informed, health-conscious decisions about their meals and
              lifestyle. Founded in [Year], we&apos;ve grown from a small team
              of nutrition enthusiasts to a leading provider in nutritional
              planning and advice.
            </p>
            <h2
              className='text-2xl font-bold mb-4'
              style={{ color: "#FFA726" }}
            >
              Our Mission
            </h2>{" "}
            {/* Accent Color */}
            <p className='mb-4'>
              Our mission is to make nutritional information accessible and
              understandable, helping our users achieve their health and
              wellness goals through personalized, actionable plans.
            </p>
            <h2
              className='text-2xl font-bold mb-4'
              style={{ color: "#29B6F6" }}
            >
              Why Choose Us
            </h2>{" "}
            {/* Secondary Color */}
            <p>
              We believe in providing holistic, science-backed nutritional
              advice. Our platform is designed to be user-friendly, supportive,
              and integrated with the latest in nutritional science and
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
