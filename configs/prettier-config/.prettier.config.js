/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: "always",
  bracketSameLine: true,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = config;
