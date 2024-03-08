import Head from "../Head/Head";
import "./Achievers.css";
import { achieversData } from "../../Data";

const Achievers = ({ title }) => {
  return (
    <div className="mainPage">
      <Head title={title} />
      <div className="container">
        <div className="achieversPage">
          <h2>Our Academy Toppers</h2>
          <div className="achiversContainers">
            {achieversData.map((achiever, index) => {
              return (
                <div className="achieversCard" key={index}>
                  <span>
                    <achiever.src width={140} height={140} />
                  </span>
                  <hr />
                  <h3>{achiever.name}</h3>
                  <h4>{achiever.post}</h4>
                  <p>{achiever.year}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievers;
