"use client";

import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon, label }) {
  return (
    <IconButton asChild aria-label={label} variant="ghost" size="sm" colorPalette="gray">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon aria-hidden="true" />
      </a>
    </IconButton>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-1">
      <SocialLink
        href={socialLinks.twitter}
        icon={FaXTwitter}
        label="Open X (Twitter) (opens in a new tab)"
      />
      <SocialLink
        href={socialLinks.github}
        icon={FaGithub}
        label="Open GitHub (opens in a new tab)"
      />
      <SocialLink
        href={socialLinks.youtube}
        icon={FaYoutube}
        label="Open YouTube (opens in a new tab)"
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 lg:mt-24 mt-16 text-sm text-[#1C1C1C] dark:text-[#D4D4D4]">
      <div>
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
      </div>
      <SocialLinks />
    </footer>
  );
}
