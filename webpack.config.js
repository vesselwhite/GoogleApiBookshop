const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === "development";
const target = devMode ? 'web' : 'browserslist';

module.exports = {
    mode,
    target,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename:'main.css',
        }),
        new CssMinimizerPlugin(),
        new TerserPlugin()
    ],
    module: {
        rules: [
            {
                test:/\.html$/i,
                loader: 'html-loader',
            },
            {
                test:/\.css$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
            ],
    },
}