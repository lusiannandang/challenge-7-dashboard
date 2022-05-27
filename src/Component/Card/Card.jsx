import style from "./Card.module.css";
import carImage from "../images/car-img.svg";
import key from "../images/key.svg";
import clock from "../images/clock.svg";
import trash from "../images/fi_trash-2.svg";
import edit from "../images/fi_edit.svg";

const App = () => {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cardDetailContainer}>
          <div className={style.imgContainer}>
            <img src={carImage} alt="car" />
          </div>
          <div className={style.detailContainer}>
            <h6>Nama/Tipe Mobil</h6>
            <h5>Rp 430.000 / hari</h5>
            <div className={style.detailPoint}>
              <img src={key} alt="key" />
              <p>Start rent - Finish rent</p>
            </div>
            <div className={style.detailPoint}>
              <img src={clock} alt="clock" />
              <p>Updated at 4 Apr 2022, 09.00</p>
            </div>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <button className={style.deleteButton}>
            <img src={trash} alt="trash" />
            Delete
          </button>
          <button className={style.editButton}>
            <img src={edit} alt="edit" />
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
