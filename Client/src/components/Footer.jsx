import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-32 bg-primary/3">
      <div className="flex flex-col items-start justify-between md:flex-row gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            soluta deleniti quaerat, consequatur minus atque dolorum nemo
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {footer_data.map((item,index)=>(
                <div key={index}>
                    <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{item.title}</h3>
                    <ul className="text-sm space-y-1">
                        {item.links.map((link,linkIndex)=>(
                            <li key={linkIndex}>
                                <a className="hover:underline transition" href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © All Right Reserved. Made with ❤️ by Pranjal
      </p>
    </div>
  );
};

export default Footer;
