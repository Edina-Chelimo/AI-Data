'use client'

import React, { useState } from 'react';

const AddClient = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [status, setStatus] = useState('Active'); // default status

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    console.log('Form submitted!');
    console.log({
      accountNumber,
      companyName,
      contactName,
      contactPhone,
      contactEmail,
      businessAddress,
      status,
    });

    // Reset form fields after submission
    setAccountNumber('');
    setCompanyName('');
    setContactName('');
    setContactPhone('');
    setContactEmail('');
    setBusinessAddress('');
    setStatus('Active');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-5 mt-4 border border-gray-100"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Client Form
        </h2>
        <h3 className="mt-1 text-sm text-gray-600">
          Fill the form below to add client details
        </h3>
        <div className="mt-3">
          <label
            htmlFor="account-number"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Account Number:
            <input
              type="text"
              id="account-number"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="company-name"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Company Name:
            <input
              type="text"
              id="company-name"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="contact-name"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Contact Name:
            <input
              type="text"
              id="contact-name"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="contact-phone"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Contact Phone:
            <input
              type="text"
              id="contact-phone"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="contact-email"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Contact Email:
            <input
              type="email"
              id="contact-email"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="business-address"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Business Address:
            <input
              type="text"
              id="business-address"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-1">
          <label
            htmlFor="status"
            className="text-sm font-small leading-6 text-gray-900"
          >
            Status:
            <select
              id="status"
              className="w-full border-0 bg-transparent py-1.5 pl-1 sm:text-sm sm:leading-6 rounded-md  ring-1"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
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

export default AddClient;
