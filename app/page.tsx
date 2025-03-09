import { Container } from '@/components/container'
import { db } from '@/lib/db'

export default async function Home() {
  const test = await db.get(1)
  return (
    <Container>
      <h1>Solvrotalk Next.Js</h1>
      <p>siemano {JSON.stringify(test)}</p>
    </Container>
  )
}
