import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import logo from "../assets/new logo.svg";
import logoElrond from "../assets/elrond-egld-egld-logo 1.png";

const Header = () => {
  const url = "#";
  return (
    <div className="header-container">
        <div className="header-container-up">
      <div className="hatom-logo">
        <img src={logo} alt="hatom-logo" /><span>hatom</span>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <a href={url}>Markets</a>
          </li>
          <li>
            <a href={url}>Governance</a>
          </li>
          <li>
            <a href={url}>Prices</a>
          </li>
          <li>
            <a href={url}>Docs</a>
          </li>
          <li>
            <a href={url}>Hatom Token</a>
          </li>
          <li>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label=""
              size="small"
            />
            
          </FormGroup>
          </li>
        </ul>
      </div>
      <div className="btns" >
        <button className="btn-elrond" > <img src={logoElrond} alt="logo elrond" /> Elrond</button>
        <button className="btn-app" >App</button>
      </div>
      </div>
      <div className="header-container-down">
        <h1>Hatom Token</h1>
        <p>Deep dive into the heart of Hatom Protocol</p>
      </div>
    </div>
  );
};

export default Header;
