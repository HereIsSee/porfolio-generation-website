import { Twitter } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import MediaIcon from "@/components/icons/MediaIcon";

export default function Footer() {
  return (
    <footer>
      <div className="border-y border-border">
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-primary text-2xl">PorfolioBuilder</h2>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Professional portfolio builder for modern creatives
            </p>
            <div className="flex gap-4 mt-4">
              <MediaIcon>
                <Twitter size={20} />
              </MediaIcon>
              <MediaIcon>
                <Github size={20} />
              </MediaIcon>
              <MediaIcon>
                <Linkedin size={20} />
              </MediaIcon>
              <MediaIcon>
                <Instagram size={20} />
              </MediaIcon>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-primary text-base sm:text-lg md:text-xl">
              Product
            </h2>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Features
            </p>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Templates
            </p>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Pricing
            </p>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Examples
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-primary text-base sm:text-lg md:text-xl">
              Company
            </h2>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              About
            </p>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Contact
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-primary text-base sm:text-lg md:text-xl">
              Resources
            </h2>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Documentation
            </p>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Terms
            </p>
            <p className="text-secondary text-sm sm:text-base md:text-lg">
              Privacy
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 items-center justify-between text-secondary">
        <p>© 2026 PorfolioBuilder. All rights reserved.</p>
        <div className="flex gap-4">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
}
