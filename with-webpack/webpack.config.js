const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: './entry.js', // entry pointを起点にバンドルしていきます
  output: { // 出力に関して
    filename: 'bundle.js', // 出力するファイル名
    path: `${__dirname}/output/` // 出力するディレクトリ階層
    // pathは絶対パスで指定、そのため __dirname でディレクトリ階層を取得しています
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // babelを通さないディレクトリ
        loader: "babel-loader",
      }
    ]
  }
};
