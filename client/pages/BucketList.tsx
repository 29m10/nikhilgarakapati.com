import React, { useEffect } from "react";

type Item = {
  id: number;
  text: string;
  note?: string;
  link?: string;
  done?: boolean;
};

const ITEMS: Item[] = [
  { id: 1, text: "Write a book", done: false },
  { id: 2, text: "Read 1000 good books", note: "(216)", link: "https://example.com/books", done: true },
  { id: 3, text: "See the Manhattan skyline", done: true },
  { id: 4, text: "Scuba-diving", done: false },
  { id: 5, text: "Sky-diving", done: false },
  { id: 6, text: "Stay at a Buddhist monastery", done: false },
  { id: 7, text: "Jump from a cliff", done: true },
  { id: 8, text: "Get a patent", done: false },
  { id: 9, text: "See the view from the top of Taipei 101", done: true },
  { id: 10, text: "Eat sushi in Tokyo", done: false },
  { id: 11, text: "Drink Whiskey in Scotland", done: true },
  { id: 12, text: "Watch football in a British pub", done: true },
  { id: 13, text: "Learn conversational Japanese", done: false },
  { id: 14, text: "Build and launch a tiny product", done: false },
  { id: 15, text: "Sail around an island", done: false },
];

export default function BucketList() {
  useEffect(() => {
    document.title = "Bucket List - Nikhil Garakapati";
  }, []);

  const total = ITEMS.length;
  const completed = ITEMS.filter((i) => i.done).length;

  return (
    <div className="pb-24 pt-24">
      <div className="mx-auto w-full max-w-[720px] px-6">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-semibold text-slate-900 mb-4">Bucket List</h1>

          <p className="text-sm text-slate-600 mb-4">
            I was inspired by Chip Hyuen’s List 100 to create and maintain this list. This
            list is a collection of moments that I want to experience before I drop off the face of this planet.
          </p>

          <div className="flex items-baseline gap-4 mb-4">
            <p className="text-sm text-slate-600">Current status:</p>
            <p className="text-sm font-medium text-slate-900">{completed} / {total}</p>
          </div>

          <ol className="list-decimal list-inside space-y-3 text-slate-700">
            {ITEMS.map((it) => (
              <li key={it.id} className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={it.done ? "text-emerald-600 font-medium" : "text-slate-700"}>
                      {it.link ? (
                        <a href={it.link} target="_blank" rel="noopener" className={it.done ? "text-emerald-600 hover:underline" : "text-sky-600 hover:underline"}>
                          {it.text}
                        </a>
                      ) : (
                        <span>{it.text}</span>
                      )}
                    </span>
                    {it.note ? <span className="text-sm text-amber-600">{it.note}</span> : null}
                  </div>
                </div>

                {it.done ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.364a1 1 0 011.414-1.414l3.036 3.036 6.657-6.657a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
