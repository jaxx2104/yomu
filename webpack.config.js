const webpack = require("webpack")

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        APIKEY: JSON.stringify(process.env.APIKEY),
        AUTHDOMAIN: JSON.stringify(process.env.AUTHDOMAIN),
        DATABASEURL: JSON.stringify(process.env.DATABASEURL),
        MESSAGINGSENDERID: JSON.stringify(process.env.MESSAGINGSENDERID),
        PROJECTID: JSON.stringify(process.env.PROJECTID),
        APPID: JSON.stringify(process.env.APPID)
      }
    })
  ]
}
