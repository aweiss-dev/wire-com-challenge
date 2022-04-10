module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: ".",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  plugins: ["react", "@typescript-eslint", "import", "react-hooks", "better-styled-components", "eslint-plugin-testing-library", "eslint-plugin-jest-dom"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  ignorePatterns: ["src/**/*.generated.ts"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/no-unresolved": "error",
    "import/no-default-export": "error",
    "import/order": ["error", {
      groups: ["builtin", "external", "internal"],
      pathGroups: [{
        pattern: "react",
        group: "external",
        position: "before"
      }],
      pathGroupsExcludedImportTypes: ["react"],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true
      },
      warnOnUnassignedImports: true
    }],
    "react-hooks/rules-of-hooks": "error",
    // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn",
    // Checks effect dependencies
    "better-styled-components/sort-declarations-alphabetically": 2
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        paths: "./tsconfig.json"
      }
    }
  },
  // Graphql
  overrides: [{
    files: ["*.graphql"],
    parser: "@graphql-eslint/eslint-plugin",
    plugins: ["@graphql-eslint"],
    rules: {
      "@graphql-eslint/known-type-names": "error",
      "prettier/prettier": "error"
    }
  }]
};