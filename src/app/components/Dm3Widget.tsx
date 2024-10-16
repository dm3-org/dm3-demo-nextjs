"use client";

import { DM3, DM3Configuration } from "@dm3-org/dm3-messenger-widget";
import React from "react";
import { SIGN_IN_MESSAGE } from "../utils/constants";

// Interface defining the props for the Dm3Widget component
export interface IDm3WidgetProps {
  walletAddress: string; // Ethereum wallet address of the user
  signature: string;     // Signature obtained from signing the login message
}

// Dm3Widget component that integrates the DM3 Messenger Widget
const Dm3Widget = (props: IDm3WidgetProps) => {
  
  // Configuration object for the DM3 widget
  const dm3Props: DM3Configuration = {
    userEnsSubdomain: process.env.REACT_APP_USER_ENS_SUBDOMAIN as string,  
    addressEnsSubdomain: process.env.REACT_APP_ADDR_ENS_SUBDOMAIN as string,
    resolverBackendUrl: process.env.REACT_APP_RESOLVER_BACKEND as string,  
    profileBaseUrl: process.env.REACT_APP_PROFILE_BASE_URL as string,       
    defaultDeliveryService: process.env.REACT_APP_DEFAULT_DELIVERY_SERVICE as string, 
    backendUrl: process.env.REACT_APP_BACKEND as string,                   
    chainId: process.env.REACT_APP_CHAIN_ID as string,                     
    defaultServiceUrl: process.env.REACT_APP_DEFAULT_SERVICE as string,   
    ethereumProvider: process.env.REACT_APP_MAINNET_PROVIDER_RPC as string, 
    walletConnectProjectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID as string, 
    publicVapidKey: process.env.REACT_APP_PUBLIC_VAPID_KEY as string,    
    nonce: process.env.REACT_APP_NONCE as string,                         
    defaultContact: "help.dm3.eth",                                     
    showAlways: true,                                                    
    showContacts: true,                                                   

    // SIWE (Sign-In with Ethereum) configuration
    siwe: {
      address: props.walletAddress, // User's wallet address passed from props
      message: SIGN_IN_MESSAGE,     // Message the user will sign for authentication (defined in constants)
      signature: props.signature,   // User's signature of the message, passed from props
      secret: process.env.REACT_APP_SIWE_SECRET_KEY as string, // User's Secret key 
    },
  };

  // Rendering the DM3 widget inside a container with passed configurations
  return (
    <div className="demo-container">
      <DM3 {...dm3Props} />
    </div>
  );
};

export default Dm3Widget;
