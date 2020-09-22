import API from "../utils/api";

export const getHistoricalData = (queryStr) => {
  queryStr = queryStr ? `?${queryStr}` : "";
  return API.get(`api/historical${queryStr}`, {});
};
