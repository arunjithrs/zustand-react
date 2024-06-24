import React from "react";
import useCourseStore from "../app/courseStore";

export default function CourseList() {
  const { removeCourse, toggleCourseStatus } = useCourseStore((state) => ({
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus,
  }));

  const courses = useCourseStore((store) => store.courses);

  return (
    <div>
      {courses.map((item) => {
        return (
          <h3>
            {item.title}
            <button onClick={() => removeCourse(item.id)}>Remove</button>
          </h3>
        );
      })}
    </div>
  );
}
