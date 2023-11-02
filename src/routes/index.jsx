import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RestaurantsPage from "../pages/restaurants-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/restaurants" element={<RestaurantsPage />} />
    </Route>
  )
);

export default router;
