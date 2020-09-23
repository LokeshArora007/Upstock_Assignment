import React from "react";
import { Grid } from "@material-ui/core";
import { StockChart } from "../../components";
import { stockOptions } from "../../constants/stockOptions";
import LocalStorageService from "../../services/localStorage";
import io from "socket.io-client";
const localStorageService = LocalStorageService.getService();

const LiveStockPage = (props) => {
  const [stockOptionData, setStockOptionData] = React.useState({
    options: stockOptions,
  });

  React.useEffect(() => {
    const socket = io("http://kaboom.rksv.net/watch");
    const ohlcData = [];
    const volumeData = [];

    try {
      socket.on("connect", () => {
        // While subscribing, the state must be true
        socket.emit("sub", { state: true });
      });

      socket.on("data", function (data, ack) {
        let newData = data.split(",").map((el) => +el);
        volumeData.push([
          newData[0], // the date
          newData[5], // the volume
        ]);
        newData.pop();
        newData.pop();
        ohlcData.push(newData);
        const updateStock = {
          options: {
            series: [
              {
                data: ohlcData,
              },
              {
                data: volumeData,
              },
            ],
          },
        };
        setStockOptionData(updateStock);
        localStorageService.setData(JSON.stringify(updateStock));
        ack(1);
      });
      socket.on("error", function (error) {
        console.error("Error: " + error);
      });
      socket.on("disconnect", () => {
        socket.emit("unsub", { state: false });
      });
      return () => {
        socket.emit("unsub", { state: false });
        socket.emit("disconnect");
      };
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <Grid container>
        <StockChart options={stockOptionData.options} key="liveStock" />
      </Grid>
    </>
  );
};

export default LiveStockPage;
