module.exports = {
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
        "node": true,
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "rules": {
        "linebreak-style": ["error", "windows"],
        "class-methods-use-this": 0,
        "object-curly-newline": 0,
        "array-callback-return": 0,
        "consistent-return": 0,
        "prefer-destructuring": 0
    }
};