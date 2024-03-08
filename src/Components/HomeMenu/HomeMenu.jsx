import Head from "../Head/Head";
import "./HomeMenu.css";

const HomeMenu = ({ title }) => {
  return (
    <div className="mainPage">
      <Head title={title} />
      <div className="container">
        <div className="homeContent">
          <h1>
            Shakya <span>IAS</span> Academy
          </h1>
          <p>
            Sakhya IAS academy is established in the year 2021 under the
            guidance of Mr.T.Christu Raj IAS, with the intention of creating IAS
            officers from the poorest family to serve the society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
