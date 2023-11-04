export const imgBaseUrl = (imgSrc) => {
  const baseUrl = "https://devapi.baladiexpress.com/v4";

  return encodeURI(baseUrl + imgSrc);
};
