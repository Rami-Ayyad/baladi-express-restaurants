import styles from "./index.module.css";
import { imgBaseUrl } from "../../utils/imgBaseUrl";
import logo1 from "../../assets/dummyLogosImgs/logo1.jpg";
import logo2 from "../../assets/dummyLogosImgs/logo2.jpg";
import logo3 from "../../assets/dummyLogosImgs/logo3.jpg";
import catig1 from "../../assets/dummyCategoryImgs/catig1.jpg";
import catig2 from "../../assets/dummyCategoryImgs/catig2.jpg";
import catig3 from "../../assets/dummyCategoryImgs/catig3.jpg";
import catig4 from "../../assets/dummyCategoryImgs/catig4.jpg";
import catig5 from "../../assets/dummyCategoryImgs/catig5.jpg";
import catig6 from "../../assets/dummyCategoryImgs/catig6.jpg";

const dummyImgType = {
  logo: [logo1, logo2, logo3],
  category: [catig1, catig2, catig3, catig4, catig5, catig6],
};

export const CategoryCard = ({ title, imgSrc, index, cardType }) => {
  return (
    <div className={styles["category-card"]}>
      <img
        src={
          // imgBaseUrl(imgSrc) #Images from backend give 404 error
          dummyImgType[cardType][index % dummyImgType[cardType].length] // #replace not working imgs with dummy ones
        }
      />
      <h5>{title}</h5>
    </div>
  );
};
