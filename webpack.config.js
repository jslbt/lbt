const path = require('path');
module.exports = {
    mode: "development",                           //配置打包模式
    entry: './src/index.js',                                            //入口配置
    output: {                                     //出口配置
        path: path.resolve(__dirname, 'dist'),    //path必须是绝对路径
        filename: 'main.js'                //打包完文件夹
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
        //devServer.contentBase配置devServer HTML服务器的文件根目录。默认情况下为当前执行目录，
        // 所有一般不必设置它，除非有额外的文件需要被devServer服务。例如你想要把项目根目录的public
        // 目录设置成devServer服务器的文件根目录。
    },
    module: {
        rules: [
            {
                test: /\.css$/,                               //css配置文件
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,   //url图片配置文件
                loader: "url-loader? limit=8192&name=images/[hash:8].[name].[ext]"
            },
            // {
            //     test: /\.(html|html)$/i,                      //html配置文件要配合url-loader使用
            //     use: ["html-withimg-loader"]
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/react']
                    }
                }
            }
        ]
    },

}