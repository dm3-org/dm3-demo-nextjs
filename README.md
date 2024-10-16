# DM3 Messenger

This project is the reference application of **[DM3 Messenger Widget](https://github.com/dm3-org/dm3/tree/develop/packages/messenger-widget)** which let the user to chat through DM3 protocol by logging in through metamask and SIWE. This is a **[Next.js](#tech-stack)** project configured with **[Tailwind CSS](#tech-stack)**, **[Typescript](#tech-stack)**, **[DM3 Protocol](#tech-stack)** and **[Metamask SDK](#tech-stack)**.

## Table of Contents

- [Project Setup](#project-setup)
- [Tech Stack](#tech-stack)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)

## Project Setup

### Prerequisites

Make sure you have **Node.js** and **npm** (or **yarn**) installed.

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://gitlab.mindfire.co.in/kabirb/dm3-integration.git dm3-messenger

   ```

2. Navigate to the project directory:

   ```bash
   cd dm3-messenger

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Create a `.env.local` file in the root directory and add the necessary environment variables:
   For Sepolia Testnet

   ```bash
   NEXT_PUBLIC_ADDR_ENS_SUBDOMAIN=.beta-addr.dm3.eth
   NEXT_PUBLIC_BACKEND=https://staging.dm3.network/api
   NEXT_PUBLIC_DEFAULT_DELIVERY_SERVICE=beta-ds.dm3.eth
   NEXT_PUBLIC_DEFAULT_SERVICE=https://staging.dm3.network/api
   NEXT_PUBLIC_MAINNET_PROVIDER_RPC=https://eth-sepolia.g.alchemy.com/v2/<your-alchemy-api-key>
   NEXT_PUBLIC_PROFILE_BASE_URL=https://staging.dm3.network/api
   NEXT_PUBLIC_RESOLVER_BACKEND=https://staging.dm3.network/resolver-handler
   NEXT_PUBLIC_USER_ENS_SUBDOMAIN=.beta-user.dm3.eth
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=27b3e102adae76b4d4902a035da435e7
   NEXT_PUBLIC_CHAIN_ID=11155111   #used for sepolia testnet
   NEXT_PUBLIC_PUBLIC_VAPID_KEY=BFCJLre0GeM6S-n4mkMX4SLZWlDR9qc8RsHyctsOPh_QDQkBuvCrMe9Rmq24736F-CJFp-3DkDWhp19X7mOJrEc
   NEXT_PUBLIC_NONCE=0x12345678
   NEXT_PUBLIC_SIWE_SECRET_KEY=123466f786uy76r6tytfy676
   NEXT_PUBLIC_INFURA_KEY=<your-infura-api-key>  #used for metamask wallet sdk
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 in your browser to see the application.

### Tech Stack

- **[Next.js](https://nextjs.org/docs) 122**: React framework for server-side rendering and static site generation.
- **[Tailwind CSS](https://tailwindcss.com/docs/installation)**: Utility-first CSS framework for styling.
- **[TypeScript](https://www.typescriptlang.org/docs/)**: Superset of JavaScript for static typing.
- **[DM3 Messenger Widget](https://github.com/dm3-org/dm3/tree/develop/packages/messenger-widget)**: Integrated for decentralized messaging functionality.
- **[Metamask SDK](https://docs.metamask.io/wallet/)**: Integrated to login dynamically through SIWE using web3 account.

### Available Scripts

In the project directory, we can run the following scripts:

- `npm run dev`: Runs the app in development mode on http://localhost:3000.
- `npm run build`: Builds the app for production in the `.next` folder.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to catch syntax and code quality issues.

### Folder Structure

The basic folder structure of the project is as follows:

```bash
├── public/             # Static images
├── src/app
│   ├── components/     # Reusable React components
│   ├── pages/          # Next.js pages
│   ├── utils/          # Utility functions and constants
│   └── assets/         # Assets reusable icons and other assets
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration file
├── tailwind.config.js  # Tailwind CSS configuration file
├── tsconfig.json       # TypeScript configuration file
└── package.json        # Project dependencies and scripts
```

### DM3 Configuration
This section consists of two steps to configure and integrate the **[DM3 Messenger Widget](https://github.com/dm3-org/dm3/tree/develop/packages/messenger-widget)**. Please ensure that the library `@dm3-org/dm3-messenger-widget` is already installed, if not install it through `npm` or `yarn`. 

- **Step 1** DM3 Messenger Widget Props
   ```bash
    const props: DM3Configuration = {
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
         nonce: process.env.REACT_APP_NONCE as string,   #unique value for each client
         defaultContact: 'help.dm3.eth',   # Default contact's ENS name
         showAlways: true,
         showContacts: true,   # To show contact list
         siwe: {
                address: props.walletAddress,  # User's wallet address passed from props
                message: SIGN_IN_MESSAGE,  # Message the user will sign for authentication (defined in constants)
                signature: props.signature,  # User's signature of the message, passed from props
                secret: process.env.REACT_APP_SIWE_SECRET_KEY as string, # User's Secret key
         },     # Optional: signin into DM3 with the SIWE (Sign In With Ethereum)
     };
   ``` 
   Please follow [Appendix A](#appendix-aappendix-a) to know more about above props and its customization.


- **Step 2** Pass these props to the `<DM3 />` Component
   ```bash
   <DM3 { ...props } />
   ```

### Appendix A
   **Widget props customization**
   - **nonce** : This is a unique value used as a key in storage for each client. It is a mandatory property.

      ```bash
         Example:
         nonce: '0x23281'
         nonce: '0x9123821'
      ```
   - **defaultContact**: This is the default ENS name for a contact, which is automatically included in the contact list. When the widget is used, the contact will be added by default, so there’s no need to manually add it. This property is mandatory.
      ```bash
         Example: 
         defaultContact: 'help.dm3.eth'
         defaultContact:'0x907F65bbE437Be437e634a7643CC32D360E8A92C.dm3.eth'
      ```
   - **hideFunction**: This is an optional property and doesn't need to be set. By default, it is undefined. Users can configure which functionalities should be hidden in the widget using this property. Multiple values can be specified, separated by commas.
       ```bash
         Example: 
         hideFunction: 'attachments'
         hideFunction: 'edit'
         hideFunction: 'delete'
         hideFunction: 'edit,delete'
         hideFunction: 'attachments,edit,delete'
         hideFunction: undefined
      ```
   - **showContacts**:This is a required property of boolean type. Setting the value to true allows the widget to display the entire contact list, and multiple contacts can be added dynamically. If set to false, only the default contact will be active, and chatting will be limited to that contact.
      ```bash
         Example: 
         showContacts: true
         showContacts: false
      ```
   - **signInImage**:This is an optional property of type string. A base64 string URL or a web URL of an image can be set. This image will be displayed on the sign-in screen of the widget.
      ```bash
          signInImage: undefined
          signInImage: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg
      ```
   - **Sign In With Ethereum (SIWE)**: This is a optional property of type object. Using this one can signin into DM3 with the SIWE (Sign In With Ethereum). All the properties of the object are mandatory.

      **Address**: The address of the user's wallet.

      **Message**: The login message. This can be any SIWE-like message.

      **Signature**:The signature to the above message.

      **Secret**: A unique secret identifier used as entropy to derive internal keys. It must be kept confidential and securely stored by the embedding app, as it serves as "the key" for communication. For example, it could be a derivation or signature from a private key. 
      **Important**: The embedding app is responsible for security, recovery, and management.

      ```bash
         Example: 
         siwe: undefined
         siwe: {
            address: "0xe7861D923e1B055bB25CD49569d20903c44692c5",
            message: "my msg",
            signature: '0xc9c8df80009a302559642d67adeea12d6e3f2ecbd7702986596b4012a5f5956e70c2a2c658f7c02e9255499049ea518fdf714cadc121b0319aee80f7ae28b0181b',
            secret: "my-super-secret0"
         }
      ```
   - **disableDialogOptions**: This is a optional property of type DisableDialogType. To disable all the properties of dialog set it true. By default all properties are active. All the properties of each category is optional.
      ```bash
         Example: 
         disableDialogOptions: true
         disableDialogOptions: false
         disableDialogOptions: undefined
         disableDialogOptions: {
            network: true,
            notification: {
               email: true,
               push: false,
            },
            profile: {
               dm3: {
                  cloud: false,
                  optimism: true,
               },
               self: {
                  gnosis: true,
                  ens: false,
               }
            },
            settings: {
               messageView: true,
            }
         }
         disableDialogOptions: {
            notification: {
               email: true,
               push: false,
            },
         }
      ```
   - **theme**:This is a optional property of type object. Its used to customize the styling, look & feel of the widget. Colors can be set for different components.
      ```bash
         Example: 
         theme: undefined
         theme: {
            backgroundColor: '#eeeeee',
            buttonBorderColor: '#dddddd',
            configBoxBorderColor: 'red',
            buttonColor: 'darkgray',
            hoverButtonColor: 'chocolate',
            inactiveButtonColor: 'sieena',
            primaryTextColor: 'black',
            secondaryTextColor: 'white',
            activeContactBackgroundColor: 'dimgray',
            configurationBoxBackgroundColor: 'darkgrey',
            configurationBoxBorderColor: '#666876',
            chatBackgroundColor: '#5c5e54',
            disabledButtonTextColor: 'burlywood',
            errorTextColor: '#C30F1A',
            errorBackgroundColor: '#830B12',
            attachmentBackgroundColor: '#202129',
            selectedContactBorderColor: 'orange',
            profileConfigurationTextColor: 'pink',
            receivedMessageBackgroundColor: 'pink',
            receivedMessageTextColor: 'white',
            sentMessageBackgroundColor: 'blue',
            sentMessageTextColor: 'white',
            infoBoxBackgroundColor: 'green',
            infoBoxTextColor: 'yellow',
            buttonShadow: '#000000',
            msgCounterBackgroundColor: 'yellow',
            msgCounterTextColor: 'white',
            scrollbarBackgroundColor: 'black',
            scrollbarScrollerColor: 'white',
            inputFieldBackgroundColor: 'saddlebrown',
            inputFieldTextColor: '#FFFF',
            inputFieldBorderColor: '#81828D',
            emojiModalBackgroundColor: '262, 240, 283', # It must be in RGB format EX: 240,248,255
            emojiModalTextColor: '102, 51, 153', # It must be in RGB format EX: 240,248,255
            emojiModalAccentColor: '255, 105, 180', # It must be in RGB format EX: 240,248,255
            rainbowConnectBtnBackgroundColor: 'blue',
            rainbowConnectBtnTextColor: 'white',
            rainbowAccentColor: 'orange',
            rainbowAccentForegroundColor: 'pink',
            rainbowModalTextColor: 'white',
            rainbowModalTextSecondaryColor: 'yellow',
            rainbowModalWalletHoverColor: 'green',
            rainbowModalBackgroundColor: 'blue',
            alternateContactBackgroundColor: 'black',
            menuBackgroundColor: 'blue',
            preferencesHighlightedColor: '#8b7ff4',
            configureProfileModalBackgroundColor: '#D9D9D9',
         }
      ```
   **Note**: Rest all other properties are mandatory and not customizable. They must have the value as shown in the .env configuration.


### Resources

- [DM3 Protocol](https://dm3.network/)
- [DM3 Messenger Widget](https://github.com/dm3-org/dm3/tree/develop/packages/messenger-widget)
- [Metamask SDK](https://docs.metamask.io/wallet/connect/metamask-sdk/)
