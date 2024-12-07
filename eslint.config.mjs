import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import eslintParserTs from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'], // Target TypeScript files
    languageOptions: {
      parser: eslintParserTs, // TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // Link to your TypeScript config
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      // TypeScript ESLint rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Common rules
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'eqeqeq': 'error',
    },
  },
];
