/** @type {import('tailwindcss').Config} /
 *
 */

 module.exports = {

 content: [

   './src/**/*.{html,js,ts}',

 ],

 theme: {

 extend: {},

 },

 plugins: [require("daisyui")],

 daisyui: {

 styled: true,

 themes: [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
],

 base: true,

 utils: true,

 logs: true,

 rtl: false,

 },

 }

