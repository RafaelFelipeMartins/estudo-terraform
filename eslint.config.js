import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    // Isso diz para o ESLint ignorar completamente essas pastas
    ignores: ["dist/**", "node_modules/**"] 
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];