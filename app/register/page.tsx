import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col gap-8 max-w-[400px] mx-auto w-full min-h-screen py-24 px-4">
      <Link href="/" className="text-2xl font-bold text-primary text-center">
        PortfolioBuilder
      </Link>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-semibold text-primary">
          Create an account
        </h1>
        <h2 className="text-secondary">Sign up to get started</h2>
      </div>

      <div className="flex flex-col gap-4">
        <Button className="w-full bg-surface-2 hover:bg-surface-3 text-primary border border-slate-800">
          Continue with Github
        </Button>
        <Button className="w-full bg-surface-2 hover:bg-surface-3 text-primary border border-slate-800">
          Continue with Google
        </Button>
      </div>

      <div className="flex items-center gap-4 text-secondary text-sm">
        <div className="flex-1 h-px bg-slate-800"></div>
        <div>Or continue with email</div>
        <div className="flex-1 h-px bg-slate-800"></div>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-secondary text-sm font-medium" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="bg-surface-1 border border-slate-800 rounded-md p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-secondary text-sm font-medium" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            className="bg-surface-1 border border-slate-800 rounded-md p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-secondary text-sm font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="bg-surface-1 border border-slate-800 rounded-md p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-secondary text-sm font-medium"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="••••••••"
            className="bg-surface-1 border border-slate-800 rounded-md p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-black">
          Sign up
        </Button>
      </form>

      <div className="text-center text-secondary text-sm mt-4 flex flex-col gap-1">
        <div>Already have an account?</div>
        <Link
          href="/login"
          className="text-blue-500 hover:text-blue-400 transition-colors"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
