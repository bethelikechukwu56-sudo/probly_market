/**
 * `/auth/popup` used to start Google/X OAuth. Sign-in is now the RainbowKit
 * connect button, which works inside the preview iframe, so this route only
 * tells a leftover popup to close.
 */
export async function handleAuthPopupRequest(_request: Request): Promise<Response> {
  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8" /><title>Probly</title></head>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#0c1224;color:#fff6e8;font:16px/1.4 Nunito,sans-serif;text-align:center;padding:1.5rem">
<p>Sign in with Connect Wallet on Probly.</p>
<script>try{window.close()}catch(e){}</script>
</body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}
