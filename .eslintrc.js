module.exports = {
  plugins: [
    'react',
    'react-hooks',
  ],
  extends: [
    'next/core-web-vitals',
    'next',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
    {
      files: ['**/*.?(m|c)ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
      ],
      extends: [
        'next/core-web-vitals',
        'next',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
      ],
    },
  ],
};
