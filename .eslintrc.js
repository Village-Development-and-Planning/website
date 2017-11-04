module.exports = {
  extends: "react-app",
  parser: "babel-eslint",  
  parserOptions: {
    sourceType: "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }    
  },
  rules: {
    "guard-for-in": 0,
    "require-jsdoc": [
      "warn", 
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": false,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": false
        }
      }
    ],
    "no-invalid-this": 0,
    "require-jsdoc": 0,
  }
};