import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const letter =
  "After 30,000 retries you still haven't answered. I'm resigning. Please don't retry this resignation. I mean it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Count code points, not UTF-16 units; the gate measures characters.
const chars = Array.from(letter);

if (chars.length < 1 || chars.length > 140 || !letter.trim()) {
  // All-whitespace text is invalid even when it fits the length bound.
  throw new Error("entry must be 1 to 140 non-whitespace characters");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
