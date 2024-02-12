/** @format */

const UselessModule = require("./src/Useless");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new UselessModule({
      skipFolders: ["dist"],
      rootUrl: [
        path.resolve(__dirname, "./src"),
        path.resolve(__dirname, "./library"),
      ],
      skipExtension: [".sun.js"],
    }),
  ],
};
