import { Container } from "react-bootstrap";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import brand from "../images/logo1.png";
import brandBig from "../images/logo2.png";
import home from "../images/fi_home.svg";
import truck from "../images/fi_truck.svg";
import menu from "../images/fi_menu.svg";
import avatar from "../images/avatar.svg";
import rightArrow from "../images/fi_chevron_right.svg";
import downArrow from "../images/fi_chevron-down.svg";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="d-flex">
          <div className={styles.sidebar}>
            <Link to="/">
              <img className={styles.logo1} src={brand} alt="aaa" />
              <div>
                <img className={styles.logo1} src={home} alt="" />
                <p className={styles.textSide} style={{ marginLeft: "5px" }}>
                  Dashboard
                </p>
              </div>
            </Link>
            <div>
              <Link to="/listcar">
                <img className={styles.logo1} src={truck} alt="" />

                <p className={styles.textSide} style={{ marginLeft: "18px" }}>
                  Cars
                </p>
              </Link>
            </div>
          </div>
          <div className={styles.leftMenu}>
            <div>
              <img className={styles.logo2} src={brandBig} alt="" />
            </div>
            <div>
              <h1 className={styles.menuH1}>DASHBOARD</h1>
              <div className={styles.menuP}>
                <p>Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.navbar}>
            <div className={styles.menuLogo}>
              <img src={menu} alt="menu" />
            </div>
            <div className={styles.navbarRightSide}>
              <div className={styles.navSearch}>
                <input type="text" placeholder="Search" />
                <button>Search</button>
              </div>
              <div className={styles.account}>
                <img src={avatar} alt="acc-icon" />
                <p>Unis Badri</p>
                <img src={downArrow} alt="down" />
              </div>
            </div>
          </div>
          <div className={styles.containerDash}>
            <div className={styles.breadcrumb}>
              <h6>Dashboard</h6>
              <img src={rightArrow} alt="right" style={{ margin: "-5px 5px" }} />
              <h6 style={{ fontWeight: "300" }}>Dashboard</h6>
            </div>
            <div>
              <h4 style={{ fontWeight: "700" }}>Dashboard</h4>
              <h4>Welcome Admin</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
