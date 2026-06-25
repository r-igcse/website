import { ChangeEvent, useState } from "react";
import { igcseSubjects, aLevelSubjects } from "@/lib/subject-lists";

export default function ResourceList({ grade }: { grade: string }) {
  const [val, setVal] = useState("");

  return (
    <div className="lg:mt-20 mt-10 mx-auto text-center md:text-base text-sm">
      <form>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Find what you're looking for"
          className="w-1/2 border-zinc-800 border-2 px-3 md:py-2 py-1 rounded-lg text-zinc-500 bg-zinc-950"
        />
      </form>
    </div>
  );
}
