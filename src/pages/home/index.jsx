import Hero from "./components/hero"
import Irodahoca from "../../components/irodahoca";
import CourseAudience from "./components/course-audience";
import Course from "./components/course";
import CourseProcess from "./components/course-process";
import CourseEnd from "./components/course-end";
import Guarantee from "./components/guarantee";
import PricingTable from "./components/packages";
import CountdownTimer from "./components/timer";

const HomePage = () => {
  return (
    <div className="font-roboto">
      <Hero />
      <CourseAudience />
      <Course />
      <CourseProcess />
      <Irodahoca />
      <CourseEnd />
      <Guarantee />
      <PricingTable />
      <CountdownTimer />
    </div>
  )
}

export default HomePage