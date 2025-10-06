import { useEffect } from "react";

export default function Writing() {
  useEffect(() => {
    document.title = "Writing - Nikhil Garakapati";
  }, []);

  return (
    <div className="pb-12 pt-12">
      <div className="mx-auto w-full max-w-[640px] px-6">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-[605.625px]">
            <h1 className="text-[24px] leading-[39px] mb-8 text-slate-800">
              Writing
            </h1>
            <div className="flex flex-col items-start gap-6">
              <p className="text-slate-700 leading-[26px]">
                I write about technology, optimism, and human behavior. You can find my latest thoughts and insights here.
              </p>
              <p className="text-slate-700 leading-[26px]">
                This page is currently under construction. Check back soon for my writing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
