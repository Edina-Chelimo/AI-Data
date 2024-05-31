'use client'
import { useState } from "react";

const LeaseForm = () => {
  const [leaseeId, setLeaseId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [representativeEmail, setRepresentativeEmail] = useState("");
  const [representativePhone, setRepresentativePhone] = useState("");
  const [mapId, setMapId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access form data using the state variables (leaseeId, companyName, etc.)
    console.log("Form submitted with data:", {
      leaseeId,
      companyName,
      location,
      representativeName,
      representativeEmail,
      representativePhone,
      mapId,
    });
    // Optionally, you can make an API call to submit this form data
  };

  const title = "Leasee Form";

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-5 mt-4 border border-gray-100"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          {title}
        </h2>
        <h3 className="mt-1 text-sm text-gray-600">
          Fill the form below to add lease details
        </h3>
        <div className="mt-3">
          <label
            htmlFor="leaseeId"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Leasee Id:
          </label>
          <input
            type="text"
            id="leaseeId"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={leaseeId}
            onChange={(e) => setLeaseId(e.target.value)}
          />
        </div>

        <div className="mt-1">
          <label
            htmlFor="companyName"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="location"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="representativeName"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Representative Name:
          </label>
          <input
            type="text"
            id="representativeName"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={representativeName}
            onChange={(e) => setRepresentativeName(e.target.value)}
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="representativeEmail"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Representative Email:
          </label>
          <input
            type="text"
            id="representativeEmail"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={representativeEmail}
            onChange={(e) => setRepresentativeEmail(e.target.value)}
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="representativePhone"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Representative Phone:
          </label>
          <input
            type="text"
            id="representativePhone"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={representativePhone}
            onChange={(e) => setRepresentativePhone(e.target.value)}
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="mapId"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Map Id:
          </label>
          <input
            type="text"
            id="mapId"
            className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
            value={mapId}
            onChange={(e) => setMapId(e.target.value)}
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

export default LeaseForm;
