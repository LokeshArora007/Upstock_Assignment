export const stockOptions = {
  yAxis: [
    {
      resize: {
        enabled: true,
      },
      labels: {
        align: "right",
        x: -3,
      },
      title: {
        text: "OHLC",
      },
    },
    {
      labels: {
        align: "right",
        x: -3,
      },
      title: {
        text: "Volume",
      },
      top: "65%",
      height: "35%",
      offset: 0,
      lineWidth: 2,
    },
  ],
  series: [
    {
      data: [[]],
      type: "ohlc",
      name: "Stock Price",
      id: "ohlc",
      groupingUnits: [
        [
          "week", // unit name
          [1], // allowed multiples
        ],
        ["month", [1, 2, 3, 4, 6]],
      ],
    },
    {
      data: [[]],
      type: "column",
      name: "Volume",
      yAxis: 1,
      groupingUnits: [
        [
          "week", // unit name
          [1], // allowed multiples
        ],
        ["month", [1, 2, 3, 4, 6]],
      ],
    },
  ],
  credits: {
    enabled: false,
  },
};
