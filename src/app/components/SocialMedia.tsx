"use client";

import React from "react";
import { Icons } from "@/app/assets/icons";
import * as Constants from "@/app/utils/constants";

// Defining an array of social media links with href (URLs) and corresponding icons
const socialMediaLinks = [
  { href: Constants.DM3_OFFICIAL_SITE, icon: Icons.dm3 },      // Official DM3 site link
  { href: Constants.DM3_GITHUB_URL, icon: Icons.github },      // GitHub repository link
  { href: Constants.DM3_TWITTER_URL, icon: Icons.twitter },    // Twitter profile link
  { href: Constants.DM3_TELEGRAM_URL, icon: Icons.telegram },  // Telegram channel link
  { href: Constants.DM3_LINKEDIN_URL, icon: Icons.linkedin },  // LinkedIn profile link
];

const SocialMedia = () => {
  return (
    <div className="space-x-3">
      {/* Iterating over the socialMediaLinks array to render each link dynamically */}
      {socialMediaLinks.map((link, index) => (
        <a href={link.href} target="_blank" key={index} rel="noopener noreferrer">
          <button>
            <link.icon />
          </button>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
