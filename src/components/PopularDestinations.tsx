import {useRef, useState} from "react";
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

const popularDestinations = [
  {
    name: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    name: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    name: 'Washington',
    image: 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    name: 'Milan',
    image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    name: 'Sydney',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    name: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop&crop=entropy'
  }
];

const DestinationCard = ({ city, imageUrl }:{ city: string; imageUrl: string; }) => (
  <div
    className="relative flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 flex items-end p-3">
      <span className="text-white font-medium text-sm drop-shadow-lg">
        {city}
      </span>
    </div>
  </div>
);

const PopularDestinations = () => {
  const [showArrow, setShowArrow] = useState({ left: false, right: true });
  const scrollContainerRef = useRef(null);

  const scroll = (direction:string) => {
    const container = scrollContainerRef.current as HTMLDivElement;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      if (container.scrollLeft < 10) {
        setShowArrow(p=>({ ...p, left: false }));
      } else {
        setShowArrow(p=>({ ...p, left: true }));
      }
    }
  };

  return (
    <div className="mb-12">
      <h2 className={`text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4`}>
        Popular destinations from Nigeria
      </h2>
      <div className="w-full max-w-6xl mx-auto py-2">
        <div className="relative">
          {showArrow.left && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight/>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-0 py-2"
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          >
            {popularDestinations.map((city, index) => (
              <DestinationCard
                key={index}
                city={city.name}
                imageUrl={city.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularDestinations;