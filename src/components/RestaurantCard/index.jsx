import styles from "./index.module.css";
import { imgBaseUrl } from "../../utils/imgBaseUrl";
import rest1 from "../../assets/dummyRestaurantsImgs/rest1.jpg";
import rest2 from "../../assets/dummyRestaurantsImgs/rest2.jpg";
import rest3 from "../../assets/dummyRestaurantsImgs/rest3.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { HiBolt } from "react-icons/hi2";
import { LuBadgePercent } from "react-icons/lu";

const dummyImgs = [rest1, rest2, rest3];

export const RestaurantCard = ({ cardData, index }) => {
  if (index == 0) console.log(cardData);
  return (
    <div className={styles["restaurant-card"]}>
      <Col key={index}>
        <Card>
          <Card.Img variant="top" src={dummyImgs[index % dummyImgs.length]} />
          <Card.Body>
            <Card.Title>
              {cardData.stores_locales[0].business_name}
              <p>
                {Number.parseFloat(cardData.avgRating).toFixed(1)}
                <AiFillStar />
              </p>
            </Card.Title>
            <Card.Text>
              <p>Coffee , Dessert, Juice</p>
              <div>
                <BiTimer color="#ff5800" size={25} />
                {` ${cardData.order_accept_time} - ${cardData.order_time_for_picker}
                min • 5km`}
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>
              <HiBolt size={25} />
              {` Buy 1 Get 1`}
            </div>
            <span>|</span>
            <div>
              <LuBadgePercent size={25} />
              {` 30% Off Discount`}
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};
