import { CodeBlock } from '@/components/code-block'
import { LoadingImageFallback } from '@/components/fallbacks'
import { RandomDogClient } from '@/components/random-dog-client'
import React, { Suspense } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Container } from '@/components/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const pageCodeString = `// app/dog/client/page.tsx
import { LoadingImageFallback } from '@/components/fallbacks'
import { RandomDogClient } from '@/components/random-dog-client'
import React, { Suspense } from 'react'
import { Container } from '@/components/container'

export default function RandomDogClientPage() {
  const dogPromise = Promise.all([
    fetch('https://dog.ceo/api/breeds/image/random').then((res) => res.json()),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ])

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">My Dog</h1>
      <Suspense fallback={LoadingImageFallback()}>
        <RandomDogClient dogPromise={dogPromise} />
      </Suspense>
    </Container>
  )
}`

const randomDogClientCodeString = `// components/random-dog-client.tsx
'use client'

import Image from 'next/image'
import React, { use } from 'react'

export function RandomDogClient({
  dogPromise,
}: {
  dogPromise: Promise<[{ message: string }, unknown]>
}) {
  const dog = use(dogPromise)

  return (
    <div
      onClick={() =>
        alert('This is a random dog image fetched from the Dog CEO API')
      }
    >
      <Image
        src={dog[0].message}
        width={500}
        height={500}
        alt="Random Dog"
        className="size-[500px] aspect-square object-center object-cover"
      />
    </div>
  )
}`

export default function RandomDogClientPage() {
  const dogPromise = Promise.all([
    fetch('https://dog.ceo/api/breeds/image/random').then((res) => res.json()),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ])

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-full rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <Container>
          <h1 className="text-3xl font-bold mb-4">My Dog</h1>
          <Suspense fallback={LoadingImageFallback()}>
            <RandomDogClient dogPromise={dogPromise} />
          </Suspense>
        </Container>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <Container>
          <Tabs defaultValue="page.tsx" className="p-2 md:p-10 3xl:p-20 w-full">
            <TabsList>
              <TabsTrigger value="page.tsx">page.tsx</TabsTrigger>
              <TabsTrigger value="random-dog-client.tsx">
                random-dog-client.tsx
              </TabsTrigger>
            </TabsList>
            <TabsContent value="page.tsx">
              <div className="p-4 w-full">
                <CodeBlock language="tsx" value={pageCodeString} />
              </div>
            </TabsContent>
            <TabsContent value="random-dog-client.tsx">
              <div className="p-4 w-full">
                <CodeBlock language="tsx" value={randomDogClientCodeString} />
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
