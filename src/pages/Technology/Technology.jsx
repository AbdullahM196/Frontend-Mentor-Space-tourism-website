import "./technology.css";
import { technology } from "../../assets/data.json";
import { useState } from "react";
export default function Technology() {
  const [active, setActive] = useState(0);
  function getData() {
    return technology[active];
  }
  return (
    <div className="technology">
      <h1 className="heading5">
        <span className="num">03</span> Space launch 101
      </h1>
      <div className="technologyBody">
        <section className="leftSide">
          <nav className="technologyNav">
            {technology.map((item, index) => {
              return (
                <div
                  className={`technologyCircle heading4 ${
                    index === active && "activeTechnologyCircle"
                  } `}
                  key={index}
                  onClick={() => setActive(index)}
                >
                  {index + 1}
                </div>
              );
            })}
          </nav>
          <div className="technologyInfo">
            <h3 className="navText">The Terminology</h3>
            <h1 className="heading3">{getData().name}</h1>
            <p className="bodyText">{getData().description}</p>
          </div>
        </section>
        <aside className="rightSide">
          <img
            className="technologyImage"
            src={getData().images.portrait}
            alt={getData().name}
          />
        </aside>
      </div>
    </div>
  );
}
