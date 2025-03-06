import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container>
      <span></span>
      <h2 className="font-bold text-4xl">404 Not Found</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Could not find requested resource
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </Container>
  );
}
