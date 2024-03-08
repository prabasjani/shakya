import Head from "../Head/Head";
import "./HighLights.css";
import { highLightsData, specilityData } from "../../Data";
import { UilAngleDoubleRight } from "@iconscout/react-unicons";

const HighLights = ({ title }) => {
  return (
    <div className="mainPage">
      <Head title={title} />
      <div className="container highlightContainer">
        <div className="highLightsPage">
          {highLightsData.map((highLight, index) => {
            return (
              <div className="highLight" key={index}>
                <img src={highLight.src} alt="" />
                <span>
                  <h2>{highLight.title}</h2>
                  <p>{highLight.desc}</p>
                </span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="specialities">
          <h1>Fecilities</h1>
          {specilityData.map((speciality, index) => {
            return (
              <div className="speciality" key={index}>
                <div className="highLightIcon">
                  <UilAngleDoubleRight width={75} height={75} />
                </div>
                <span>{speciality}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HighLights;
