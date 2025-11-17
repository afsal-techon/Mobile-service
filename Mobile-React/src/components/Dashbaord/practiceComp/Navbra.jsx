import React from "react";

import { Bars3Icon, LightBulbIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbra = () => {

    const [ nav, setNav ] = useState(false);
    const handleClick = ()=> setNav(!nav)



  return (
    <div className="w-screen h-[80px] bg-zinc-300 fixed drop-shadow-lg">
      <div className="px-2  flex justify-between w-full h-full items-center ">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Sport</li>
            <li className="p-4">flags</li>
            <li className="p-4">support</li>
            <li className="p-4">privacy</li>
          </ul>

    
        </div>
             <div className="hidden md:flex pr-4">
            <button className="px-8 py-1   text-balack  mr-4 text-white border bg-indigo-600 rounded-md border-indigo-600 hover:bg-transparent hover:text-indigo-600">
              Sign In
            </button>
            <button className="px-8 py-1 text-white border bg-indigo-600 rounded-md border-indigo-600 hover:bg-transparent hover:text-indigo-600">
              Sign Up
            </button>
          </div>

        <div onClick={handleClick} className="md:hidden p-5">
            {!nav ? <Bars3Icon className="w-8" />  : <XMarkIcon className="w-8"/>}
          
        </div>
      </div>


      <ul className={!nav ? 'hidden' :'absolute bg-zinc-200 w-full px-8'}>
          <li className="p-4 border-zinc-300 w-full border-b-2">Home</li>
            <li className="p-4 border-zinc-300 w-full border-b-2">Sport</li>
            <li className="p-4 border-zinc-300 w-full border-b-2">flags</li>
            <li className="p-4 border-zinc-300 w-full border-b-2">support</li>
            <li className="p-4 border-zinc-300 w-full border-b-2">privacy</li>

            <div className="flex flex-col my-4">
         <button className="border border-b-2 px-8 py-1 bg-transparent mb-4 text-balack  mr-4 text-white border bg-indigo-600 rounded-md border-indigo-600 hover:bg-transparent hover:text-indigo-600">
              Sign In
            </button>
            <button className="border border-b-2 px-8 py-1  mb-4 text-white border bg-indigo-600 rounded-md border-indigo-600 hover:bg-transparent hover:text-indigo-600">
              Sign Up
            </button>
            </div>
      </ul>



    </div>
  );
};

{
  /* <button className='text-white border bg-indigo-600 rounded-md border-indigo-600 hover:bg-transparent hover:text-indigo-600'></button> */
}

export default Navbra;
