export default {
  "entry" : "./src/1.mjs",
  "resolve": {
    "extensions": [".js", ".mjs"]
  },
  "module": {
    "rules": [{
        "test": /\.mjs$/,
        "loader": "babel-loader",
        "query": {
          "babelrc": false,
          "plugins": ["transform-function-bind"],
          "presets": [
             ["env", {
              "modules": false
            }]
          ]
        }
      }]
  },
  "output": {
    "path" : __dirname,
    "filename": "bundle.js"
  }
};
