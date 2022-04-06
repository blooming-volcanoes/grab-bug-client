/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
    content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin")],
};
