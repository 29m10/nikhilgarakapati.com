import React, { useEffect } from "react";

export default function BucketList() {
  useEffect(() => {
    document.title = "Bucket List - Nikhil Garakapati";
  }, []);

  const ITEMS: { id: number; text: string }[] = [];
  const total = ITEMS.length;
  const completed = 0;

  return (
    <div className="pb-24 pt-24">
      <div className="mx-auto w-full max-w-[720px] px-6">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-semibold text-slate-900 mb-4">Bucket List</h1>

          <p className="text-sm text-slate-600 mb-4">
            Things I'm excited to do — a mixture of travel, projects, and curiosities.
          </p>

          <div className="flex items-baseline gap-4 mb-4">
            <p className="text-sm text-slate-600">Current status:</p>
            <p className="text-sm font-medium text-slate-900">{completed} / {total}</p>
          </div>

          {ITEMS.length === 0 ? (
            <div className="text-slate-700 py-12 text-center">
              <p className="mb-2">No items yet.</p>
              <p className="text-sm text-slate-600">I'll populate this list soon.</p>
            </div>
          ) : (
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              {ITEMS.map((it) => (
                <li key={it.id} className="flex items-start gap-3">
                  <div className="flex-1">
                    <span className="text-slate-700">{it.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
