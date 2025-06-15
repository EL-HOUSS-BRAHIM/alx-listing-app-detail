import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, HERO_BG_IMAGE, FILTER_LABELS } from '../constants';
import { Pill } from '../components/common/Pill';

const HomePage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  // Filter properties based on selected filter if needed, here a simple example:
  const filteredProperties = selectedFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(selectedFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-96 bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl drop-shadow-md max-w-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="my-8 flex flex-wrap justify-center gap-3 px-4">
        {FILTER_LABELS.map((label) => (
          <Pill
            key={label}
            label={label}
            selected={selectedFilter === label}
            onClick={() =>
              setSelectedFilter(selectedFilter === label ? null : label)
            }
          />
        ))}
      </section>

      {/* Listing Section */}
      <section className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {filteredProperties.map((property, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
              <p className="text-blue-600 font-bold text-xl mb-2">${property.price}</p>
              <p className="text-yellow-500 font-semibold">
                ⭐ {property.rating.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
