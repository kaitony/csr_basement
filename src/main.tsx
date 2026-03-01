// React 핵심 라이브러리
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// TanStack Router: 라우팅 관리
import { RouterProvider, createRouter } from "@tanstack/react-router";
// TanStack Query (React Query): 서버 상태 관리
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 자동 생성된 라우트 트리 import
import { routeTree } from "./routeTree.gen";

// 전역 스타일
import "./styles.css";
// 웹 성능 측정 도구
import reportWebVitals from "./reportWebVitals.ts";

// React Query 클라이언트 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // 데이터를 항상 최신으로 간주
      refetchOnMount: false, // 컴포넌트 마운트 시 자동 재요청 비활성화
      refetchOnReconnect: false, // 네트워크 재연결 시 자동 재요청 비활성화
      refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 재요청 비활성화
    },
  },
});

// 라우터 인스턴스 생성
const router = createRouter({
  routeTree, // 라우트 구조
  context: {}, // 라우터 컨텍스트
  defaultPreload: "intent", // 링크에 마우스 호버 시 프리로드
  scrollRestoration: true, // 뒤로가기 시 스크롤 위치 복원
  defaultStructuralSharing: true, // 구조적 공유를 통한 메모리 최적화
  defaultPreloadStaleTime: 0, // 프리로드 데이터 유지 시간
});

// TypeScript 타입 안정성을 위한 라우터 등록
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// 앱 렌더링
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      {/* React Query Provider로 앱 감싸기 */}
      <QueryClientProvider client={queryClient}>
        {/* Router Provider로 라우팅 기능 제공 */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
}

// 웹 성능 측정 시작
// 성능 데이터를 콘솔에 출력하거나 분석 엔드포인트로 전송할 수 있습니다
// 자세한 내용: https://bit.ly/CRA-vitals
reportWebVitals();
