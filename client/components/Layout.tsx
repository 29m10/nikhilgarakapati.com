import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    document.title = "Nikhil Garakapati";
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(252,252,253)] relative transition-colors duration-200">
      <header className="sticky top-0 z-10 backdrop-blur bg-[rgb(252,252,253)]/80">
        <div className="mx-auto w-full max-w-[1024px] px-6">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="cursor-pointer select-none">
              <p className="cursor-pointer text-[18px] leading-[29.25px] font-bold text-slate-900 transition-colors">
                <span>Nikhil Garakapati</span>
              </p>
            </Link>
            <nav className="flex items-center gap-8">
              <Link
                to="/bucketlist"
                className="text-[14px] leading-[21px] font-medium text-slate-600 pb-1 border-b-2 border-transparent hover:border-black transition-colors cursor-pointer"
              >
                <span>Bucket List</span>
              </Link>

              <a
                href="/resume.pdf"
                download="Nikhil_Garakapati_Resume.pdf"
                className="text-[14px] leading-[21px] font-medium text-slate-600 pb-1 border-b-2 border-transparent hover:border-black transition-colors cursor-pointer"
              >
                <span>Resume</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mt-12 py-6">
        <div className="mx-auto w-full max-w-[640px] px-6">
          <div className="flex items-center gap-6 justify-center">
            <a
              target="_blank"
              rel="noopener"
              href="https://x.com/nikhiltwtss"
              className="transition-opacity hover:opacity-100"
            >
              <svg
                className="h-[18px] w-[18px] opacity-40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://linkedin.com/in/nikhilgarakapati"
              className="transition-opacity hover:opacity-100"
            >
              <svg
                className="h-[18px] w-[18px] opacity-40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://topmate.io/nikhil_garakapati/"
              className="transition-opacity hover:opacity-100"
            >
              <img
                src="https://topmate.io/favicon.ico"
                alt="Topmate"
                className="h-[18px] w-[18px] opacity-40"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
