import React from 'react';
import { FaUser } from "react-icons/fa";
import image from "../assets/Gahinath_Madake.jpg";


const Profile = () => {
  return (
      <div className="w-full h-full flex flex-col">

        <div className="p-3 h-[60px] border-b border-gray-200">
          <h1 className="text-2xl font-bold text-black font-sans">Account Settings</h1>
        </div>
        

        <div className="h-[calc(h-full-60px)] bg-gray-100 flex-grow flex flex-col">
          <div className="p-4">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4 overflow-hidden">
                {
                  image?
                  <img src={image} className='w-full h-full' />
                  :
                  <FaUser className="w-8 h-8" />
                }
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Gahinath Madake</h2>
                <p className="text-gray-600">gahinathmadake@Gmail.Com</p>
              </div>
            </div>
          </div>
          
          <p className="mb-3 p-4">
              I am a motivated Computer Engineering student with a solid background in problem solving and web development.
              As a 2-star Codechef competitor and important contributor to the Coding Club CODECHEF MITAOE Chapter, 
              I've arranged and created contests and assisted club members in improving their skills.
          </p>

          <hr className=" border-dashed border-gray-400" />

        </div>

      </div>
  )
}

export default Profile;