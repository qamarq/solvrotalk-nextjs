import Image from 'next/image';

export async function RandomDog() {
  const dog = await fetch('https://dog.ceo/api/breeds/image/random').then(
    (res) => res.json()
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));

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
  );
}
