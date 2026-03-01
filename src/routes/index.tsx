import { createFileRoute } from "@tanstack/react-router";

import RootContainer from "@/containers/Root/RootContainer";

export const Route = createFileRoute("/")({
  component: RootContainer,
});
