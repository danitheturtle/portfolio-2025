import eslintConfig from '@eslint/js';
import tslint from 'typescript-eslint';
import globals from 'globals';
//Plugins
import { importX as importPlugin } from 'eslint-plugin-import-x';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import astroPlugin from 'eslint-plugin-astro';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default [
  eslintConfig.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  hooksPlugin.configs['recommended-latest'],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...astroPlugin.configs.recommended,
  prettierPlugin,
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
    files: ['**/*.ts', '**/*.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    plugins: {
      '@typescript-eslint': tslint.plugin,
    },
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        projectService: true,
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.json',
        }),
      ],
      react: {
        version: 'detect',
      },
    },
    rules: {
      //Custom rules here:
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-debugger': 'warn'
    },
  },
];
