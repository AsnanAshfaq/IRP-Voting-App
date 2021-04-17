module.exports = {
  root: true,
  extends: ['plugin:import/typescript'],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
