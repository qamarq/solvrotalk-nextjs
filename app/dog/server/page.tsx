import { LoadingImageFallback } from '@/components/fallbacks'
import { RandomDog } from '@/components/random-dog'
import React, { Suspense } from 'react'

export default function RandomDogServerPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">My Dog</h1>
      <Suspense fallback={LoadingImageFallback()}>
        <RandomDog />
      </Suspense>
    </div>
  )
}
