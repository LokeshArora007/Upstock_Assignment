import React from "react";
import { Grid } from "@material-ui/core";
import { StockChart } from "../../components";
import { stockOptions } from "../../constants/stockOptions";

import io from "socket.io-client";

const LiveStockPage = (props) => {
  const [stockOptionData, setStockOptionData] = React.useState({
    options: stockOptions,
  });
  const socket = io("http://kaboom.rksv.net/watch");

  socket.on("connect", () => {
    console.log(socket.connected); // true
    // While subscribing, the state must be true
    socket.emit("sub", { state: true });
  });

  React.useEffect(() => {
    const ohlcData = [];
    const volumeData = [];

    socket.on("data", function (data, ack) {
      console.log("Response: " + data);
      let newData = data.split(",").map((el) => +el);
      volumeData.push([
        newData[0], // the date
        newData[5], // the volume
      ]);
      newData.pop();
      newData.pop();
      ohlcData.push(newData);
      console.log(ohlcData);
      //setLiveData(accumData);
      //console.log(kjf);
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
      //console.log(updateStock);
      ack(1);
    });
    socket.on("error", function (error) {
      console.error("Error: " + error);
    });
    return () => {
      console.log("Unsubscribing");
      socket.emit("unsub", { state: false });
    };
  }, []);

  socket.on("disconnect", () => {
    socket.emit("unsub", { state: false });
    console.log(socket.connected); // false
  });

  return (
    <>
      <Grid container>
        <StockChart options={stockOptionData.options} />
      </Grid>
    </>
  );
};

export default LiveStockPage;
