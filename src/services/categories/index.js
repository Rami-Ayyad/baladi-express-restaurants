import axiosInstance from "../axios-instance";

export const categories = {
  getCategories: (params) =>
    axiosInstance.baseAxios
      .get(`/stores/detail/1?latitude=25.3185782&longitude=51.5003526`, {
        params,
      })
      .then((res) => res.data),
};
