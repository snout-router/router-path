module.exports = {
  extends: ['@snout/react'],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@docusaurus', '^@site', '^@theme'],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
