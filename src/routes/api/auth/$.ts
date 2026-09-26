import { createFileRoute } from "@tanstack/react-router";

/** Google and email sign-in were removed. Accounts are the connected wallet. */
function gone() {
  return new Response(JSON.stringify({ error: "Sign in with the connect-wallet button." }), {
    status: 410,
    headers: { "content-type": "application/json" },
  });
}

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: () => gone(),
      POST: () => gone(),
    },
  },
});
