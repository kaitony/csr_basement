// Node.js 내장 모듈
import { URL, fileURLToPath } from "node:url";
// Vite 설정 함수
import { defineConfig } from "vite";
// TanStack 개발자 도구
import { devtools } from "@tanstack/devtools-vite";
// React 플러그인
import react from "@vitejs/plugin-react";
// 로컬 개발용 HTTPS 인증서 생성
import basicSSL from "@vitejs/plugin-basic-ssl";
// Tailwind CSS Vite 플러그인
import tailwindcss from "@tailwindcss/vite";

// TanStack Router 플러그인
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Vite 설정
// 상세 정보: https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // TanStack Router: 타입 세이프 라우팅
    tanstackRouter({
      target: "react", // React 타겟
      autoCodeSplitting: true, // 자동 코드 분할
    }),
    // TanStack 개발자 도구: 디버깅 지원
    devtools(),
    // React 플러그인: Compiler 활성화
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]], // React Compiler로 자동 메모이제이션
      },
    }),
    // Tailwind CSS: 유틸리티 우선 CSS
    tailwindcss(),
    // HTTPS 개발 서버: 로컬 SSL 인증서 자동 생성
    basicSSL(),
  ],
  // 경로 별칭 설정
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // @ -> src 디렉토리
    },
  },
  // 개발 서버 설정
  server: {
    port: 3000, // 포트 번호
  },
});
