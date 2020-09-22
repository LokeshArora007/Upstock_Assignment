import API from "../utils/api";

export const getHistoricalData = (queryStr) => {
  return API.get(`api/historical?${queryStr}`, {});
};
