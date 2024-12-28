import { Fragment } from "react"
import Hero from "./components/hero"
import StatsShowCase from './components/stats-show-case';
import Plans from "./components/plan";
import UZTURK from "./components/uzturk";
import Irodahoca from "./components/irodahoca";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <StatsShowCase />
      <Plans />
      <Irodahoca />
      <UZTURK />
    </Fragment>
  )
}

export default HomePage