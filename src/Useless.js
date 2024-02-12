/** @format */

const fs = require("fs");
const path = require("path");

class UselessModule {
  constructor({
    skipFolders = [],
    rootUrl = [],
    skipExtension = [],
  } = {}) {
    this.directoryPath = rootUrl.map((url) =>
      path.resolve(__dirname, url)
    );
    this.unUsedFiles = new Set();
    this.excludedExtension = [...skipExtension];
    this.excludedFolders = [
      "node_modules",
      "public",
      "webpack",
      ...skipFolders,
    ];
  }

  isFileIncluded(filePath) {
    return (
      /\.(js|ts|jsx|tsx)(?<!\.test\.(jsx|tsx|js|ts))$/.test(
        filePath
      ) &&
      !/\.config\.(js|ts)$/.test(filePath) &&
      !/\.stories\.(js|ts|jsx|tsx)$/.test(
        filePath
      ) &&
      !/\.story\.(js|ts|jsx|tsx)$/.test(
        filePath
      ) &&
      !this.excludedExtension.some((ext) =>
        filePath.endsWith(ext)
      )
    );
  }

  isFolderExcluded(folderName) {
    return this.excludedFolders.includes(
      folderName
    );
  }

  readFiles(dirPath) {
    if (!dirPath) return;

    const stats = fs.statSync(dirPath);

    if (stats.isFile()) {
      const filePath = dirPath.replace(
        /\\/g,
        "/"
      );
      if (this.isFileIncluded(filePath)) {
        this.unUsedFiles.add(filePath);
      }
    } else if (stats.isDirectory()) {
      const folderName = path.basename(dirPath);
      if (this.isFolderExcluded(folderName)) {
        return;
      }

      const filesAndFolders =
        fs.readdirSync(dirPath);

      filesAndFolders.forEach((item) => {
        const itemPath = path.join(dirPath, item);
        this.readFiles(itemPath);
      });
    }
  }

  createTxtFile(unUsedFiles) {
    const arrayFromSet = Array.from(unUsedFiles);
    const header = `${arrayFromSet.length} Unused Files Found\n\n`;
    const title =
      "*Please consider deleting these files from your project*\n\n";
    const subTitle = "List of Unused Files:\n\n";
    const unusedFilesList =
      arrayFromSet.join("\n");
    fs.writeFileSync(
      "unusedFilesList.txt",
      header + title + subTitle + unusedFilesList
    );
  }

  apply(compiler) {
    this.directoryPath.forEach((path) => {
      this.readFiles(path);
    });

    compiler.hooks.emit.tapAsync(
      "unUsedModules",
      (compilation) => {
        Array.from(compilation._modules).forEach(
          (file) => {
            if (
              file[1].buildInfo.fileDependencies
            ) {
              Array.from(
                file[1].buildInfo.fileDependencies
              ).forEach((fileFromSet) => {
                const filePath =
                  fileFromSet.replace(/\\/g, "/");
                if (
                  this.unUsedFiles.has(filePath)
                ) {
                  this.unUsedFiles.delete(
                    filePath
                  );
                }
              });
            }
          }
        );

        this.createTxtFile(this.unUsedFiles);
      }
    );
  }
}

module.exports = UselessModule;
