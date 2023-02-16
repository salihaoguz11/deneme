import "./Header.css";
import logo from "../../assets/clarusway.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Header;
