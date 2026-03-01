//  @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default defineConfig(
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // React 파일을 처리할 파일 확장자 지정
    plugins: {
      react: react,
      // @ts-ignore
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect", // 설치된 React 버전을 자동으로 감지
      },
    },
    // 권장 규칙 사용 (필요시 'react-app' 등 다른 설정 사용 가능)
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // 추가적인 React 관련 규칙을 여기에 설정할 수 있습니다.
      // 예: "react/jsx-uses-react": "off",
      // 예: "react/react-in-jsx-scope": "off", // React 17+ JSX 변환 설정
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
    },
  },
  prettier
);
