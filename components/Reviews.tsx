"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  text: string;
  author: string;
}

const reviews: Review[] = [
  { id: 1, text: "Great service! Helped me understand crypto better.", author: "John D." },
  { id: 2, text: "Very informative and user-friendly platform.", author: "Sarah M." },
  { id: 3, text: "Excellent analysis tools. Highly recommended!", author: "Robert K." },
  { id: 4, text: "The crypto insights are top-notch!", author: "Emily R." },
  { id: 5, text: "User-friendly interface and great customer support.", author: "Michael T." },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative w-full max-w-4xl mx-auto p-4 overflow-hidden">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">Reviews</h2>
      <div className="relative h-96"> {/* Significantly increased height */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-full flex-shrink-0 px-4"> {/* Added horizontal padding */}
              <div className="bg-blue-800 rounded-lg p-8 shadow-lg mx-2 flex flex-col justify-between h-full">
                <p className="text-xl mb-8 text-white">{review.text}</p> {/* Increased font size and margin */}
                <p className="text-lg font-semibold text-blue-300">- {review.author}</p> {/* Increased font size */}
              </div>
            </div>
          ))}
        </div>
      </div>
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
      <div className="flex justify-center mt-8 space-x-3"> {/* Increased spacing */}
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-blue-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Reviews