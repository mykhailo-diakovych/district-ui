import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config([
   globalIgnores(["dist"]),
   {
      files: ["**/*.{ts,tsx}"],
      extends: [
         js.configs.recommended,
         ...tseslint.configs.recommended, // TS rules
      ],
      plugins: {
         react,
         "react-hooks": reactHooks,
         "react-refresh": reactRefresh,
         import: importPlugin,
         prettier: prettierPlugin,
      },
      rules: {
         // React / Hooks
         ...react.configs.recommended.rules,
         ...reactHooks.configs["recommended-latest"].rules,
         ...reactRefresh.configs.vite.rules,

         // Disable old React import rule (React 17+ JSX transform)
         "react/react-in-jsx-scope": "off",

         // Optional: stricter typing rules
         "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
         ],

         // Prettier
         "prettier/prettier": "error",

         // Import ordering
         "import/order": [
            "error",
            {
               groups: [
                  ["builtin", "external"],
                  ["internal"],
                  ["parent", "sibling", "index"],
               ],
               "newlines-between": "always",
               alphabetize: { order: "ignore" },
               pathGroupsExcludedImportTypes: ["builtin"],
            },
         ],
      },
      languageOptions: {
         ecmaVersion: 2020,
         parserOptions: {
            ecmaFeatures: { jsx: true },
         },
         globals: {
            ...globals.browser,
         },
      },
      settings: {
         react: {
            version: "detect",
         },
      },
   },
]);
