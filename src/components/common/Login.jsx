import React, { useState } from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if both fields are filled
  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-semibold text-gray-900">
        Signin to your <br /> <span className="font-bold">Educase Platform</span>
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form className="mt-6">

        <div className="relative w-full max-w-sm mb-6">
          <label className="absolute -top-3 left-3 px-2 bg-white  text-sm font-medium text-purple-600">
            Email {" "}
            <sup className='text-red-700 font-bold'>*</sup>
          </label>
          <Input
            type="email"
            placeholder="JohnDoe@gmail.com"
            className=""
          />
        </div>


        
        <div className="relative w-full max-w-sm mb-6">
          <label className="absolute -top-3 left-3 px-2 bg-white  text-sm font-medium text-purple-600">
            Password {" "}
            <sup className='text-red-700 font-bold'>*</sup>
          </label>
          <Input
            type="password"
            placeholder="password"
            className=""
          />
        </div>

        {/* Login Button */}
        <Link to='/user/profile'>
          <Button
            type="submit"
            className={`w-full py-2 rounded-md transition ${
              isFormValid
                ? "cursor-pointer"
                : "bg-gray-300! text-gray-500! cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
