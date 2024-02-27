const path = require("path");

module.exports = {
    entry: "./src/typescript/index.ts",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "public"),
    },
};
