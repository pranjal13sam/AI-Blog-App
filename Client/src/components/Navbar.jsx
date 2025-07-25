import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const {navigate,token}=useAppContext()
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ">
      <img onClick={()=>navigate('/')} className="w-32 sm:w-44 cursor-pointer" src={assets.logo} alt="logo" />
      <button onClick={()=>navigate('/admin')} className="cursor-pointer flex items-center gap-2 rounded-full text-sm bg-primary text-white px-10 py-2.5">
        {token? 'Dashboard': 'Login'}
        <img className="w-3" src={assets.arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
