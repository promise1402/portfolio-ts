import { useId } from "react";
import { Github, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";

export type SocialTheme = "github" | "linkedin" | "mail";

type SocialIconProps = {
  className?: string;
};

export const getSocialButtonThemeClassName = (theme: SocialTheme) => {
  switch (theme) {
    case "github":
      return "border-slate-300 text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white";
    case "linkedin":
      return "border-sky-200 text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white";
    case "mail":
      return "border-rose-200 text-[#EA4335] hover:border-transparent hover:bg-[linear-gradient(135deg,_#4285F4_0%,_#34A853_25%,_#FBBC05_55%,_#EA4335_100%)] hover:text-white";
  }
};

export const GitHubSocialIcon = ({ className }: SocialIconProps) => {
  return <Github className={cn("transition-colors duration-300", className)} />;
};

export const LinkedInSocialIcon = ({ className }: SocialIconProps) => {
  return <Linkedin className={cn("transition-colors duration-300", className)} />;
};

export const MailSocialIcon = ({ className }: SocialIconProps) => {
  const gradientId = useId();

  return (
    <span className={cn("relative inline-flex items-center justify-center", className)} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-full w-full shrink-0 transition-opacity duration-300 group-hover:opacity-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="25%" stopColor="#34A853" />
            <stop offset="55%" stopColor="#FBBC05" />
            <stop offset="100%" stopColor="#EA4335" />
          </linearGradient>
        </defs>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2.5"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
        />
        <path
          d="M4 7L12 13L20 7"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute inset-0 h-full w-full shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M4 7L12 13L20 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
