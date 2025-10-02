import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    document.title = "Vivek Kaushal";
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(252,252,253)] relative transition-colors duration-200">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="mx-auto w-full max-w-[1024px] px-6">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="cursor-pointer select-none">
              <p className="cursor-pointer text-[18px] leading-[29.25px] font-bold text-slate-900 transition-colors">
                <span>Vivek Kaushal</span>
              </p>
            </Link>
            <nav className="flex items-center gap-8">
              <a
                href="https://vivekkaushal.com/blog"
                className="text-[14px] leading-[21px] font-medium text-slate-600 pb-1 border-b-2 border-transparent hover:border-black transition-colors cursor-pointer"
              >
                <span>Writing</span>
              </a>
              <a
                href="https://vivekkaushal.com/projects"
                className="text-[14px] leading-[21px] font-medium text-slate-600 pb-1 border-b-2 border-transparent hover:border-black transition-colors cursor-pointer"
              >
                <span>Projects</span>
              </a>
              <a
                href="https://vivekkaushal.com/research"
                className="text-[14px] leading-[21px] font-medium text-slate-600 pb-1 border-b-2 border-transparent hover:border-black transition-colors cursor-pointer"
              >
                <span>Research</span>
              </a>
              <a
                href="https://vivekkaushal.com/recommendations"
                className="text-[14px] leading-[21px] font-medium text-slate-600 pb-1 border-b-2 border-transparent hover:border-black transition-colors cursor-pointer"
              >
                <span>Reads</span>
              </a>
              <a
                href="https://vivekkaushal.com/bucketlist"
                className="text-[14px] leading-[21px] font-medium text-slate-600 pb-1 border-b-2 border-transparent hover:border-black transition-colors cursor-pointer"
              >
                <span>Bucket List</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 mt-20 py-8">
        <div className="mx-auto w-full max-w-[640px] px-6">
          <div className="flex items-center gap-6">
            <a
              target="_blank"
              rel="noopener"
              href="https://vivekkaushal.substack.com/"
              className="transition-opacity hover:opacity-100"
            >
              <img
                alt="Writing"
                src="https://vivekkaushal.com/icons/substack.svg"
                className="h-[18px] w-[18px] opacity-40"
              />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://x.com/vi_kaushal"
              className="transition-opacity hover:opacity-100"
            >
              <img
                alt="X/Twitter"
                src="https://vivekkaushal.com/icons/x.svg"
                className="h-[18px] w-[18px] opacity-40"
              />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://linkedin.com/in/kaushalvivek/"
              className="transition-opacity hover:opacity-100"
            >
              <img
                alt="LinkedIn"
                src="https://vivekkaushal.com/icons/linkedin.svg"
                className="h-[18px] w-[18px] opacity-40"
              />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/kaushalvivek"
              className="transition-opacity hover:opacity-100"
            >
              <img
                alt="GitHub"
                src="https://vivekkaushal.com/icons/github.svg"
                className="h-[18px] w-[18px] opacity-40"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
