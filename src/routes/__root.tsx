// TanStack Router 관련 import
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

// 루트 라우트 생성
// 모든 하위 라우트의 기본 레이아웃을 정의
export const Route = createRootRoute({
  component: () => (
    <>
      {/* 자식 라우트 컴포넌트가 렌더링되는 위치 */}
      <Outlet />

      {/* TanStack 개발자 도구 */}
      <TanStackDevtools
        config={{
          position: "bottom-right", // 우측 하단에 위치
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />, // 라우터 디버깅 패널
          },
        ]}
      />
    </>
  ),
});
