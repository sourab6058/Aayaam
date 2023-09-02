import { useState } from "react";
import "./App.css";

import diwali from "./assets/diwali.jpg";
import dhillon from "./assets/dhillon.jpg";
import holi from "./assets/holi.jpg";
import concert from "./assets/concert.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Nav from "./components/Nav";
import Mid from "./components/Mid";
import Extra from "./components/Extra";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ENGLISH = "ENGLISH";
const HINDI = "HINDI";

function App() {
  const [lang, setLang] = useState(ENGLISH);
  return (
    <div>
      <div className="hero">
        <Nav lang={lang} setLang={setLang} />
        <Carousel
          infinite={true}
          autoPlaySpeed={3000}
          autoPlay={true}
          responsive={responsive}
        >
          <div className="img-cont">
            <img
              src={holi}
              style={{ height: "80vh", width: "100vw", objectFit: "cover" }}
              className="c-img"
            />
          </div>
          <div className="img-cont">
            <img
              src={diwali}
              style={{ height: "80vh", width: "100vw", objectFit: "cover" }}
              className="c-img"
            />
          </div>
          <div className="img-cont">
            <img
              src={dhillon}
              style={{ height: "80vh", width: "100vw", objectFit: "cover" }}
              className="c-img"
            />
          </div>
          <div className="img-cont">
            <img
              src={concert}
              style={{ height: "80vh", width: "100vw", objectFit: "cover" }}
              className="c-img"
            />
          </div>
        </Carousel>
        <Mid lang={lang} />
        <Extra lang={lang} />
        <div className="tag">
          {lang == ENGLISH
            ? "Small Effort by Sourab Kumar for a Big Change."
            : "बड़े बदलाव के लिए सौरब कुमार का छोटा सा प्रयास।"}
        </div>
      </div>
    </div>
  );
}

export default App;
