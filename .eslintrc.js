module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
        amd: true,
    },
    extends: [
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
    plugins: ['react'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
