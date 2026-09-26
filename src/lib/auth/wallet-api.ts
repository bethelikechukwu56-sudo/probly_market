import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { authMiddleware } from "./middleware";

export const issueWalletNonce = createServerFn({ method: "POST" }).handler(async () => {
  const { createWalletNonce } = await import("./wallet-session.server");
  return { nonce: createWalletNonce() };
});

export const verifyWalletSignature = createServerFn({ method: "POST" })
  .validator(
    z.object({
      message: z.string().min(20).max(2000),
      signature: z.string().regex(/^0x[0-9a-fA-F]+$/),
    }),
  )
  .handler(async ({ data }) => {
    const { verifyWalletLogin } = await import("./wallet-session.server");
    return verifyWalletLogin(data.message, data.signature);
  });

/** Re-read the profile row and mint a fresh token after settings are saved. */
export const refreshWalletProfile = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { ensureWalletUser, issueWalletToken } = await import("./wallet-session.server");
    const user = await ensureWalletUser(context.userId);
    return { token: issueWalletToken(user.id), ...user };
  });
