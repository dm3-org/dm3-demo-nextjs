"use client";

import React, { useState } from "react";
import Description from "@/app/components/Description";
import Dm3Info from "@/app/components/Dm3Info";
import { useSDK, useSignMessage } from "@metamask/sdk-react-ui";
import { SIGN_IN_MESSAGE } from "@/app/utils/constants";
import Dm3Chat from "@/app/components/Dm3Chat";

const LandingPage = () => {
  const [signature, setSignature] = useState<string | null>(null);

  //sdk and account from metamask sdk to sign the message for login
  const { sdk, account } = useSDK();

  const { isError: isSignError, isLoading: isSignLoading } = useSignMessage({
    message: SIGN_IN_MESSAGE,
  });

  //function to handle login onclick, connect and sign message through metamask
  const handleLoginClick = async () => {
    try {
      const msgSignature = await sdk?.connectAndSign({ msg: SIGN_IN_MESSAGE });
      setSignature(msgSignature);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  return (
    <>
    {/* Render screens for after and before login of the user*/}
      {!signature || !account ? (
        <div className="login-bg flex flex-col min-h-screen min-w-screen">
          <header className="flex justify-end p-8">
            <button
              className="btn-login"
              onClick={handleLoginClick}
              disabled={isSignLoading}
            >
              {isSignLoading ? "Logging in..." : "Login"}
            </button>
            {isSignError && (
              <div className="text-txt-err">Error signing message</div>
            )}
          </header>

          <main className="flex flex-grow justify-center items-center min-h-2/3">
            <Description />
          </main>

          <footer>
            <Dm3Info />
          </footer>
          
        </div>
      ) : (
        <Dm3Chat walletAddress={account} signature={signature} />
      )}
    </>
  );
};

export default LandingPage;
