import styles from "./index.module.css";
import apis from "../../services";
import { Carousel, BreadCrumbs, RestaurantCard } from "../../components";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Row from "react-bootstrap/Row";

const getRestaurantsQueryFn = () => apis.restaurants.getRestaurants();
const getCategoriesQueryFn = () => apis.categories.getCategories();

const RestaurantsPage = () => {
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesQueryFn,
  });

  const {
    data: restaurantsData,
    isLoading: restaurantsLoading,
    isError: restaurantsError,
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurantsQueryFn,
  });

  return (
    <div className={`${styles["restaurants-page"]}`}>
      <BreadCrumbs />

      <section>
        <h1>Restaurants</h1>
        {!restaurantsLoading ? (
          <Carousel cardType="logo" dataArr={restaurantsData?.stores} />
        ) : (
          <Skeleton count={1} height={150} highlightColor="#ff580036" />
        )}
      </section>

      <section>
        <h2>Categories</h2>
        {!categoriesLoading ? (
          <>
            <Carousel
              cardType="category"
              dataArr={categoriesData?.categories}
            />
            <Carousel
              cardType="category"
              dataArr={categoriesData?.categories}
            />
          </>
        ) : (
          <Skeleton count={2} height={150} highlightColor="#ff580036" />
        )}
      </section>

      <section>
        <h2>Order Again?</h2>
        {/*This one Carousel has dummy data */}
        <Carousel cardType="orderAgain" dataArr={[...new Array(10).keys()]} />
      </section>

      <section>
        <h2>All Restaurants</h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {!restaurantsLoading ? (
            restaurantsData?.stores.map((restaurant, i) => (
              <RestaurantCard
                key={restaurant.id}
                cardData={restaurant}
                index={i}
              />
            ))
          ) : (
            <Skeleton count={3} height={200} highlightColor="#ff580036" />
          )}
        </Row>
      </section>
    </div>
  );
};

export default RestaurantsPage;
