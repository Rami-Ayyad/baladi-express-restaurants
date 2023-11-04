import styles from "./index.module.css";
import { imgBaseUrl } from "../../utils/imgBaseUrl";
import rest1 from "../../assets/dummyRestaurantsImgs/rest1.jpg";
import rest2 from "../../assets/dummyRestaurantsImgs/rest2.jpg";
import rest3 from "../../assets/dummyRestaurantsImgs/rest3.jpg";

const dummyImgs = [rest1, rest2, rest3];

export const RestaurantCard = ({ cardData, index }) => {
  if (index == 0) console.log(cardData);
  return (
    <div className={styles["restaurant-card"]}>
      <img
        src={
          // imgBaseUrl(cardData.banner_image) #Images from backend give 404 error
          dummyImgs[index % dummyImgs.length] // #replace not working imgs with dummy ones
        }
      />
      <h5>{cardData.slug}</h5>
    </div>
  );
};
