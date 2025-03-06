import Image from 'next/image';

export async function RandomDog() {
  const dog = await fetch('https://dog.ceo/api/breeds/image/random').then(
    (res) => res.json()
  );

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
