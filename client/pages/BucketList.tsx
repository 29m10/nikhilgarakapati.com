export default function BucketList() {
  return (
    <div className="pb-24 pt-24">
      <div className="mx-auto w-full max-w-[800px] px-6">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">Bucket List</h1>
        <p className="text-slate-700 mb-6">Things I'm excited to do — a mixture of travel, projects, and curiosities.</p>
        <ol className="list-decimal list-inside space-y-3 text-slate-700">
          <li>Visit remote islands and document the journey</li>
          <li>Write a book about human-centered product design</li>
          <li>Build a small, privacy-first social app</li>
        </ol>
      </div>
    </div>
  );
}
