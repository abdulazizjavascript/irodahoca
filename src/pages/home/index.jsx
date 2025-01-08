import Hero from "./components/hero"
import Irodahoca from "../../components/irodahoca";
import CourseAudience from "./components/course-audience";
import Course from "./components/course";
import CourseProcess from "./components/course-process";
const HomePage = () => {
  return (
    <div className="font-roboto">
      <Hero />
      <CourseAudience />
      <Course />
      <CourseProcess />
      <Irodahoca />
    </div>
  )
}

export default HomePage