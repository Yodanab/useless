const Useless = require("../Useless");

describe('Test Plugin class without compiler', () => {
    test("Check members for an empty option", () => {
        const plugin = new Useless();
        expect(plugin.directoryPath).toEqual([]);
        expect(plugin.unUsedFiles).toEqual(new Set());
        expect(plugin.usedExportsFun).toEqual([]);

        // default
        expect(plugin.excludedFolders).toEqual([
            "node_modules",
            "public",
            "webpack",
          ]);
    })
})