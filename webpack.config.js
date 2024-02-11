/** @format */

const UselessModule = require("./src/Useless");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new UselessModule({
      skipFolders: ["dist"],
      rootUrl: ["./src", "./library"],
      skipExtension: [".sun.js"],
    }),
  ],
};
