import React from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-semibold text-gray-900 ">
        Create your <br /> <span className="font-bold">Educase Account</span>
      </h2>

      <form className="mt-8">
      <div className="relative w-full max-w-sm mb-8">
          <label className="absolute -top-3 left-3 px-2 bg-white  text-sm font-medium text-purple-600">
            Full name {" "}
            <sup className='text-red-700 font-bold'>*</sup>
          </label>
          <Input
            type="text"
            placeholder="John Doe"
            className=""
          />
        </div>

        <div className="relative w-full max-w-sm mb-8">
          <label className="absolute -top-3 left-3 px-2 bg-white  text-sm font-medium text-purple-600">
            Phone Number {" "}
            <sup className='text-red-700 font-bold'>*</sup>
          </label>
          <Input
            type="number"
            placeholder="Phone Number"
            className=""
          />
        </div>

        <div className="relative w-full max-w-sm mb-8">
          <label className="absolute -top-3 left-3 px-2 bg-white  text-sm font-medium text-purple-600">
            Email Address {" "} <sup className='text-red-700 font-bold'>*</sup>
          </label>
          <Input
            type="email"
            placeholder="johndoe@gmail.com"
            className=""
          />
        </div>

        <div className="relative w-full max-w-sm mb-8">
          <label className="absolute -top-3 left-3 px-2 bg-white  text-sm font-medium text-purple-600">
            Password {" "} <sup className='text-red-700 font-bold'>*</sup>
          </label>
          <Input
            type="password"
            placeholder="Password"
            className=""
          />
        </div>

        <div className="relative w-full max-w-sm mb-6">
          <label className="absolute -top-3 left-3 px-2 bg-white  text-sm font-medium text-purple-600">
            Company Name {" "}
            <sup className='text-red-700 font-bold'>*</sup>
          </label>
          <Input
            type="email"
            placeholder="Educase India"
            className=""
          />
        </div>

        <div className="flex flex-col space-y-2 mb-6">
          <label className="text-gray-700">
            Are you an Agency? <span className="text-red-500">*</span>
          </label>

          <div className="flex items-center space-x-6">
            {/* Yes Option */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="yes"
                className="appearance-none w-4 h-4 border-2 border-purple-500 rounded-full checked:bg-purple-500 checked:border-4 checked:border-white checked:ring-2 checked:ring-purple-500"
              />
              <span className="text-gray-700 font-medium">Yes</span>
            </label>

            {/* No Option */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="no"
                className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-gray-400 checked:border-4 checked:border-white checked:ring-2 checked:ring-gray-400"
              />
              <span className="text-gray-700 font-medium">No</span>
            </label>
          </div>
        </div>

        {/* Login Button */}
        <Link to='/user/profile'>
          <Button
            type="submit"
            className={`w-full `}
          >
            Create your Account
          </Button></Link>
      </form>
    </div>
  )
}

export default Register;