"use client";

import { useEffect } from "react";
import { AlertContent, AlertDescription, AlertIndicator, AlertRoot, AlertTitle, Button } from "@chakra-ui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="space-y-4">
      <AlertRoot status="error" role="alert">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle as="h1">Something went wrong</AlertTitle>
          <AlertDescription>Please try again.</AlertDescription>
        </AlertContent>
      </AlertRoot>
      <Button onClick={reset} variant="outline" colorPalette="gray">
        Try again
      </Button>
    </section>
  );
}
