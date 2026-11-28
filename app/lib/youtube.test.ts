import { test } from "node:test";
import assert from "node:assert/strict";
import { parseFeed } from "./youtube";

const entry = (id: string, title: string) => `
 <entry>
  <yt:videoId>${id}</yt:videoId>
  <title>${title}</title>
  <published>2026-11-27T11:00:18+00:00</published>
 </entry>`;

void test("parses entries and decodes entities", () => {
  const xml = `<feed><title>flag3</title>${entry("XGGnQP7ngOA", "Red &amp; Blue &quot;ACE&quot;")}</feed>`;
  assert.deepEqual(parseFeed(xml), [
    { id: "XGGnQP7ngOA", title: 'Red & Blue "ACE"', publishedAt: "2026-11-27T11:00:18+00:00" },
  ]);
});

void test("rejects malformed video ids", () => {
  assert.throws(() => parseFeed(entry("bad/id", "x")), /Unexpected YouTube feed entry/);
});
