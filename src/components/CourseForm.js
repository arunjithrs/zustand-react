import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState("");
  console.log("Course form rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("please add a course titles");

    addCourse({
      id: Math.ceil(Math.random() * 1000000000),
      title: courseTitle,
    });

    setCourseTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />

      <button
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add Course
      </button>
    </div>
  );
}
