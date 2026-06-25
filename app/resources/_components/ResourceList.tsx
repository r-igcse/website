import { useState } from "react";
import { igcseSubjects, aLevelSubjects } from "@/lib/subject-lists";
import SubjectCard from "./SubjectCard";

export default function ResourceList({ grade }: { grade: string }) {
  let curList = grade === "IGCSE" ? igcseSubjects : aLevelSubjects;
  const [val, setVal] = useState("");
  const [filteredList, setFilteredList] = useState(curList);

  const valueChanged = (e: any) => {
    setVal(e.target.value);
    const newList = curList.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    return newList;
  };

  return (
    <div className="lg:mt-15 mt-10 mx-auto text-center md:text-base text-sm">
      <form className="flex w-1/2 border-zinc-800 border-2 rounded-lg text-zinc-500 bg-zinc-950 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="text-zinc-700 m-2 mr-0"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setFilteredList(valueChanged(e));
          }}
          placeholder="Find what you're looking for"
          className="w-full px-3 py-1 md:text-lg text-base focus:outline-none flex-1 min-w-0"
        />
      </form>
      <div className="flex mt-5 flex-wrap gap-2 w-3/4 mx-auto justify-between">
        {filteredList.map((item, i) => {
          return <SubjectCard name={item.name} code={item.code} key={i} />;
        })}
      </div>
    </div>
  );
}
