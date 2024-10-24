"use client";

import React from "react";
import { DM3_PRIVACY_POLICY, DM3_TERMS_AND_CONDITIONS } from "@/app/utils/constants";
import SocialMedia from "./SocialMedia";

// Dm3Info component that renders privacy, terms, and social media links
const Dm3Info = () => {
  return (
    <div className="flex sm:flex-row flex-col items-end sm:justify-between justify-center p-8">
      {/* Section for Privacy Policy and Terms and Conditions */}
      <div className="space-x-3">
        <a href={DM3_PRIVACY_POLICY} target="_blank" rel="noopener noreferrer">
          <button className="txt-secondary rounded-md sm:text-base text-sm">
            Privacy Policy
          </button>
        </a>
        <a href={DM3_TERMS_AND_CONDITIONS} target="_blank" rel="noopener noreferrer">
          <button className="txt-secondary rounded-md sm:text-base text-sm">
            Terms and Conditions
          </button>
        </a>
      </div>
      {/* SocialMedia component rendering social media icons and links */}
      <SocialMedia />
    </div>
  );
};

export default Dm3Info;
