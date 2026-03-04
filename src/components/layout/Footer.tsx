const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Promise Pal. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <a
            href="https://www.linkedin.com/in/promise-pal-499b83216/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/promise1402"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:promisepal1509@gmail.com"
            className="hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

