import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Welcome to flag3's Homepage</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm flag3, an engineer and mathematics enthusiast with a passion for exploring arbitrary 
          code execution in Generation 1 and Generation 2 Pokémon games.
        </p>
        <p>
          My interests span across mathematics, particularly algebraic topology, 
          commutative algebra and combinatorics as well as deep technical explorations of classic 
          Game Boy Pokémon games. I enjoy discovering and documenting various exploits, 
          glitches, and creating tools for these vintage games.
        </p>
        <p>
          Feel free to explore my work and connect with me on{" "}
          <a href={socialLinks.twitter} target="_blank">
            X (Twitter)
          </a>{" "}
          or check out my projects on{" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
