export default function SubjectCard({
  name,
  code,
}: {
  name: string;
  code: number;
}) {
  return (
    <div className="md:w-70 md:h-23 bg-zinc-900 rounded-lg border-2 border-zinc-800 p-3 flex cursor-pointer hover:bg-zinc-800 transition-colors duration-200">
      <div className="h-4/5 aspect-square bg-blue-600 rounded-md"></div>
      <div className="ml-3 text-white text-left">
        <h3 className="font-semibold text-xl pl-0">{name}</h3>
        <p className="text-sm text-zinc-400">CAIE | {code}</p>
      </div>
    </div>
  );
}
