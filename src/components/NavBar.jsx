import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
   return (
     <nav className="flex items-center justify-between py-4 px-8 bg-white border-b ">
       <a href="/" className="text-2xl font-bold">
         hh<span className="text-green-500">.</span>
       </a>
       <div className="hidden md:flex space-x-4">
         <a href="/login" className="px-9 py-2  rounded-full border">
           Log in
         </a>
         <a
           href="/signup"
           className="px-8 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
         >
           Sign up
         </a>
       </div>
       <button className="md:hidden text-3xl">
        <GiHamburgerMenu />
       </button>
     </nav>
   );
 }

export default NavBar;
