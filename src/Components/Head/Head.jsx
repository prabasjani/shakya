import "./Head.css";

const Head = ({ title }) => {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <h3>
        Shakya <span>IAS</span> Academy
      </h3>
    </div>
  );
};

export default Head;
