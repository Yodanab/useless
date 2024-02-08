const UselessModule = require("./src/Useless");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new UselessModule({
      excludeFolders: ["dist"],
      rootUrl: ["./src", "./library"],
    }),
  ],
};
