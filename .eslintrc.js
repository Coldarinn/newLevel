module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'simple-import-sort',
    'imports-fsd',
  ],
  rules: {
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    indent: [1, 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'max-len': ['warn', { code: 120, ignoreComments: true }],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute:
      ['data-testid', 'to', 'rounded', 'target', 'direction', 'as'],
    }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
    'react-hooks/exhaustive-deps': 'error', // Проверяем зависимости эффекта
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'imports-fsd/path-checker': 'error',
  },
  globals: {
    __IS_DEV__: true,
    __API_URL__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
