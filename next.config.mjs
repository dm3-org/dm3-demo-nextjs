/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   // This is done to support SVG & other images rendering
   webpack: config => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding');
      config.module.rules.push({
         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
         use: {
               loader: 'url-loader',
               options: {
                  limit: 100000
               }
         }
      });
      return config;
   },
   env: {
      REACT_APP_ADDR_ENS_SUBDOMAIN: process.env.NEXT_PUBLIC_ADDR_ENS_SUBDOMAIN,
      REACT_APP_USER_ENS_SUBDOMAIN: process.env.NEXT_PUBLIC_USER_ENS_SUBDOMAIN,
      REACT_APP_BACKEND: process.env.NEXT_PUBLIC_BACKEND,
      REACT_APP_DEFAULT_DELIVERY_SERVICE: process.env.NEXT_PUBLIC_DEFAULT_DELIVERY_SERVICE,
      REACT_APP_DEFAULT_SERVICE: process.env.NEXT_PUBLIC_DEFAULT_SERVICE,
      REACT_APP_PROFILE_BASE_URL: process.env.NEXT_PUBLIC_PROFILE_BASE_URL,
      REACT_APP_RESOLVER_BACKEND: process.env.NEXT_PUBLIC_RESOLVER_BACKEND,
      REACT_APP_WALLET_CONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
      REACT_APP_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
      REACT_APP_MAINNET_PROVIDER_RPC: process.env.NEXT_PUBLIC_MAINNET_PROVIDER_RPC,
      REACT_APP_PUBLIC_VAPID_KEY: process.env.NEXT_PUBLIC_PUBLIC_VAPID_KEY,
      REACT_APP_NONCE: process.env.NEXT_PUBLIC_NONCE,
      REACT_APP_SIWE_SECRET_KEY: process.env.NEXT_PUBLIC_SIWE_SECRET_KEY,
      REACT_APP_INFURA_KEY: process.env.NEXT_PUBLIC_INFURA_KEY,
   },
};

export default nextConfig;