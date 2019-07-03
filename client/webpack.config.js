module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /mode_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader' ,
                    }, 
                    {
                        loader: 'css-loader',
                    }
                ],
            }
        ]
    }
};