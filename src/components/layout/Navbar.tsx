import { Github, Linkedin, Mail } from "lucide-react";
import { StaggeredMenu } from "@/components/animations";

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
    icon: Github,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/promise-pal-499b83216/",
    icon: Linkedin,
  },
  {
    label: "Email",
    link: "mailto:promisepal1509@gmail.com",
    icon: Mail,
  },
];

const Navbar = () => {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      menuButtonColor="#0f172a"
      openMenuButtonColor="#0f172a"
      changeMenuColorOnOpen
      colors={["#e0f2fe", "#4f46e5"]}
      accentColor="#4f46e5"
      isFixed
      closeOnClickAway
    />
  );
};

export default Navbar;
