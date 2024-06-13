module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "plugin:react-hooks/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
    project: "./tsconfig.json"
  },
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      pragma: 'h'
    }
  },
  ignorePatterns: ["**/*.mjs"],
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'padded-blocks': 0,
    'arrow-parens': 0,
    'consistent-return': 0,
    'import/no-named-as-default': 0,
    'class-methods-use-this': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    '@typescript-eslint/ban-types': 0,
    'max-classes-per-file': 0,
    'react/jsx-boolean-value': 0,
    'react/static-property-placement': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'react/no-danger': 0,
    'no-console': 0,
    'no-continue': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'object-curly-newline': 0,
    'prefer-object-spread': 0,
    'no-restricted-syntax': 0,
    'operator-assignment': 0,
    '@typescript-eslint/quotes': 0,
    'quotes': 0,
    '@typescript-eslint/indent': 0,
    'indent': 0,
    'comma-dangle': 0,
    'object-shorthand': 0,
    'object-property-newline': 0,
    'no-func-assign': 0,
    'no-trailing-spaces': 0,
    '@typescript-eslint/brace-style': 0,
    'no-undef': 0,
    'max-len': 0,
    'no-debugger': 0,
    'react/destructuring-assignment': 0,
    'react/state-in-constructor': 0,
    'react/no-access-state-in-setstate': 0,
    'react/jsx-filename-extension': 0,
    'import/extensions': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-throw-literal': 0
  }
}