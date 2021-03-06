import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useStoreActions } from "easy-peasy";
import { StockChart } from "../../components";
import { stockOptions } from "../../constants/stockOptions";
import LocalStorageService from "../../services/localStorage";
const localStorageService = LocalStorageService.getService();

const Home = () => {
  const homeAction = useStoreActions((actions) => actions.home);
  const [data, setData] = React.useState({ options: stockOptions });
  // Storing the data in local storage
  localStorageService.setData(JSON.stringify({ options: stockOptions }));

  useEffect(() => {
    // Not passing the interval querystring value as of now in the api
    // as it is an optional value
    // Although tested with interval=2, ist was working fine
    // Just pass 'interval=2' in the getHistoricalData method
    homeAction
      .getHistoricalData()
      .then(function (response) {
        homeAction.setHistoricalData(response.data);
        let volume = [];
        const ohlcData = response.data.map((csv) => {
          const newEle = csv.split(",").map((el) => +el);
          volume.push([
            newEle[0], // the date
            newEle[5], // the volume
          ]);

          newEle.pop();
          newEle.pop();
          return newEle;
        });
        ohlcData.sort();
        volume.sort();
        const updateStock = {
          options: {
            series: [
              {
                data: ohlcData,
              },
              {
                data: volume,
              },
            ],
          },
        };
        setData(updateStock);
        localStorageService.setData(JSON.stringify(updateStock));
      })
      .catch(function (error) {
        homeAction.setHistoricalData([]);
        // We can also log this
        console.error(error);
      });
  }, []);

  return (
    <>
      <Grid container>
        <StockChart options={data.options} />
      </Grid>
    </>
  );
};

export default withRouter(Home);
