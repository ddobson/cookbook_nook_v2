module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-spacing": 2,
        "no-console": 1,
        "prefer-const": 2,
        "prefer-arrow-callback": 1,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-var": 2,
        "dot-notation": [
            "warn"
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "no-useless-constructor": 2,
        "jsx-quotes": ["error", "prefer-double"],
        "react/prefer-stateless-function": 2,
        "react/prefer-es6-class": [2, "always"],
        "react/jsx-uses-react": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-key": 2,
        "react/jsx-no-bind": [
            2,
            {
              "ignoreRefs": true,
              "allowArrowFunctions": true,
              "allowBind": false
            }
        ]
    }
};
