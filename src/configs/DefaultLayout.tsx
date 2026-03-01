import type { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <div className="h-screen flex flex-1 overflow-auto">{children}</div>;
}
