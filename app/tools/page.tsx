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
    url: "https://flag3.github.io/hex-converter-GB-Pokemon/",
  },
  {
    title: "Pixel Art Editor",
    description: "Create pixel art (dot art) with Game Boy conversion capabilities",
    url: "https://flag3.github.io/pixel-art-editor/",
  },
  {
    title: "Vite Input for Game Boy Pokémon",
    description: "Input tool for Game Boy Pokémon games that helps with Japanese input",
    url: "https://flag3.github.io/vite-input-GB-Pokemon/",
  },
];

export default function ToolsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Tools</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-8">
          Web-based tools for working with Generation 1 and Generation 2 Pokémon games.
          These tools help with various aspects of game manipulation, from hex conversion to sprite editing.
        </p>
      </div>
      <div className="space-y-6">
        {tools.map((tool) => (
          <div key={tool.url} className="group">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <h2 className="text-lg font-medium mb-2 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
                {tool.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {tool.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}