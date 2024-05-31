'use client'
import React, { useState } from "react";

const FleetClient = () => {
  const [formData, setFormData] = useState({
    fleetId: "",
    accountId: "",
    deviceSerialNumber: "",
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

    // Perform form submission logic here (e.g., API request)
    console.log("Form submitted with data:", formData);

    // Reset form data after submission (optional)
    setFormData({
      fleetId: "",
      accountId: "",
      deviceSerialNumber: "",
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-5 mt-4 border border-gray-100"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Fleet-Client Form
        </h2>
        <h3 className="mt-1 text-sm text-gray-600">
          Fill the form below to add fleet-client details
        </h3>
        <div className="mt-3">
          <label
            htmlFor="fleet-id"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Fleet ID:
          </label>
          <input
            type="text"
            id="fleet-id"
            name="fleetId"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
            value={formData.fleetId}
            onChange={handleChange}
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="account-id"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Account ID:
          </label>
          <input
            type="text"
            id="account-id"
            name="accountId"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
            value={formData.accountId}
            onChange={handleChange}
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="device-sn"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Device Serial Number:
          </label>
          <input
            type="text"
            id="device-sn"
            name="deviceSerialNumber"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md ring-1"
            value={formData.deviceSerialNumber}
            onChange={handleChange}
          />
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

export default FleetClient;
