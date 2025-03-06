'use client';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';

// Error boundaries must be Client Components

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="text-center">
      <h2 className="text-3xl font-bold mb-1">Something went wrong!</h2>
      <p className="text-sm text-muted-foreground mb-2">{error.message}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </Container>
  );
}
