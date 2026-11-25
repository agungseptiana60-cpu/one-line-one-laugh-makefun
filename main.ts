// Entry program for the make.fun bounty "One Line, One Laugh"
// (u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a).
//
// The whole entry is one funny line of text, a single self-contained
// joke of at most 140 characters. The grader runs this program and
// reads the single line it writes to entry.txt in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: the draft had the shape but a flat punch, so the
// revision keeps the same setup (lonely human, smart speaker, sad
// song) and turns it in the last clause — the speaker does not just
// suggest a human, it gives up on its owner. "Even the robot gave
// up on me" is the surprise, it lands in the final words, and the
// whole line stays plain, specific and readable in one breath.
export const ENTRY_LINE =
  "I told my smart speaker I was lonely; it played a sad song, then suggested I talk to a human — even the robot gave up on me.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 140 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
