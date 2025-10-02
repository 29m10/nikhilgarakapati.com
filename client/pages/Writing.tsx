export default function Writing() {
  return (
    <div className="pb-24 pt-24">
      <div className="mx-auto w-full max-w-[800px] px-6">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">Writing</h1>
        <p className="text-slate-700 mb-6">A curated list of essays and posts. Click any item to read more.</p>
        <ul className="space-y-6">
          <li className="p-6 bg-white border border-gray-100 rounded-md shadow-sm">
            <a href="https://vivekkaushal.com/blog/the-6-tools-and-a-workflow-to-build-using-ai" target="_blank" rel="noopener" className="block">
              <h2 className="text-lg font-semibold text-slate-900">The 6 tools, and a workflow to build using AI</h2>
              <p className="text-sm text-slate-600 mt-2">My current workflow of leveraging AI to build software, and AI.</p>
            </a>
          </li>
          <li className="p-6 bg-white border border-gray-100 rounded-md shadow-sm">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">More coming soon</h2>
              <p className="text-sm text-slate-600 mt-2">Other posts will appear here as they are added.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
