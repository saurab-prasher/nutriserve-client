import Image from "next/image";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Testimonial } from "../types";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function fetchTestimonials() {
      const response = await fetch("http://localhost:5000/api/testimonials");
      const data = await response.json();
      setTestimonials(data);
    }
    fetchTestimonials();
  }, []);

  return (
    <div className='container mx-auto py-8'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-medium mb-4'>
          Snapshots of our community
        </h1>
        <p className='description font-light'>
          Check out what our customers are saying about our healthy meals!
        </p>
      </div>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        centerMode={true}
        centerSlidePercentage={50}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-slate-200 shadow-sm p-4 mx-8 h-72'>
            <div>
              <div className='w-14 h-14 block bg-gray-700 rounded-full'>
                <Image
                  alt='avatar image'
                  style={{ objectFit: "contain" }}
                  src={"/images/avatar-img.webp"}
                  height={300}
                  width={300}
                  className='rounded-full'
                />
              </div>

              <p className='text-lg font-bold mb-2'>{testimonial?.author}</p>
            </div>

            <p className='text-gray-700 mb-2'>Review: {testimonial?.content}</p>
            <div className='flex items-center'>
              <p className='text-gray-700 mr-2'>Rating:</p>
              <div className='flex'>
                {[1, 2, 3, 4, 5].map((value) => (
                  <svg
                    key={value}
                    className={`w-6 h-6 ${
                      value <= testimonial?.rating
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
