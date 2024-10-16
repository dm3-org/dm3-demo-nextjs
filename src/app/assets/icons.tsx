export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  twitter: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "#6c757d", transform: "msFilter:" }}
      {...props}
    >
      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "#6c757d", transform: "msFilter:" }}
      {...props}
    >
      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
    </svg>
  ),
  github: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "#6c757d", transform: "msFilter:" }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      ></path>
    </svg>
  ),
  telegram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "#6c757d", transform: "msFilter:" }}
    >
      <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
    </svg>
  ),
  dm3: (props: IconProps) => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="19"
    >
      <path
        d="M0 0 C1.82421875 0.1015625 1.82421875 0.1015625 4 1 C5.51953125 3.8359375 5.51953125 3.8359375 6.8125 7.375 C7.25207031 8.53773437 7.69164062 9.70046875 8.14453125 10.8984375 C9 14 9 14 8 17 C5.01152168 19.027896 2.56504364 19.3656455 -1 19 C-1.99 18.34 -2.98 17.68 -4 17 C-4.92510542 10.65641996 -2.57913975 5.72246632 0 0 Z "
        fill="#6c757d"
        transform="translate(4,0)"
      />
      <path
        d="M0 0 C2.64 0 5.28 0 8 0 C8.84212256 1.91282125 9.67338864 3.83042473 10.5 5.75 C10.9640625 6.81734375 11.428125 7.8846875 11.90625 8.984375 C13 12 13 12 13 16 C10.36 16 7.72 16 5 16 C4.1605118 13.89828133 3.32860344 11.79353375 2.5 9.6875 C2.0359375 8.51574219 1.571875 7.34398437 1.09375 6.13671875 C0 3 0 3 0 0 Z "
        fill="#6c757d"
        transform="translate(9,0)"
      />
      <path
        d="M0 0 C1.98 0 3.96 0 6 0 C6.84212256 1.91282125 7.67338864 3.83042473 8.5 5.75 C8.9640625 6.81734375 9.428125 7.8846875 9.90625 8.984375 C11 12 11 12 11 16 C9.35 16 7.7 16 6 16 C5.18395001 14.0848421 4.37229368 12.16781166 3.5625 10.25 C3.11003906 9.18265625 2.65757813 8.1153125 2.19140625 7.015625 C1.26020447 4.6586159 0.5215928 2.47007165 0 0 Z "
        fill="#6c757d"
        transform="translate(18,0)"
      />
      <path
        d="M0 0 C2.9975548 2.9975548 3.85162537 4.61794507 5.25 8.5 C5.78367187 9.93859375 5.78367187 9.93859375 6.328125 11.40625 C7 14 7 14 6 17 C4.02 17.66 2.04 18.32 0 19 C0 12.73 0 6.46 0 0 Z "
        fill="#6c757d"
        transform="translate(6,0)"
      />
      <path
        d="M0 0 C2.3515625 0.16015625 2.3515625 0.16015625 5 1 C6.3984375 3.43359375 6.3984375 3.43359375 7.375 6.4375 C7.71273438 7.42621094 8.05046875 8.41492188 8.3984375 9.43359375 C9 12 9 12 8 14 C6.99126984 12.73608512 5.99328178 11.46359117 5 10.1875 C4.443125 9.47980469 3.88625 8.77210937 3.3125 8.04296875 C2 6 2 6 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z "
        fill="#6c757d"
        transform="translate(20,0)"
      />
      <path
        d="M0 0 C0.66 0.99 1.32 1.98 2 3 C2.845625 3.845625 3.69125 4.69125 4.5625 5.5625 C7 8 7 8 8 10 C5.36 10 2.72 10 0 10 C-0.5625 8.0625 -0.5625 8.0625 -1 6 C-0.67 5.67 -0.34 5.34 0 5 C0.04063832 3.33382885 0.042721 1.66611905 0 0 Z "
        fill="#6c757d"
        transform="translate(14,6)"
      />
      <path
        d="M0 0 C0.66 0 1.32 0 2 0 C2 4.95 2 9.9 2 15 C0 13 0 13 -0.125 9.875 C-0.08375 8.92625 -0.0425 7.9775 0 7 C-0.66 7 -1.32 7 -2 7 C-1.34 4.69 -0.68 2.38 0 0 Z "
        fill="#6c757d"
        transform="translate(4,0)"
      />
      <path
        d="M0 0 C3 3 3 3 3.14453125 5.62890625 C3.03496094 6.59699219 2.92539063 7.56507813 2.8125 8.5625 C2.71582031 9.53316406 2.61914062 10.50382813 2.51953125 11.50390625 C2 14 2 14 0 16 C0 10.72 0 5.44 0 0 Z "
        fill="#6c757d"
        transform="translate(6,0)"
      />
      <path
        d="M0 0 C1.9451 2.91765 2.45276317 4.62537285 3 8 C1.02 6.68 -0.96 5.36 -3 4 C-2.67 3.01 -2.34 2.02 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z "
        fill="#6c757d"
        transform="translate(19,7)"
      />
      <path
        d="M0 0 C0.66 0 1.32 0 2 0 C2 0.99 2 1.98 2 3 C2.66 3 3.32 3 4 3 C4.33 5.97 4.66 8.94 5 12 C2.65085508 9.65085508 2.26859643 8.04320554 1.375 4.875 C1.11460938 3.96492187 0.85421875 3.05484375 0.5859375 2.1171875 C0.39257812 1.41851562 0.19921875 0.71984375 0 0 Z "
        fill="#6c757d"
        transform="translate(18,0)"
      />
      <path
        d="M0 0 C0.99 0.495 0.99 0.495 2 1 C2.33333333 2.33333333 2.66666667 3.66666667 3 5 C3.66 5.33 4.32 5.66 5 6 C5 6.99 5 7.98 5 9 C2.525 8.01 2.525 8.01 0 7 C0 4.69 0 2.38 0 0 Z "
        fill="#6c757d"
        transform="translate(0,10)"
      />
      <path
        d="M0 0 C0.66 0.99 1.32 1.98 2 3 C1.67 3.99 1.34 4.98 1 6 C-1.0625 6.6875 -1.0625 6.6875 -3 7 C-1.125 1.125 -1.125 1.125 0 0 Z "
        fill="#6c757d"
        transform="translate(11,11)"
      />
    </svg>
  ),
};
