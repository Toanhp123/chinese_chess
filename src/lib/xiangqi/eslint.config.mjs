import globals from 'globals';
import js from '@eslint/js';

// https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects
export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'script', globals: globals.node },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'prefer-const': 'warn',
    },
  },
];
