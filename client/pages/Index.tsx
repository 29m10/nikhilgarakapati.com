import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // No-op but keeps parity with design's hidden <title> content
  }, []);

  return (
    <div className="pb-12 pt-12">
      <div className="mx-auto w-full max-w-[640px] px-6">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-[605.625px]">
            <p className="text-[24px] leading-[39px] mb-8 text-slate-800">
              <span>Hello, I'm Nikhil.</span>
            </p>
            <div className="flex flex-col items-start gap-6">
              <p className="text-slate-700 leading-[26px]">
                I'm a Product Manager at
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://order.siterecon.ai/"
                  className="inline ml-1 text-sky-600 border-b border-black outline-offset-2 transition-colors duration-150"
                >
                  SiteRecon
                </a>
                , where I help landscaping companies improve sales, retention, and profitability using advanced mapping and job site management tools, and of course, with the help of AI as well.
              </p>
              <p className="text-slate-700 leading-[26px]">
                In the past, I've worked with
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://fitmint.io/"
                  className="inline ml-1 text-sky-600 border-b border-black outline-offset-2 transition-colors duration-150"
                >
                  Fitmint
                </a> (Seed round),
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://mymedisage.com/"
                  className="inline ml-1 text-sky-600 border-b border-black outline-offset-2 transition-colors duration-150"
                >
                  MediSage
                </a> (Series A), and
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://goapptiv.com/"
                  className="inline ml-1 text-sky-600 border-b border-black outline-offset-2 transition-colors duration-150"
                >
                  GoApptiv
                </a>                 (Series B), building a Web3 fitness app, scaling a LinkedIn-like platform for healthcare professionals, and leveraging tech to deliver quality medicines across India. Those experiences shaped my journey from engineering to product management.
              </p>
              <p className="text-slate-700 leading-[26px]">
               In my downtime, you'll find me watching football (not soccer), cheering for <span style={{backgroundColor: '#F7B5CD'}} className="text-slate-800 px-1">Messi</span>, and rewatching prime El Clásico highlights, much to the annoyance of my friends.
              </p>
                <p className="text-slate-700 leading-[26px]">
                  I also love exploring new places and trying out local, authentic food wherever I go, recently, I visited <span className="bg-yellow-200 text-slate-800 px-1">Manali</span> and <span className="bg-yellow-200 text-slate-800 px-1">Udaipur</span>, two completely different geographies that somehow felt equally amazing in their own ways.
                </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
