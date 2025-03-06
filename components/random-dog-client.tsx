'use client';

import Image from 'next/image';
import React, { use } from 'react';

export function RandomDogClient({
  dogPromise
}: {
  dogPromise: Promise<{ message: string }>;
}) {
  const dog = use(dogPromise);

  return (
    <div
      onClick={() =>
        alert('This is a random dog image fetched from the Dog CEO API')
      }
    >
      <Image
        src={dog.message}
        width={500}
        height={500}
        alt="Random Dog"
        className="size-[500px] aspect-square object-center object-cover"
      />
    </div>
  );
}
