
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Lab 5 - Next.js Dashboard
      </h1>

      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        alt="Dashboard preview"
        className="hidden md:block"
      />
    </main>
  );
}
