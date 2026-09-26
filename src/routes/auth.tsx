import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: function AuthRedirect() {
    return <Navigate to="/login" />;
  },
});
