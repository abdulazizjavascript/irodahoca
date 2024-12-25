import { Fragment } from "react"
import Hero from "./components/hero"
import StatsShowCase from './components/stats-show-case';
import Plans from "./components/plan";
import UZTURK from "./components/uzturk";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <StatsShowCase />
      <Plans />
      <UZTURK />
    </Fragment>
  )
}

export default HomePage