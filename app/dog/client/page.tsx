import { LoadingImageFallback } from '@/components/fallbacks';
import { RandomDogClient } from '@/components/random-dog-client';
import React, { Suspense } from 'react';

export default function RandomDogClientPage() {
  const dogPromise = fetch('https://dog.ceo/api/breeds/image/random').then(
    (res) => res.json()
  );

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">My Dog</h1>
      <Suspense fallback={LoadingImageFallback()}>
        <RandomDogClient dogPromise={dogPromise} />
      </Suspense>
    </div>
  );
}
