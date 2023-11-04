import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryCard, OrderAgainCard } from "../../components/index";
import { carouselSettings } from "./carouselSetting";

export const Carousel = ({ cardType, dataArr }) => {
  const renderCardByType = (cardData, i) => {
    if (cardType === "logo") {
      return (
        <CategoryCard
          key={cardData.id}
          title={cardData.stores_locales[0].business_name}
          imgSrc={cardData.business_logo}
          index={i}
          cardType={cardType}
        />
      );
    }

    if (cardType === "category") {
      return (
        <CategoryCard
          key={cardData.id}
          title={cardData.category_locales[0].name}
          imgSrc={cardData.image_gif}
          index={i}
          cardType={cardType}
        />
      );
    }

    if (cardType === "orderAgain") {
      return <OrderAgainCard key={i} index={i} />;
    }
  };

  return (
    <div className={styles["carousel"]}>
      <Slider {...carouselSettings(cardType)}>
        {dataArr.map((item, i) => renderCardByType(item, i))}
      </Slider>
    </div>
  );
};
