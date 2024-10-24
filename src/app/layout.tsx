"use client";

import "./globals.css";

//To use MetaMask's UI components and SDK options
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {/* Wrap the entire app with MetaMaskUIProvider to enable MetaMask SDK options */}
        <MetaMaskUIProvider
          sdkOptions={{
            dappMetadata: {
              name: "DM3 Integration Demo", 
            },
            // Infura API key for connecting to Ethereum network via Infura
            infuraAPIKey: process.env.REACT_APP_INFURA_KEY,
          }}
        >
          {/* Render the children components (rest of the app) inside the MetaMask provider */}
          {children}
        </MetaMaskUIProvider>
      </body>
    </html>
  );
}
