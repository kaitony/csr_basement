# Project Structure & Architecture

## Directory Overview

```
src/
├── main.tsx                      # Application entry point
├── reportWebVitals.ts           # Performance monitoring
├── routeTree.gen.ts             # Auto-generated route tree
├── styles.css                   # Global styles
│
├── components/                   # Reusable UI components
│
├── configs/                      # Configuration files
│   └── DefaultLayout.tsx        # Default layout wrapper
│
├── containers/                   # Page-level container components
│   └── Root/                    # Root page containers
│       ├── RootBlock.tsx        # Root rendering block
│       └── RootContainer.tsx    # Root state management
│
├── lib/                          # Utility libraries
│   └── utils.ts                 # General utility functions
│
├── routes/                       # TanStack Router routes
│   ├── __root.tsx               # Root route layout
│   └── index.tsx                # Home page route
│
├── states/                       # State management (Zustand)
│
└── types/                        # TypeScript type definitions
    └── globalTypes.d.ts         # Global type declarations
```

## Architecture Patterns

### Container/Block Pattern

Each page follows a **Container + Block** structure:

- **Container**: State management and data fetching
- **Block**: Pure rendering component

### Separation of Concerns

- `/routes`: TanStack Router route definitions
- `/components`: Reusable, generic UI components
- `/containers`: Page-specific business logic
- `/states`: Global state management (Zustand)
- `/lib`: Utility functions
- `/configs`: Static configuration and layouts
- `/types`: TypeScript type definitions

---

## Project-Specific Rules

### TanStack Router

- **File-based routing** - Routes are defined in `/routes` directory
- **Type-safe navigation** - Use typed navigation helpers
- **Auto-generated routes** - `routeTree.gen.ts` is auto-generated, don't edit
- **Route components** - Export `Route` from each route file

### State Management (Zustand)

- **Global state in `/states`** - Define stores under states directory
- **Single responsibility** - Each store handles one domain
- **Selective subscriptions** - Use selectors to prevent unnecessary re-renders
- **Minimal state** - Keep only what needs to be global

### Data Fetching (TanStack Query)

- **Query hooks in containers** - Use `useQuery` in Container components
- **Mutation hooks for updates** - Use `useMutation` for data updates
- **Cache management** - Leverage automatic cache invalidation
- **Loading states** - Handle loading and error states explicitly

### API Integration

- **Encapsulate in `/lib`** - All external API calls go here
- **Handle errors locally** - Each request function handles its own errors
- **Define types in `/types`** - API response types belong in types directory
- **No direct fetch in components** - Always use utility functions

### Styling

- **Tailwind utilities first** - Prefer utility classes over custom CSS
- **Minimal styles.css** - Keep custom styles to minimum
- **shadcn/ui in `/components`** - UI components from shadcn go here
- **Consistent spacing** - Use Tailwind spacing scale (4, 8, 12, 16...)

---

## Naming Conventions

### Files

- **Components**: PascalCase.tsx (`Button.tsx`, `Input.tsx`)
- **Utilities**: camelCase.ts (`requestApi.ts`)
- **Types**: camelCase.d.ts (`api.d.ts`)
- **Routes**: kebab-case (`about.tsx`, `user-profile.tsx`)
- **Tests**: `*.test.tsx` or `*.test.ts`

### Components

- **Container Components**: `[Feature]Container` (`RootContainer`)
- **Block Components**: `[Feature]Block` (`RootBlock`)
- **UI Components**: PascalCase (`Button`, `Input`, `Dialog`)

### Code Elements

- **React hooks**: `use[Name]` (`useLocation`, `useData`)
- **State stores**: `[name]Store` (`userStore`, `settingsStore`)
- **API functions**: `request[API]` (`requestWeather`, `requestData`)
- **Constants**: `UPPER_SNAKE_CASE`
- **Types/Interfaces**: PascalCase (`UserData`, `ApiResponse`)

---

## Error Handling Best Practices

- **Clear user messages** - Show meaningful errors to users
- **Retry with caution** - Only retry idempotent operations
- **Distinguish error types** - Separate network errors from data errors
- **Log for debugging** - Log errors for development troubleshooting
- **Error boundaries** - Use React error boundaries for component errors
