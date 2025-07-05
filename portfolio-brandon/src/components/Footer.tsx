export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-4 items-center">
          <a
            href="mailto:brandon@email.com"
            className="hover:underline hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://github.com/your-github"
            className="hover:underline hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            className="hover:underline hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Brandon. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 