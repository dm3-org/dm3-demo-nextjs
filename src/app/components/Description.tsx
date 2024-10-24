"use client";

import { APP_DESCRIPTION, APP_TITLE } from "@/app/utils/constants";
import React from "react";

// Description component that renders the app's title, logo, and description
const Description = () => {
  return (
    <div className="dark-modal flex flex-col space-y-20">
      
      <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-center lg:space-x-3">
        
        <img
          src="dm3-logo.png"
          alt="DM3 Logo"
          className="lg:h-fit md:h-10 sm:h-8 h-6 w-fit"
        />        
        <h1 className="flex flex-row space-x-3">
          <span className="lg:block hidden"> | </span> 
          <span>{APP_TITLE}</span>
        </h1>
        
      </div>
      
      <div className="lg:w-10/12">
        <p className="text-xl">
          {APP_DESCRIPTION}
        </p>
      </div>
      
    </div>
  );
};

export default Description;
