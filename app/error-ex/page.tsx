import { exampleErrorFunction } from '@/actions/error-action';
import { Container } from '@/components/container';
import React from 'react';

export default async function ExampleErrorPage() {
  await exampleErrorFunction();

  return (
    <Container>
      <h1 className="text-3xl font-bold text-center mb-4">
        This is my fantastic page
      </h1>
    </Container>
  );
}
