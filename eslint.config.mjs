import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Turn off base rule as it can report incorrect errors with TypeScript
      'no-unused-vars': 'off',
      // Configure TypeScript-specific rule as warning instead of error
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];

export default eslintConfig;
