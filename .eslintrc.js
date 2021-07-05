module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
        amd: true,
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': [
            'error',
            { usePrettierrc: true, endOfLine: 'auto' },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-underscore-dangle': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
