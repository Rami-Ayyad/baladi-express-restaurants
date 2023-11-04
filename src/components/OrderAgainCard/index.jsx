import styles from "./index.module.css";
import { imgBaseUrl } from "../../utils/imgBaseUrl";
import order1 from "../../assets/dummyOrderAgainImgs/order1.jpg";
import order2 from "../../assets/dummyOrderAgainImgs/order2.jpg";
import againIcon from "../../assets/again.png";

const dummyData = [
  { src: order2, title: "KFC", text: "Chicken Crispy Strips" },
  { src: order1, title: "McDonald’s", text: "I'm Lovin'It" },
];

export const OrderAgainCard = ({ index }) => {
  return (
    <div className={styles["order-again-card"]}>
      <div>
        <img
          src={
            // imgBaseUrl(imgSrc) #Images from backend give 404 error
            dummyData[index % dummyData.length].src // #replace not working imgs with dummy ones
          }
        />
        <div>
          <h5>{dummyData[index % dummyData.length].title}</h5>
          <p>{dummyData[index % dummyData.length].text}</p>
        </div>
      </div>
      <img src={againIcon} alt="Again" />
    </div>
  );
};
