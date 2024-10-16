"use client";

import React from 'react';
import Dm3Widget, { IDm3WidgetProps } from './Dm3Widget';
import { APP_TITLE, DM3_CHAT_SCREEN_SLOGAN } from '../utils/constants';

// Dm3Chat component which displays the chat interface and integrates the Dm3Widget
const Dm3Chat = (props: IDm3WidgetProps) => {
  return (
    <div className="bg-black min-h-screen w-full py-4 px-4 space-y-3 overflow-x-hidden">

      <div className="flex flex-col md:justify-between justify-start">

        <div className="flex md:flex-row flex-col justify-between">

          <div className="flex items-center space-x-3">
            <img src="dm3-logo.png" alt="DM3 Logo" className="h-8 w-auto" />
            <h2 className="flex flex-row space-x-3">
              <span> | </span>
              <span>{APP_TITLE}</span>
            </h2>
          </div>

          <div className="p-chip flex justify-center items-center align-middle px-6 max-w-fit bg-bg-chip">
            <p className="mb-0 truncate">Logged in as {props.walletAddress}</p>
          </div>

        </div>

        <div>
          <p className="text-white">
            {DM3_CHAT_SCREEN_SLOGAN}
          </p>
        </div>

      </div>

      {/* Embedding the DM3Widget component, passing down the wallet address and signature from props */}
      <Dm3Widget signature={props.signature} walletAddress={props.walletAddress} />
      
    </div>
  );
};

export default Dm3Chat;
