import logo from "./logo.svg";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function App() {
  return (
    <div>
      <h1>My Courses</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
