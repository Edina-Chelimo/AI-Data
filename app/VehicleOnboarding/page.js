'use client'
import React, { useState } from "react";

const VehicleOnboarding = () => {
  const [formData, setFormData] = useState({
    vehicleId: "",
    type: "",
    make: "",
    model: "",
    fuelType: "",
    leaseeId: "",
    purchaseDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      vehicleId: "",
      type: "",
      make: "",
      model: "",
      fuelType: "",
      leaseeId: "",
      purchaseDate: "",
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-5 mt-4 border border-gray-100"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Vehicle Onboarding
        </h2>
        <h3 className="mt-1 text-sm text-gray-600">
          Fill the form below to add vehicle details
        </h3>
        <div className="mt-3">
          <label
            htmlFor="vehicle-id"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Vehicle ID:
            <input
              type="text"
              id="vehicle-id"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
              name="vehicleId"
              value={formData.vehicleId}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="type"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Type:
            <input
              type="text"
              id="type"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="make"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Make:
            <input
              type="text"
              id="make"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
              name="make"
              value={formData.make}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="model"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Model:
            <input
              type="text"
              id="model"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="fuel-type"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Fuel Type:
            <input
              type="text"
              id="fuel-type"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="leasee-id"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Leasee ID:
            <input
              type="text"
              id="leasee-id"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
              name="leaseeId"
              value={formData.leaseeId}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="purchase-date"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Purchase Date:
            <input
              type="text"
              id="purchase-date"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-btg-maroon rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleOnboarding;
