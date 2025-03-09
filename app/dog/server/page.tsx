import { LoadingImageFallback } from '@/components/fallbacks'
import { RandomDog } from '@/components/random-dog'
import React, { Suspense } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Container } from '@/components/container'
import { CodeBlock } from '@/components/code-block'

const pageCodeString = `// app/dog/server/page.tsx
import { LoadingImageFallback } from '@/components/fallbacks'
import { RandomDog } from '@/components/random-dog'
import React, { Suspense } from 'react'
import { Container } from '@/components/container'

export default function RandomDogServerPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">My Dog</h1>
      <Suspense fallback={LoadingImageFallback()}>
        <RandomDog />
      </Suspense>
    </Container>
  )
}`
const randomDogCodeString = `// components/random-dog.tsx
import Image from 'next/image'

export async function RandomDog() {
  const dog = await fetch('https://dog.ceo/api/breeds/image/random').then(
    (res) => res.json()
  )
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div>
      <Image
        src={dog.message}
        width={500}
        height={500}
        alt="Random Dog"
        className="size-[500px] aspect-square object-center object-cover"
      />
    </div>
  )
}`

export default function RandomDogServerPage() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-full rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <Container>
          <h1 className="text-3xl font-bold mb-4">My Dog</h1>
          <Suspense fallback={LoadingImageFallback()}>
            <RandomDog />
          </Suspense>
        </Container>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <Container>
          <Tabs defaultValue="page.tsx" className="p-2 md:p-10 3xl:p-20 w-full">
            <TabsList>
              <TabsTrigger value="page.tsx">page.tsx</TabsTrigger>
              <TabsTrigger value="random-dog.tsx">random-dog.tsx</TabsTrigger>
            </TabsList>
            <TabsContent value="page.tsx">
              <div className="p-4 w-full">
                <CodeBlock language="tsx" value={pageCodeString} />
              </div>
            </TabsContent>
            <TabsContent value="random-dog.tsx">
              <div className="p-4 w-full">
                <CodeBlock language="tsx" value={randomDogCodeString} />
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
