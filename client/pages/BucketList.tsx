import { useEffect } from "react";

export default function BucketList() {
  useEffect(() => {
    document.title = "Bucket List - Nikhil Garakapati";
  }, []);

  return (
    <div className="pb-12 pt-12">
      <div className="mx-auto w-full max-w-[640px] px-6">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-[605.625px]">
            <h1 className="text-[24px] leading-[39px] mb-8 text-slate-800">
              Bucket List
            </h1>
            <div className="flex flex-col items-start gap-6">
              <p className="text-slate-700 leading-[26px]">
                A collection of experiences, places, and goals I'd like to
                accomplish in my lifetime.
              </p>
              <p className="text-slate-700 leading-[26px]">
                This page is currently under construction. Check back soon for
                my personal bucket list!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
