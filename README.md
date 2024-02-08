<!-- @format -->

# 🔍 Webpack Useless Modules Finder Plugin

This webpack plugin is designed to streamline your project's bundle size by identifying and removing unused modules. It scans your codebase, analyzing dependencies and usage patterns to pinpoint modules that are not being utilized. By integrating this plugin into your webpack configuration, you can optimize your build process and ensure that only necessary code is included in the final bundle.

## Key Features:

- **Efficient Analysis**: Utilizes static analysis techniques to comprehensively identify unused modules within your project.
- **Customizable Configuration**: Offers flexible configuration options to tailor the analysis process to your project's specific requirements.
- **Detailed Reporting**: Generates detailed reports highlighting the unused modules discovered, aiding in easy identification and removal.
- **Seamless Integration**: Integrates seamlessly into your webpack build process, allowing for effortless optimization of bundle size.
- **Performance Optimization**: Helps improve your application's performance by reducing unnecessary overhead and optimizing load times.
- **Continuous Maintenance**: Regular updates and improvements ensure compatibility with the latest webpack versions and best practices.

## Usage:

1. Install the plugin via npm or yarn:

```bash
npm install webpack-useless-modules-plugin --save-dev
```

2. Configure the plugin in your webpack configuration file:

```javascript
const UselessModulesPlugin = require("webpack-useless-modules-plugin");

module.exports = {
  // Other webpack configuration options...
  plugins: [new UselessModulesPlugin()],
};
```

3. Run webpack to trigger the analysis and removal of unused modules:

```bash
webpack --config webpack.config.js
```

## Contributing:

Contributions are welcome! If you encounter any issues, have suggestions for improvements, or would like to contribute code, please feel free to submit a pull request or open an issue on the GitHub repository.

## License:

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
