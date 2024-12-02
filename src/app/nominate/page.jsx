"use client"
import React, { useState } from 'react';
import logo from '../../assets/Base_Network_Logo.svg';
import user from '../../assets/user.png';
import helpCircle from '../../assets/help-circle.png';
import mail from '../../assets/mail.png';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '../../../firebase'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore';

const Nominatepage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const nominationsCollection = collection(db, 'nominations');
      await addDoc(nominationsCollection, formData);
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', reason: '' }); // Reset form data

      // Show success message for 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting nomination:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg p-1 text-light h-screen">
      {/* Navigation */}
      <nav className="bg-black/25 z-50 fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-lg shadow-lg py-2 px-[10px] lg:rounded-full lg:max-w-[70%] lg:ml-56 lg:mt-5">
        <Image src={logo} className="h-10" alt="Base Network Logo" />
        <div className="flex space-x-3 mx-5 text-light text-sm lg:text-base font-semibold">
          <Link href="/" className="hover:text-main transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-main transition">
            About
          </Link>
        </div>
        <Link
          href="/nominate"
          className="bg-gradient-to-r from-main to-main/50 py-[6px] px-5 text-sm lg:text-[17px] font-medium z-0 text-light rounded-full"
        >
          Nominate
        </Link>
      </nav>

      {/* Form Section */}
      <div className="h-[33rem] mt-36 lg:mt-28 lg:w-[25rem] lg:mx-auto mx-5 bg-light/15 backdrop-blur border p-2 border-light/50 rounded-xl">
        {isSuccess ? (
          <div className="text-center flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-semibold text-green-500">
              Nomination Submitted!
            </h2>
            <p className="text-light mt-2">Thank you for your submission.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-center text-light py-2">
              Nominate a Builder
            </h2>
            <div className="p-5">
              <label className="text-light" htmlFor="name">
                Name
              </label>
              <div className="flex border-b justify-between border-light">
                <input
                  className="bg-transparent outline-none text-light w-72"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Image src={user} className="h-8 w-8 pb-1" alt="User Icon" />
              </div>
            </div>
            <div className="p-5">
              <label className="text-light" htmlFor="email">
                Email
              </label>
              <div className="flex border-b justify-between border-light">
                <input
                  className="bg-transparent outline-none text-light w-72"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Image src={mail} className="h-8 w-8 pb-1" alt="Mail Icon" />
              </div>
            </div>
            <div className="p-5">
              <label className="text-light" htmlFor="reason">
                Why you should be nominated
              </label>
              <div className="flex border-b justify-between border-light">
                <textarea
                  rows={1}
                  className="bg-transparent outline-none text-light w-72"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />
                <Image
                  src={helpCircle}
                  className="h-8 w-8 pb-1"
                  alt="Help Icon"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-main lg:mx-20 text-light font-medium px-20 mx-10 mt-16 rounded py-2 text-lg"
            >
              {isLoading ? <p className='loader'></p> : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Nominatepage;
