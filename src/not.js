const path = require("path");

const options = {
  rootUrl: ["../../webui_visr"],
};
const directoryPath = options.rootUrl.map((url) =>
  path.resolve(__dirname, url)
);

const p = path.resolve(
  __dirname,
  "..",
  "..",
  "webui_visr"
);

console.log(p);
console.log(directoryPath);
