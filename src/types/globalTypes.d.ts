export {}

declare global {
  module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }
}
