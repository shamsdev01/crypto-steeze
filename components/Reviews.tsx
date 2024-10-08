"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  text: string;
  author: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "This platform is Amazing. It helps me make informed choices in the crypto market. Cryptosteez to the world.",
    author: "Bobby",
    image: "/assets/images/reviewImg.png", // Update with actual image path
  },
  {
    id: 2,
    text: "Great service! Helped me understand crypto better.",
    author: "John D.",
    image: "/assets/images/reviewImg.png",
  },
  {
    id: 3,
    text: "Very informative and user-friendly platform.",
    author: "Sarah M.",
    image: "/assets/images/reviewImg.png",
  },
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <>
    <div className="relative w-full max-w-4xl mx-auto p-4 overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-white">Reviews</h2>
      <span className="flex justify-center items-center text-white">
        Here is what our users have to say
      </span>
      <span className="flex justify-center mb-8 items-center text-white">
        about our services
      </span>

      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 shadow-lg">
        {/* Review Content */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full flex-shrink-0 px-4 flex items-center justify-between"
            >
              <div className="w-2/3">
               <div className="flex "> 
               <Quote size={48} className="text-black fill-black mb-4" />
                <div className="flex items-center mb-2">
                  {/* Star Ratings */}
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} className="text-yellow-400 fill-yellow-400 mr-1" />
                  ))}
                </div>
               </div>
                <p className="text-xl text-white mb-4">{review.text}</p>
                
                <p className="text-lg font-semibold text-blue-300">
                  - {review.author}
                </p>
              </div>

              {/* Author Image */}
              <div className="w-1/3 flex justify-center">
                <Image
                  src={review.image}
                  alt={review.author}
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition-colors"
        aria-label="Previous review"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition-colors"
        aria-label="Next review"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
    <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t-8 border-[#302d2d3b] h-4xl lg:grid-cols-5"></div>
        </>
  );
};

export default Reviews;
