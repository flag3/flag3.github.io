export type Video = {
  id: string;
  title: string;
  publishedAt: string;
};

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

const VIDEO_ID = /^[\w-]{11}$/;

function readTag(entry: string, name: string): string | undefined {
  const match = entry.match(new RegExp(`<${name}>([^<]*)</${name}>`));
  return match?.[1].replace(/&(?:amp|lt|gt|quot|#39);/g, (entity) => ENTITIES[entity]);
}

// ponytail: regex over YouTube's fixed Atom shape; swap in an XML parser if the feed format changes
export function parseFeed(xml: string): Video[] {
  return xml
    .split("<entry>")
    .slice(1)
    .map((entry) => {
      const id = readTag(entry, "yt:videoId");
      const title = readTag(entry, "title");
      const publishedAt = readTag(entry, "published");
      if (!id || !VIDEO_ID.test(id) || !title || !publishedAt) {
        throw new Error(`Unexpected YouTube feed entry: ${entry.slice(0, 200)}`);
      }
      return { id, title, publishedAt };
    });
}

// The feed only contains the latest 15 videos.
export async function getChannelVideos(channelId: string): Promise<Video[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch YouTube feed (${response.status}): ${url}`);
  }
  return parseFeed(await response.text());
}
