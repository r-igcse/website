"use client";

import { useState } from "react";
import ResourceList from "./ResourceList";

export default function ResourcesDisplay() {
  const igcseList = [{}];
  const [grade, setGrade] = useState("IGCSE");

  return (
    <div>
      <div className="flex justify-center md:gap-15 gap-5 md:text-xl text-base">
        <h2
          className={`cursor-pointer transition-colors duration-200 ${grade == "IGCSE" && "text-primary-500"}`}
          onClick={() => setGrade("IGCSE")}
        >
          IGCSE
        </h2>
        <h2
          className={`cursor-pointer transition-colors duration-200 ${grade == "A-Levels" && "text-primary-500"}`}
          onClick={() => setGrade("A-Levels")}
        >
          A-Levels
        </h2>
      </div>
      <ResourceList grade={grade} />
    </div>
  );
}
