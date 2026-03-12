import {
  GitHubSocialIcon,
  LinkedInSocialIcon,
  MailSocialIcon,
  getSocialButtonThemeClassName,
} from "@/components/layout/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Promise Pal. All rights reserved.
        </p>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <a
            href="https://www.linkedin.com/in/promise-pal-499b83216/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`group inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/90 shadow-[0_10px_18px_-14px_rgba(15,23,42,0.35)] transition-all duration-300 ${getSocialButtonThemeClassName("linkedin")}`}
          >
            <LinkedInSocialIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/promise1402"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`group inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/90 shadow-[0_10px_18px_-14px_rgba(15,23,42,0.35)] transition-all duration-300 ${getSocialButtonThemeClassName("github")}`}
          >
            <GitHubSocialIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:promisepal1509@gmail.com"
            aria-label="Email"
            className={`group inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/90 shadow-[0_10px_18px_-14px_rgba(15,23,42,0.35)] transition-all duration-300 ${getSocialButtonThemeClassName("mail")}`}
          >
            <MailSocialIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

