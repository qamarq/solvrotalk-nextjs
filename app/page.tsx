import { db } from '@/lib/db';

export default async function Home() {
  const test = await db.get(1);
  return (
    <div>
      <h1>Solvrotalk Next.Js</h1>
      <p>siemano {JSON.stringify(test)}</p>
    </div>
  );
}
