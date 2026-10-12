import type { Metadata } from "next";
import Link from "next/link";
import { Button, EmptyStateContent, EmptyStateDescription, EmptyStateRoot, EmptyStateTitle } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <>
      <script src="/pdf-redirect.js" />
      <EmptyStateRoot as="section" color="fg" textAlign="center">
        <EmptyStateContent>
          <EmptyStateTitle as="h1">404 - Page not found</EmptyStateTitle>
          <EmptyStateDescription>
            Oops! The page you're looking for doesn't seem to exist.
          </EmptyStateDescription>
          <Button asChild variant="outline" colorPalette="gray">
            <Link href="/">Back to home</Link>
          </Button>
        </EmptyStateContent>
      </EmptyStateRoot>
    </>
  );
}
