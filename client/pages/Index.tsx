import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // No-op but keeps parity with design's hidden <title> content
  }, []);

  return (
    <div className="pb-24 pt-24">
      <div className="mx-auto w-full max-w-[640px] px-6">
        <div className="flex flex-col items-start gap-12">
          <div className="max-w-[605.625px]">
            <p className="text-[24px] leading-[39px] mb-8 text-slate-800">
              <span>Hello, I'm Vivek Kaushal.</span>
            </p>
            <div className="flex flex-col items-start gap-6">
              <p className="text-slate-700 leading-[26px]">
                I'm the founding Product Manager at
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://enterpret.com/"
                  className="inline ml-1 text-sky-600 border-b border-black outline-offset-2 transition-colors duration-150"
                >
                  Enterpret
                </a>
                , where I help companies transform unstructured user feedback into actionable insights to build better products and experiences.
              </p>
              <p className="text-slate-700 leading-[26px]">
                In past, I've engineered software systems at Samsung Research and built applications for the Delhi and Indian governments. I studied computer science at IIIT Hyderabad and researched behavioral economics at NTU Taiwan, exploring decision-making.
              </p>
              <p className="text-slate-700 leading-[26px]">
                I'm fascinated by the intersection of human psychology and technology. I find joy in building systems and experiences.
              </p>
              <p className="text-slate-700 leading-[26px]">
                In my downtime you'll find me being snooty about coffee, reading books, and enjoying fringe rock music. I write technology, optimism, and human behavior on
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://vivekkaushal.substack.com/"
                  className="inline ml-1 text-sky-600 border-b border-black outline-offset-2 transition-colors duration-150"
                >
                  Applied Techno-optimism
                </a>
                <span className="mx-1">and</span>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/vi_kaushal"
                  className="inline text-sky-600 border-b border-black outline-offset-2 transition-colors duration-150"
                >
                  X
                </a>
                .
              </p>
            </div>
          </div>

          <hr className="w-full border-b border-gray-200 opacity-60 mt-0 mb-4" />

          <div className="w-full">
            <a
              href="https://vivekkaushal.com/blog/the-6-tools-and-a-workflow-to-build-using-ai"
              className="inline outline-offset-2 transition-colors duration-150 border-b border-black"
            >
              <div className="text-sky-600 transition-colors duration-150">
                <p className="text-[14px] leading-[22.75px] tracking-[0.35px] mb-2 text-gray-500">
                  Latest writing
                </p>
                <h2 className="text-[18px] leading-[24.75px] font-semibold mb-2 cursor-pointer">
                  The 6 tools, and a workflow to build using AI
                </h2>
                <p className="text-slate-600 overflow-hidden text-ellipsis">
                  My current workflow of leveraging AI to build software, and AI.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
