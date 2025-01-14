import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";
// eslint.config.mjs
export default [
  {
    ignores: ["node_modules", "dist"],
    files: ["**/*.{js,mjs,cjs,ts,vue,d.ts}"],
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/space-before-function-paren": ["error", "always"],
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": "import", "next": "*" },
        { "blankLine": "any", "prev": "import", "next": "import" },
        { "blankLine": "never", "prev": "*", "next": "*" },
      ],
      // 结尾换行
      "eol-last": ["error", "always"],
      // 行尾逗号
      "comma-dangle": ["error", "always-multiline"],
      // 行尾空格
      "no-trailing-spaces": "error",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-undef": "warn",
      "no-unused-vars": "warn",
    },
    plugins: {
      "@stylistic": stylistic,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },

];
