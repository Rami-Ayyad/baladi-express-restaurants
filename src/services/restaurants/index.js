import axiosInstance from "../axios-instance";

export const restaurants = {
  getRestaurants: (params) =>
    axiosInstance.baseAxios
      .get(
        `/stores/all-new/food?limit=18&page=1&sort_by=fastest_delivery&latitude=25.3185782&longitude=51.5003526`,
        { params }
      )
      .then((res) => res.data),
};
