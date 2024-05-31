'use client'

import React, { useState } from 'react';

const MapComponent = () => {
  const [mapData, setMapData] = useState({
    mapId: '',
    latitude: '',
    longitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMapData((prevMapData) => ({
      ...prevMapData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Map Data:', mapData);
    // Add additional logic for handling form submission (e.g., API call)
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-5 mt-4 border border-gray-100"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Map Component
        </h2>
        <h3 className="mt-1 text-sm text-gray-600">
          Fill the form below to add map details
        </h3>
        <div className="mt-3">
          <label
            htmlFor="mapId"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Map ID:
          </label>
          <input
            type="text"
            id="mapId"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={mapData.mapId}
            onChange={handleChange}
            name="mapId"
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="latitude"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Latitude:
          </label>
          <input
            type="text"
            id="latitude"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={mapData.latitude}
            onChange={handleChange}
            name="latitude"
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="longitude"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Longitude:
          </label>
          <input
            type="text"
            id="longitude"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={mapData.longitude}
            onChange={handleChange}
            name="longitude"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gray-900 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MapComponent;
