
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          
          <div>
            <h2 className="text-lg font-semibold text-black">
              Askify
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              A simple community for developers to ask and share knowledge.
            </p>
          </div>

          
          <div className="flex items-center gap-6 text-sm text-gray-500">

            <Link
              to={'/'}
              className="transition-colors hover:text-black"
            >
              Home
            </Link>

            <a
              href="#"
              className="transition-colors hover:text-black"
            >
              Questions
            </a>

            <Link
              to={'/profile'}
              className="transition-colors hover:text-black"
            >
              Profile
            </Link>

          </div>
        </div>

        
        <div className="mt-3 md:mt-5 pt-2 md:pt-4 md: pb-2  text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Askify. Built with React & Spring Boot.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
