"use client";

import { useState } from "react";
import ResourceList from "./ResourceList";
import { igcseSubjects, aLevelSubjects } from "@/lib/subject-lists";


export default function ResourcesDisplay() {
  const [grade, setGrade] = useState("IGCSE");
  const [curList, setCurList] = useState(igcseSubjects);

  const handleGradeChange = (newGrade: string) => {
    setGrade(newGrade);
    setCurList(newGrade === "IGCSE" ? igcseSubjects : aLevelSubjects);
  };

  return (
    <div>
      <img src="bg-vector.png" alt=""  className = "fixed bottom-0 h-8/10 w-full -z-1 opacity-50"/>
      <div className="flex justify-center md:gap-15 gap-5 md:text-xl text-base">
        <h2
          className={`cursor-pointer transition-colors duration-200 ${grade == "IGCSE" && "text-primary-500"}`}
          onClick={() => handleGradeChange("IGCSE")}
        >
          IGCSE
        </h2>
        <h2
          className={`cursor-pointer transition-colors duration-200 ${grade == "A-Levels" && "text-primary-500"}`}
          onClick={() => handleGradeChange("A-Levels")}
        >
          A-Levels
        </h2>
      </div>
      <p></p>
      <ResourceList curList={curList} />
    </div>
  );
}
