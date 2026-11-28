import Image from "next/image";
import { CardBody, CardRoot, CardTitle } from "@chakra-ui/react";
import { socialLinks, youtubeChannelId } from "../lib/config";
import { getChannelVideos } from "../lib/youtube";

export const metadata = {
  title: "Videos",
  description: "Videos on arbitrary code execution in Generation 1 and 2 Pokémon games",
};

const dateFormat = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export default async function VideosPage() {
  const videos = await getChannelVideos(youtubeChannelId);
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Videos</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-8">
          Latest videos from my{" "}
          <a href={socialLinks.youtube} target="_blank">
            YouTube channel
          </a>
          .
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {videos.map((video) => (
          <CardRoot key={video.id} asChild bg="transparent" overflow="hidden">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                alt=""
                width={320}
                height={180}
                unoptimized
                className="w-full h-auto"
              />
              <CardBody>
                <CardTitle as="h2" fontSize="md" fontWeight="medium">
                  {video.title}
                </CardTitle>
                <p className="text-sm text-neutral-500 mt-2">
                  {dateFormat.format(new Date(video.publishedAt))}
                </p>
              </CardBody>
            </a>
          </CardRoot>
        ))}
      </div>
    </section>
  );
}
