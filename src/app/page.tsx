import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hello World</h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <button className="flex items-center gap-[8px] rounded-md bg-black px-[16px] py-[8px] text-sm font-medium text-white">
          <Image src="/logo.svg" alt="logo" width={24} height={24} />
        </button>
      </footer>
    </div>
  );
}
