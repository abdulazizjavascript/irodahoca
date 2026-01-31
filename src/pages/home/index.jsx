import Hero from "./components/hero"

import ReactPixel from "react-facebook-pixel";
const HomePage = () => {

  ReactPixel.init( "737186109151500" );
  ReactPixel.pageView(); // For page load
  ReactPixel.track( "PageView" ); // Custom events

  return (
    <div>
      <Hero />
    </div>
  )
}

export default HomePage