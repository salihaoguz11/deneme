import "./Main.css";

const Main = (props) => {
  const { img, title, desc } = props;
  return (
    <div className="main">
      <div className="card">
        <h3>{title}</h3>
        <img src={img} alt="cardImg" className="cardImg" />
        <p>{desc}</p>
        <button className="btn">More Details</button>
      </div>
    </div>
  );
};

export default Main;
