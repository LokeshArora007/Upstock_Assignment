import { action, thunk } from "easy-peasy";
import * as homeService from "../../services/home";

const homeModel = {
  historicalData: [],
  setHistoricalData: action((state, payload) => {
    state.historicalData = payload;
  }),

  getHistoricalData: thunk(async (actions, payload) => {
    return await homeService.getHistoricalData(payload);
  }),
};

export default homeModel;
