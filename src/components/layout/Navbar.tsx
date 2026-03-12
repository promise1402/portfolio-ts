import { StaggeredMenu } from "@/components/animations";
import {
  GitHubSocialIcon,
  LinkedInSocialIcon,
  MailSocialIcon,
  type SocialTheme,
} from "@/components/layout/SocialIcons";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home section", link: "#home" },
  { label: "About", ariaLabel: "About me", link: "#about" },
  { label: "Experience", ariaLabel: "Work experience", link: "#experience" },
  { label: "Skills", ariaLabel: "My technical skills", link: "#skills" },
  { label: "Projects", ariaLabel: "View my projects", link: "#projects" },
  { label: "Education", ariaLabel: "Education", link: "#education" },
  {
    label: "Certifications",
    ariaLabel: "View my certifications",
    link: "#certifications",
  },
  { label: "Contact", ariaLabel: "Contact me", link: "#contact" },
];

const socialItems = [
  {
    label: "GitHub",
    link: "https://github.com/promise1402",
    icon: GitHubSocialIcon,
    theme: "github" as SocialTheme,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/promise-pal-499b83216/",
    icon: LinkedInSocialIcon,
    theme: "linkedin" as SocialTheme,
  },
  {
    label: "Email",
    link: "mailto:promisepal1509@gmail.com",
    icon: MailSocialIcon,
    theme: "mail" as SocialTheme,
  },
];

const Navbar = () => {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering={false}
      menuButtonColor="#0f172a"
      openMenuButtonColor="#0f172a"
      changeMenuColorOnOpen
      colors={["#ecfeff", "#22d3ee"]}
      accentColor="#0284c7"
      isFixed
      closeOnClickAway
      closeOnItemClickOnMobile
    />
  );
};

export default Navbar;
