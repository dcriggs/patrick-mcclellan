import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-3xl">
        {/* Title */}
        <h1 className="text-xl">Hi, I&apos;m Patrick McClellan!</h1>

        {/* Flex container for headshot and intro text */}
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          {/* Headshot Image */}
          <Image
            src="https://ivory-quickest-perch-460.mypinata.cloud/ipfs/QmNtr1FVfQXPhDbuhniAeFL6MJLEcKxi6Ehc74a49R8pzH"
            alt="Patrick McClellan headshot"
            width={320}
            height={320}
            className="rounded-full"
          />

          {/* Main Introduction Text */}
          <p className="text-base leading-relaxed">
            Welcome to my website! I’m excited to officially launch my personal
            brand and share my journey with you. Right now, I’m setting out to
            run the entire Annapurna Circuit in record time. My goal is to
            finish in under three days—a challenge that pushes my limits and
            fuels my passion for the mountains.
            <br />
            <br />
            But it’s about more than just the challenge. I’m raising funds for
            the Himalayan Rescue Association, a non-profit that’s saving lives
            here in the Himalayas. They provide critical altitude training,
            subsidized medical care for trekkers, and free medical care for
            locals. With just $5,000, they were able to build an entire facility
            that hosts life-saving altitude talks. Together, we can do even
            more.
          </p>
        </div>

        {/* "Here’s how you can help" Section */}
        <div className="text-left">
          <p className="text-base leading-relaxed">Here’s how you can help:</p>
          <ol className="list-decimal ml-8">
            <li>
              <strong>Donate</strong>—if you believe in this mission, please
              consider contributing. Every bit makes a difference.
            </li>
            <li>
              <strong>Encourage</strong>—leave a comment or some words of
              support. Trust me, I’ll need that motivation when things get
              tough!
            </li>
            <li>
              <strong>Share</strong>—the more people who see this, the more
              lives we can impact.
            </li>
          </ol>
        </div>

        {/* Additional Content */}
        <div className="flex flex-col gap-4">
          <p className="text-base leading-relaxed">
            This is just the beginning for my website. Soon, you’ll find more
            about my adventures in ultrarunning, acroyoga, healthy living, and
            life coaching. I’m passionate about inspiring others to embrace
            movement, overcome mental health challenges, and explore the world
            on their own terms.
          </p>

          {/* Fundraiser Text */}
          <p className="text-base leading-relaxed">
            Thank you so much for your support—let’s make a difference together!
          </p>

          {/* CTA Button */}
          <div className="flex justify-center w-full">
            <a
              href="https://www.gofundme.com/f/help-patrick-save-lives-with-his-annapurna-run/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#963934] hover:bg-[#e2554a] text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out w-full sm:w-auto text-center"
            >
              Donate Now
            </a>
          </div>

          {/* Instagram Handle */}
          <p className="text-base">
            Follow my journey with live updates on Instagram:{" "}
            <a
              href="https://instagram.com/acropatrick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              @acropatrick
            </a>
          </p>
        </div>

        {/* Outdoor Fun Image */}
        <div className="w-full mt-8">
          <Image
            src="https://ivory-quickest-perch-460.mypinata.cloud/ipfs/QmPgGs6NExib8CBm2RNDN5Y6cKTKkg83LAFYPTzwcAPvYT"
            alt="Patrick enjoying the outdoors"
            width={800}
            height={450}
            className="w-full h-auto rounded-md"
          />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
