import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  js.configs.recommended,
  eslintConfigPrettier,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025, // Add modern JS globals
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-undefined": "error",
      "no-unused-vars": "off",
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "template-curly-spacing": ["error", "never"],
      "arrow-spacing": "error",
      "no-duplicate-imports": "error",
      "no-restricted-syntax": ["error", "ForInStatement", "WithStatement"],
    },
  },
  {
    ignores: ["node_modules/**"],
  },
]);
