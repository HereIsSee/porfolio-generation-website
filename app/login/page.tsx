import { Button } from "@/components/ui/Button";
import { Mail, Github } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col gap-8 max-w-[400px] mx-auto w-full min-h-screen py-24 px-4 ">
      <Link href="/" className="text-2xl font-bold text-primary text-center">
        PortfolioBuilder
      </Link>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-semibold text-primary">Welcome Back</h1>
        <h2 className="text-secondary">Sign in to your account to continue</h2>
      </div>

      <div className="flex flex-col gap-4">
        <Button className="w-full bg-surface-2 hover:bg-surface-3 text-primary border border-slate-800">
          <Github size={20} className="mr-2" />
          Continue with Github
        </Button>
        <Button className="w-full bg-surface-2 hover:bg-surface-3 text-primary border border-slate-800">
          <Mail size={20} className="mr-2" />
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
          <div className="flex justify-between items-center">
            <label
              className="text-secondary text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <a
              href="#"
              className="text-secondary hover:text-blue-400 text-sm transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="bg-surface-1 border border-slate-800 rounded-md p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 rounded border-slate-800 bg-surface-1 text-blue-500 focus:ring-blue-500 focus:ring-offset-surface-1"
          />
          <label htmlFor="remember" className="text-secondary text-sm">
            Remember me
          </label>
        </div>

        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-black">
          Sign in
        </Button>
      </form>

      <p className="text-center text-secondary text-sm mt-4">
        Don&apos;t have an account?
        <Link
          href="/register"
          className="text-blue-500 hover:text-blue-400 transition-colors"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
