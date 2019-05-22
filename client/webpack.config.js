module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /mode_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};