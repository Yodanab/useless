/** @format */

const UselessModule = require("./plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new UselessModule({
      excludeFolders: ["dist"],
      rootUrl: ["./src", "./library"],
    }),
  ],
};
