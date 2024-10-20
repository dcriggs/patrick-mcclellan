import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-3xl">
        <h1 className="text-lg">Hi, Patrick! You&apos;re a bubjub!</h1>
        
        {/* Paragraphs */}
        <p className="text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Integer viverra metus sit amet nisi efficitur, et gravida ligula malesuada.
        </p>
        <p className="text-base leading-relaxed">
          Fusce vehicula, nunc eget egestas malesuada, velit risus convallis lorem, non dignissim nisi sapien non justo. Nulla facilisi. Aliquam erat volutpat. Aenean vitae pharetra purus.
        </p>
        <p className="text-base leading-relaxed">
          In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer feugiat ante vel volutpat dapibus.
        </p>

        {/* Instagram Handle */}
        <p className="text-base">
          Follow my journey on Instagram: <a href="https://instagram.com/acropatrick" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">@acropatrick</a>
        </p>

        {/* GoFundMe Link */}
        <p className="text-base leading-relaxed">
          I&apos;m currently raising funds for a special project. If you&apos;d like to contribute, please check out my <a href="https://gofundme.com/fundraiser-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GoFundMe</a>. Your support means the world to me!
        </p>

        {/* More to come message */}
        <p className="text-base">
          More to come on this website—stay tuned!
        </p>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
