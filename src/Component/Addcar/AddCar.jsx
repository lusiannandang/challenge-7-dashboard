import { Container } from "react-bootstrap";
import styles from "./addCar.module.css";
import { useNavigate, Link } from "react-router-dom";
import brand from "../images/logo1.png";
import brandBig from "../images/logo2.png";
import home from "../images/fi_home.svg";
import truck from "../images/fi_truck.svg";
import menu from "../images/fi_menu.svg";
import avatar from "../images/avatar.svg";
import rightArrow from "../images/fi_chevron_right.svg";
import downArrow from "../images/fi_chevron-down.svg";

const App = () => {
  const navigate = useNavigate();
  const saveButton = () => {
    navigate("/listcar");
    alert("Data Berhasil Disimpan");
  };

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
              <h1 className={styles.menuH1}>CARS</h1>
              <div className={styles.menuP}>
                <p>List Car</p>
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
              <h6>Car</h6>
              <img src={rightArrow} alt="right" style={{ margin: "-5px 5px" }} />
              <h6 style={{ fontWeight: "300" }}>List Car</h6>
              <img src={rightArrow} alt="right" style={{ margin: "-5px 5px" }} />
              <h6 style={{ fontWeight: "300" }}>Add Car</h6>
            </div>
            <div className={styles.title}>
              <h4 style={{ fontWeight: "700" }}>List Car</h4>
              <Link to="/addcar" className={styles.button}>
                Add New Car
              </Link>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formPoint1}>
                <p>Nama</p>
                <input type="text" placeholder="Placeholder" />
              </div>
              <div className={styles.formPoint}>
                <p>Harga</p>
                <input type="text" placeholder="Placeholder" />
              </div>
              <div className={styles.formPoint}>
                <p>Foto</p>
                <div className={styles.upload}>
                  <input type="file" placeholder="Placeholder" />
                  <p>File size max. 2MB</p>
                </div>
              </div>
              <div className={styles.formPoint}>
                <p>Start Rent</p>
                <p>-</p>
              </div>
              <div className={styles.formPoint}>
                <p>Finish Rent</p>
                <p>-</p>
              </div>
              <div className={styles.formPoint}>
                <p>Created at</p>
                <p>-</p>
              </div>
              <div className={styles.lastFormPoint}>
                <p>Updated at</p>
                <p>-</p>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.cancelButton} onClick={() => navigate("/listcar")}>
                Cancel
              </button>

              <button className={styles.saveButton} onClick={() => saveButton()}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
