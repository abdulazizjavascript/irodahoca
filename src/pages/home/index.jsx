import Hero from "./components/hero"
import Irodahoca from "../../components/irodahoca";
import CourseAudience from "./components/course-audience";
import Course from "./components/course";
import CourseProcess from "./components/course-process";
import CourseEnd from "./components/course-end";
import Guarantee from "./components/guarantee";
import PricingTable from "./components/packages";
import CountdownTimer from "./components/timer";
import Bonus from "./components/bonus";
import FAQ from "./components/faq";
import Curators from "./components/curators";
import Students from "./components/students";
import Admin from "./components/admin";

const HomePage = () => {
  return (
    <div className="font-roboto">
      <Hero />
      <CourseAudience />
      <Irodahoca />
      <Course />
      <CourseProcess />
      <CourseEnd />
      <Guarantee />
      <Bonus />
      <PricingTable />
      <Curators />
      <CountdownTimer />
      <Admin />
      <Students />
      <FAQ />
    </div>
  )
}

export default HomePage