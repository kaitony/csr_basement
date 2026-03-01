# CSR Basement

React 19와 Vite 기반의 최신 CSR(Client-Side Rendering) 프로젝트 템플릿입니다.

## ✨ 주요 기능

- **React 19** - 최신 React 기능 및 성능 개선
- **Vite 7** - 초고속 빌드 도구 및 HMR(Hot Module Replacement)
- **TanStack Router** - 타입 세이프한 라우팅 솔루션
- **TanStack Query** - 강력한 서버 상태 관리
- **Tailwind CSS 4** - 유틸리티 우선 CSS 프레임워크
- **TypeScript** - 타입 안정성 제공
- **Zustand** - 간단하고 빠른 상태 관리
- **Vitest** - 빠르고 현대적인 테스팅 프레임워크
- **React Compiler** - 자동 메모이제이션 최적화
- **HTTPS 개발 환경** - 로컬 개발 시 HTTPS 지원

## 📁 프로젝트 구조

```
csr_basement/
├── src/
│   ├── routes/                # TanStack Router 라우트
│   │   ├── __root.tsx        # 루트 레이아웃
│   │   └── index.tsx         # 홈 페이지
│   ├── components/           # 재사용 가능한 컴포넌트
│   ├── containers/           # 컨테이너 컴포넌트
│   │   └── Root/            # 루트 컨테이너
│   ├── configs/             # 설정 파일
│   ├── lib/                 # 유틸리티 라이브러리
│   ├── states/              # Zustand 상태 관리
│   ├── types/               # TypeScript 타입 정의
│   ├── main.tsx            # 앱 진입점
│   ├── routeTree.gen.ts    # 자동 생성된 라우트 트리
│   └── styles.css          # 전역 스타일
├── public/
│   ├── icons/              # 아이콘 파일
│   ├── images/             # 이미지 리소스
│   ├── manifest.json       # PWA 매니페스트
│   └── robots.txt          # 검색 엔진 크롤러 설정
└── components.json         # shadcn/ui 설정

```

## 🛠️ 기술 스택

### 코어

- **프레임워크**: React 19.2
- **빌드 도구**: Vite 7.1
- **언어**: TypeScript 5.7

### 라우팅 & 상태 관리

- **라우터**: TanStack Router 1.132
- **서버 상태**: TanStack Query 5.90
- **클라이언트 상태**: Zustand 5.0

### UI & 스타일링

- **CSS 프레임워크**: Tailwind CSS 4.1
- **컴포넌트 라이브러리**: shadcn/ui
- **아이콘**: Lucide React 0.555
- **유틸리티**: clsx, tailwind-merge, class-variance-authority

### HTTP & 유틸리티

- **HTTP 클라이언트**: Axios 1.13
- **날짜 처리**: Day.js 1.11

### 개발 도구

- **테스팅**: Vitest 3.0, Testing Library
- **린팅**: ESLint 9, Prettier
- **성능 측정**: Web Vitals
- **개발자 도구**: TanStack Devtools, React Devtools

### 최적화

- **React Compiler**: 자동 메모이제이션
- **Code Splitting**: 라우트 기반 자동 분할

## 📦 설치 및 실행

### 사전 요구사항

- Node.js 18 이상
- Yarn 4.11

### 설치

```bash
yarn install
```

### 개발 서버 실행

```bash
yarn dev
```

Vite 개발 서버가 실행되며, 빠른 HMR을 통해 즉각적인 피드백을 제공합니다.

### 프로덕션 빌드

```bash
yarn build
```

TypeScript 컴파일과 함께 최적화된 프로덕션 빌드를 생성합니다.

### 프로덕션 미리보기

```bash
yarn serve
```

빌드된 결과물을 로컬에서 미리 확인할 수 있습니다.

### 테스트 실행

```bash
yarn test
```

Vitest를 사용하여 단위 테스트를 실행합니다.

### 코드 품질

```bash
# ESLint 검사
yarn lint

# Prettier 포맷팅
yarn format

# 자동 수정 및 포맷팅
yarn check
```

## 🎯 주요 라이브러리 특징

### TanStack Router

- 파일 기반 라우팅
- 타입 세이프한 네비게이션
- 자동 라우트 트리 생성 (`routeTree.gen.ts`)
- 프리로드 및 스크롤 복원 지원

### TanStack Query

- 서버 상태 캐싱 및 동기화
- 자동 백그라운드 업데이트
- 낙관적 업데이트
- 무한 스크롤 지원

### Zustand

- 간단한 API
- 불필요한 리렌더링 최소화
- 미들웨어 지원
- TypeScript 친화적

## 🚀 성능 최적화

1. **React Compiler**: 자동 메모이제이션으로 성능 향상
2. **Code Splitting**: 라우트 기반 자동 코드 분할
3. **Tree Shaking**: 사용하지 않는 코드 자동 제거
4. **Lazy Loading**: 필요할 때만 컴포넌트 로드
5. **Intent Preload**: 링크 호버 시 사전 로드

## 📱 PWA 지원

`public/manifest.json`을 통해 PWA 설정이 가능합니다. 필요에 따라 Service Worker를 추가하여 오프라인 지원을 구현할 수 있습니다.

## 🔧 주요 설정

### Vite 설정 (vite.config.ts)

- React 플러그인 및 Compiler 활성화
- TanStack Router 플러그인
- TanStack Devtools
- HTTPS 개발 서버 설정
- Tailwind CSS Vite 플러그인

### React Query 설정

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // 데이터 신선도
      refetchOnMount: false, // 마운트 시 재요청 비활성화
      refetchOnReconnect: false, // 재연결 시 재요청 비활성화
      refetchOnWindowFocus: false, // 포커스 시 재요청 비활성화
    },
  },
});
```

## 🎨 컴포넌트 시스템

### shadcn/ui

Tailwind CSS 기반의 재사용 가능한 컴포넌트를 제공합니다. `components.json` 설정을 통해 커스터마이징할 수 있습니다.

```bash
# shadcn/ui 컴포넌트 추가 예시
npx shadcn@latest add button
```

## 📊 성능 모니터링

`reportWebVitals`를 통해 Core Web Vitals 측정:

- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- TTFB (Time to First Byte)

## 🧪 테스팅

### Vitest + Testing Library

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

## 📝 라이선스

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🤝 기여

기여는 언제나 환영합니다! 다음과 같은 방법으로 기여할 수 있습니다:

1. 이 저장소를 Fork 합니다
2. Feature 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

### 기여 가이드라인

- 코드 스타일은 ESLint와 Prettier 설정을 따라주세요
- 커밋 메시지는 명확하고 간결하게 작성해주세요
- 새로운 기능을 추가할 때는 테스트 코드도 함께 작성해주세요
- 관련 문서도 함께 업데이트해주세요

## 📖 추가 리소스

- [React 문서](https://react.dev/)
- [Vite 문서](https://vite.dev/)
- [TanStack Router 문서](https://tanstack.com/router)
- [TanStack Query 문서](https://tanstack.com/query)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Zustand 문서](https://zustand-demo.pmnd.rs/)

---

**Made with ❤️ using React & Vite**
