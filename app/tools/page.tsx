import { CardBody, CardDescription, CardRoot, CardTitle } from "@chakra-ui/react";

export const metadata = {
  title: "Tools",
  description: "Web-based tools for Game Boy Pokémon",
};

interface Tool {
  title: string;
  description: string;
  url: string;
}

const tools: Tool[] = [
  {
    title: "Hex Converter for Game Boy Pokémon",
    description: "Convert between different formats for Game Boy Pokémon game manipulation",
    url: "https://flag3.github.io/hex-converter-gb-pokemon/",
  },
  {
    title: "Pixel Art Editor",
    description: "Create pixel art (dot art) with Game Boy conversion capabilities",
    url: "https://flag3.github.io/pixel-art-editor/",
  },
  {
    title: "Vite Input for Game Boy Pokémon",
    description: "Input tool for Game Boy Pokémon games that helps with Japanese input",
    url: "https://flag3.github.io/vite-input-gb-pokemon/",
  },
  {
    title: "DSum Watch",
    description:
      "Watch DSum cycles for Game Boy Pokémon with encounter lists, based on DSumWatch created by ずのう (@zunow150poke)",
    url: "https://flag3.github.io/dsum-watch/",
  },
];

export default function ToolsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Tools</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-8">
          Web-based tools for working with Generation 1 and Generation 2 Pokémon games. These tools
          help with various aspects of game manipulation, from hex conversion to sprite editing.
        </p>
      </div>
      <div className="space-y-6">
        {tools.map((tool) => (
          <CardRoot
            key={tool.url}
            asChild
            bg="transparent"
            _hover={{ borderColor: "border.emphasized" }}
            transition="border-color 0.2s"
            focusVisibleRing="outside"
            focusRingColor="gray.500"
          >
            <a href={tool.url} aria-label={tool.title}>
              <CardBody gap="2">
                <CardTitle as="h2" fontWeight="medium">
                  {tool.title}
                </CardTitle>
                <CardDescription fontSize="md">{tool.description}</CardDescription>
              </CardBody>
            </a>
          </CardRoot>
        ))}
      </div>
    </section>
  );
}
