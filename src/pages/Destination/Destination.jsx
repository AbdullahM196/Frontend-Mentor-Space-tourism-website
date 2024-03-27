import "./destination.css";
import { destinations } from "../../assets/data.json";
import { useState } from "react";
export default function Destination() {
  const data = destinations[0];
  const [active, setActive] = useState("Moon");
  function getData() {
    return destinations.find((dest) => {
      return dest.name === active;
    });
  }
  return (
    <div className="destination">
      <h1 className="heading5">
        <span className="num">01</span> Pick your destination
      </h1>
      <div className="destinationContent">
        <section>
          <img src={getData().images.webp} alt={data.name} />
        </section>
        <aside>
          <ul className="destinationNav">
            {destinations.map((item, index) => {
              return (
                <li
                  className={
                    "navText destinationNavItems" +
                    (active === item.name ? " active" : "")
                  }
                  key={index}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div className="destinationInfo">
            <h1 className="heading2">{getData().name}</h1>
            <p className="bodyText destinationBodyText">
              {getData().description}
            </p>
            <hr />
            <div className="distance">
              <div>
                <p className="subHeading2">AVG. DISTANCE</p>
                <p className="destinationText">{getData().distance}</p>
              </div>
              <div>
                <p className="subHeading2">EST. TRAVEL TIME</p>
                <p className="destinationText">{getData().travel}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
