import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Save } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[800px] mx-auto w-full">
      <div>
        <div className="text-2xl font-semibold">Profile</div>
        <p className="text-secondary">
          Update your personal information and profile picture
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <h3 className="text-sm text-secondary">Profile Picture</h3>
        <div className="flex-1 flex gap-2 items-center ">
          <Image
            src="/profile.png"
            alt="Profile"
            width={600}
            height={800}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2 justify-center items-center">
            <Button>Upload new photo</Button>
            <div className="text-secondary text-sm">
              JPG, PNG or GIF. Max size 2MB.
            </div>
          </div>
        </div>
      </div>

      <form className="flex flex-col gap-4 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <div className="flex flex-col gap-2">
          <label
            className="text-secondary text-sm font-medium"
            htmlFor="full-name"
          >
            Full name
          </label>
          <input
            type="text"
            id="full-name"
            value="John"
            className="bg-background border border-slate-800 rounded-xl p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-secondary text-sm font-medium" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value="John"
            className="bg-background border border-slate-800 rounded-xl p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-secondary text-sm font-medium" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            value="John"
            className="bg-background border border-slate-800 rounded-xl p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-secondary text-sm font-medium" htmlFor="email">
            Website
          </label>
          <input
            type="email"
            id="email"
            value="John"
            className="bg-background border border-slate-800 rounded-xl p-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <Button className="inline-flex items-center w-fit">
          <Save size={18} /> Save Changes
        </Button>
      </form>
    </div>
  );
}
