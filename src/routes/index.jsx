import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RestaurantsPage from "../pages/restaurants-page";
import Layout from "../layouts/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/restaurants" element={<Layout />}>
      <Route path="/restaurants" element={<RestaurantsPage />} />
    </Route>
  )
);

export default router;
