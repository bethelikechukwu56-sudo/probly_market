import wordmarkUrl from "@/assets/probly-wordmark.png";

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  fill: string,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
}

let wordmarkPromise: Promise<HTMLImageElement> | null = null;

function loadWordmark() {
  if (!wordmarkPromise) {
    wordmarkPromise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("logo"));
      img.src = wordmarkUrl;
    });
  }
  return wordmarkPromise;
}

async function paintBrand(ctx: CanvasRenderingContext2D) {
  try {
    const img = await loadWordmark();
    const height = 86;
    const width = (img.width / img.height) * height;
    ctx.drawImage(img, 56, 28, width, height);
  } catch {
    ctx.font = "400 36px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
    ctx.fillStyle = "#fff6e8";
    ctx.fillText("Probly", 64, 88);
  }
}

export async function renderPredictionCard(opts: {
  title: string;
  yesPrice: number;
  noPrice: number;
  category: string;
}): Promise<Blob> {
  const w = 1200;
  const h = 630;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");

  ctx.fillStyle = "#0c1224";
  ctx.fillRect(0, 0, w, h);
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, "#162038");
  g.addColorStop(1, "#0c1224");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#ffe566";
  ctx.fillRect(0, 0, 18, h);

  await paintBrand(ctx);

  ctx.font = "800 22px Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#d7ccbc";
  ctx.fillText(opts.category.toUpperCase(), 64, 156);

  ctx.font = "400 52px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#fff6e8";
  const lines = wrapText(ctx, opts.title, 1070);
  lines.forEach((line, i) => ctx.fillText(line, 64, 228 + i * 60));

  const yes = `${Math.round(opts.yesPrice * 100)}¢`;
  const no = `${Math.round(opts.noPrice * 100)}¢`;
  const boxY = 430;
  roundRect(ctx, 64, boxY, 500, 130, 18, "#3ddc84");
  roundRect(ctx, 636, boxY, 500, 130, 18, "#ff6b6b");
  ctx.font = "800 22px Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#052113";
  ctx.fillText("YES", 96, boxY + 42);
  ctx.fillStyle = "#2a0707";
  ctx.fillText("NO", 668, boxY + 42);
  ctx.font = "400 56px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#052113";
  ctx.fillText(yes, 96, boxY + 108);
  ctx.fillStyle = "#2a0707";
  ctx.fillText(no, 668, boxY + 108);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) reject(new Error("Could not render card"));
      else resolve(blob);
    }, "image/png");
  });
}

export async function sharePrediction(opts: {
  title: string;
  yesPrice: number;
  noPrice: number;
  category: string;
  url: string;
}): Promise<"shared" | "tweet"> {
  const blob = await renderPredictionCard(opts);
  const file = new File([blob], "probly-card.png", { type: "image/png" });
  const yes = Math.round(opts.yesPrice * 100);
  const text = `I'm ${yes}¢ YES on "${opts.title}" — trading it on Probly`;

  const canFiles = typeof navigator.canShare === "function" && navigator.canShare({ files: [file] });
  if (canFiles) {
    await navigator.share({ files: [file], text, title: "Probly" });
    return "shared";
  }

  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = "probly-card.png";
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 4000);
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(opts.url)}`;
  window.open(intent, "_blank", "noopener,noreferrer");
  return "tweet";
}

export async function renderResultCard(opts: {
  title: string;
  eyebrow: string;
  leftLabel: string;
  rightLabel: string;
  leftPrice: number;
  rightPrice: number;
  detail: string;
  result?: string;
}): Promise<Blob> {
  const w = 1200;
  const h = 630;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");

  ctx.fillStyle = "#0c1224";
  ctx.fillRect(0, 0, w, h);
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, "#162038");
  g.addColorStop(1, "#0c1224");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#ffe566";
  ctx.fillRect(0, 0, 18, h);

  await paintBrand(ctx);

  ctx.font = "800 22px Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#d7ccbc";
  ctx.fillText(opts.eyebrow.toUpperCase(), 64, 156);

  ctx.font = "400 48px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#fff6e8";
  const lines = wrapText(ctx, opts.title, 1070);
  lines.forEach((line, i) => ctx.fillText(line, 64, 214 + i * 52));

  ctx.font = "700 24px Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#d7ccbc";
  ctx.fillText(opts.detail.slice(0, 90), 64, 390);
  if (opts.result) {
    ctx.fillStyle = "#ffe566";
    ctx.fillText(opts.result.slice(0, 90), 64, 428);
  }

  const boxY = 470;
  roundRect(ctx, 64, boxY, 500, 120, 18, "#3ddc84");
  roundRect(ctx, 636, boxY, 500, 120, 18, "#ff6b6b");
  ctx.font = "800 22px Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#052113";
  ctx.fillText(opts.leftLabel.toUpperCase(), 96, boxY + 40);
  ctx.fillStyle = "#2a0707";
  ctx.fillText(opts.rightLabel.toUpperCase(), 668, boxY + 40);
  ctx.font = "400 48px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#052113";
  ctx.fillText(`${Math.round(opts.leftPrice * 100)}¢`, 96, boxY + 96);
  ctx.fillStyle = "#2a0707";
  ctx.fillText(`${Math.round(opts.rightPrice * 100)}¢`, 668, boxY + 96);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) reject(new Error("Could not render card"));
      else resolve(blob);
    }, "image/png");
  });
}

export async function shareNftResult(opts: {
  title: string;
  eyebrow: string;
  leftLabel: string;
  rightLabel: string;
  leftPrice: number;
  rightPrice: number;
  detail: string;
  result?: string;
  url: string;
}): Promise<"shared" | "tweet"> {
  const blob = await renderResultCard(opts);
  const file = new File([blob], "probly-nft.png", { type: "image/png" });
  const text = opts.result
    ? `${opts.result} — ${opts.title} on Probly`
    : `${opts.leftLabel} ${Math.round(opts.leftPrice * 100)}¢ on ${opts.title} — Probly`;
  const canFiles = typeof navigator.canShare === "function" && navigator.canShare({ files: [file] });
  if (canFiles) {
    await navigator.share({ files: [file], text, title: "Probly" });
    return "shared";
  }
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = "probly-nft.png";
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 4000);
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(opts.url)}`;
  window.open(intent, "_blank", "noopener,noreferrer");
  return "tweet";
}
