import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 text-primary px-4">
      <section className="flex flex-col gap-8 py-8 sm:py-12 md:py-16 max-w-[1000px] mx-auto w-full">
        <h1 className="text-6xl sm:text-7xl">
          <div>Professional portfolios</div>
          <div className="text-secondary">in minutes, not days</div>
        </h1>
        <p className="max-w-[600px] w-full text-secondary text-xl">
          Build and deploy stunning portfolio websites with our intuitive
          platform. Trusted by designers, developers, and creatives worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-fit">
          <Button>Get Started</Button>
          <Button>View Examples</Button>
        </div>
      </section>

      <section className="py-2 max-w-[1000px] mx-auto w-full">
        <Image
          src="/600x400.png"
          alt="Sarah Chen"
          width={600}
          height={400}
          sizes="100vw"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </section>

      <section className="flex flex-col gap-8 py-8 max-w-[1000px] mx-auto w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl">Everything you need</h1>
          <p className="text-secondary text-lg sm:text-xl">
            Powerful feature designed for professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-surface-1 border border-solid border-slate-800 rounded-lg hover:border-blue-400 p-4 duration-200 flex flex-col gap-4 group">
            <h2 className="text-xl sm:text-2xl md:text-3xl bg-surface-1 border border-solid border-slate-800 w-fit rounded-lg px-4 py-2 -mt-8 -ml-2 group-hover:border-blue-400 duration-200">
              Beautiful Templates
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary">
              Choose from dozens of professionally designed templates tailored
              for every industry
            </p>
          </div>
          <div className="bg-surface-1 border border-solid border-slate-800 rounded-lg hover:border-blue-400 p-4 duration-200 flex flex-col gap-4 group">
            <h2 className="text-xl sm:text-2xl md:text-3xl bg-surface-1 border border-solid border-slate-800 w-fit rounded-lg px-4 py-2 -mt-8 -ml-2 group-hover:border-blue-400 duration-200">
              Lighting Fast
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary">
              Build and publish your portfolio in minutes, not days. Get online
              instantly
            </p>
          </div>
          <div className="bg-surface-1 border border-solid border-slate-800 rounded-lg hover:border-blue-400 p-4 duration-200 flex flex-col gap-4 group">
            <h2 className="text-xl sm:text-2xl md:text-3xl bg-surface-1 border border-solid border-slate-800 w-fit rounded-lg px-4 py-2 -mt-8 -ml-2 group-hover:border-blue-400 duration-200">
              SEO Optimized
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary">
              Built-in SEO tools to help your portfolio ran higher in search
              results
            </p>
          </div>
          <div className="bg-surface-1 border border-solid border-slate-800 rounded-lg hover:border-blue-400 p-4 duration-200 flex flex-col gap-4 group">
            <h2 className="text-xl sm:text-2xl md:text-3xl bg-surface-1 border border-solid border-slate-800 w-fit rounded-lg px-4 py-2 -mt-8 -ml-2 group-hover:border-blue-400 duration-200">
              Mobile Responsive
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary">
              Your portfolio looks perfect on every device, from phones to
              desktops
            </p>
          </div>
          <div className="bg-surface-1 border border-solid border-slate-800 rounded-lg hover:border-blue-400 p-4 duration-200 flex flex-col gap-4 group">
            <h2 className="text-xl sm:text-2xl md:text-3xl bg-surface-1 border border-solid border-slate-800 w-fit rounded-lg px-4 py-2 -mt-8 -ml-2 group-hover:border-blue-400 duration-200">
              Easy to Customize
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary">
              Quickly personalize your portfolio with flexible sections designed
              to showcase your work
            </p>
          </div>
          <div className="bg-surface-1 border border-solid border-slate-800 rounded-lg hover:border-blue-400 p-4 duration-200 flex flex-col gap-4 group">
            <h2 className="text-xl sm:text-2xl md:text-3xl bg-surface-1 border border-solid border-slate-800 w-fit rounded-lg px-4 py-2 -mt-8 -ml-2 group-hover:border-blue-400 duration-200">
              Professional Presence
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary">
              Create a polished online portfolio that highlights your skills and
              leaves a lasting impression
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 py-8 max-w-[1000px] mx-auto w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl">Featured portfolios</h1>
          <p className="text-secondary text-lg sm:text-xl">
            Trusted by thousands of creatives worldwide
          </p>
        </div>
        <div
          id="recommended-users"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6"
        >
          <div className="border border-solid border-slate-800 rounded-lg hover:border-blue-400 duration-200 relative rounded-lg">
            <Image
              src="/600x800.png"
              alt="Sarah Chen"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg"
            />

            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sarah Chen</h2>
              <p className="text-sm sm:text-base md:text-lg text-secondary">
                UX Designer
              </p>
            </div>
          </div>
          <div className="border border-solid border-slate-800 rounded-lg hover:border-blue-400 duration-200 relative rounded-lg">
            <Image
              src="/600x800.png"
              alt="Sarah Chen"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sarah Chen</h2>
              <p className="text-sm sm:text-base md:text-lg text-secondary">
                UX Designer
              </p>
            </div>
          </div>
          <div className="border border-solid border-slate-800 rounded-lg hover:border-blue-400 duration-200 relative rounded-lg">
            <Image
              src="/600x800.png"
              alt="Sarah Chen"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sarah Chen</h2>
              <p className="text-sm sm:text-base md:text-lg text-secondary">
                UX Designer
              </p>
            </div>
          </div>
          <div className="border border-solid border-slate-800 rounded-lg hover:border-blue-400 duration-200 relative rounded-lg">
            <Image
              src="/600x800.png"
              alt="Sarah Chen"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sarah Chen</h2>
              <p className="text-sm sm:text-base md:text-lg text-secondary">
                UX Designer
              </p>
            </div>
          </div>
          <div className="border border-solid border-slate-800 rounded-lg hover:border-blue-400 duration-200 relative rounded-lg">
            <Image
              src="/600x800.png"
              alt="Sarah Chen"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sarah Chen</h2>
              <p className="text-sm sm:text-base md:text-lg text-secondary">
                UX Designer
              </p>
            </div>
          </div>
          <div className="border border-solid border-slate-800 rounded-lg hover:border-blue-400 duration-200 relative rounded-lg">
            <Image
              src="/600x800.png"
              alt="Sarah Chen"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sarah Chen</h2>
              <p className="text-sm sm:text-base md:text-lg text-secondary">
                UX Designer
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 px-8 py-16 sm:py-20 md:py-24 mx-auto w-full text-center max-w-[1000px]">
        <h1 className="text-4xl sm:text-5xl font-semibold">
          Ready to get started?
        </h1>
        <p className="text-secondary text-lg sm:text-xl">
          Join thousands of professionals who trust our platform
        </p>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 text-lg sm:text-xl">
          <div className="text-secondary bg-surface-2 px-4 py-3 rounded-full border border-solid border-slate-800">
            <CircleCheck className="text-green-500 inline w-[1em] h-[1em] mr-2" />
            No credit card required
          </div>
          <div className="text-secondary bg-surface-2 px-4 py-3 rounded-full border border-solid border-slate-800">
            <CircleCheck className="text-green-500 inline w-[1em] h-[1em] mr-2" />
            Free templates included
          </div>
          <div className="text-secondary bg-surface-2 px-4 py-3 rounded-full border border-solid border-slate-800">
            <CircleCheck className="text-green-500 inline w-[1em] h-[1em] mr-2" />
            Unlimited revisions
          </div>
          <div className="text-secondary bg-surface-2 px-4 py-3 rounded-full border border-solid border-slate-800">
            <CircleCheck className="text-green-500 inline w-[1em] h-[1em] mr-2" />
            Cancel anytime
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 items-center">
          <Button>Start Building for Free</Button>
          <p className="text-secondary text-sm sm:text-md">
            No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
