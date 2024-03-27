import { crew } from "../../assets/data.json";
import { useState } from "react";
import "./crew.css";
export default function Crew() {
  const [active, setActive] = useState(0);
  function getData() {
    return crew[active];
  }
  return (
    <div className="crew">
      <h1 className="heading5">
        <span className="num">02</span> Meet your crew
      </h1>
      <div className="crewContent">
        <section className="crewLeftSide">
          <div className="crewInfo">
            <h2 className="heading4 role">{getData().role}</h2>
            <h1 className="heading3 crewName">{getData().name}</h1>
            <p className="bodyText crewBodyText">{getData().bio}</p>
          </div>
          <div className="crewNav">
            {crew.map((item, index) => {
              return (
                <div
                  className={`navCircle ${
                    active === index && "activeNavCircle"
                  }`}
                  key={index}
                  onClick={() => setActive(index)}
                ></div>
              );
            })}
          </div>
        </section>
        <aside className="crewRightSide">
          <img src={getData().images.webp} alt={getData().name} />
        </aside>
      </div>
    </div>
  );
}
