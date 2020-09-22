## Project Name

Upstock OHLC Data

## Description

A Web application showing the OHLC hostorical data and the OHLC live data

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

## Libraries Used

I have created this application using the React library and for state managment used `Easy Peasy`, a redux wrapper, used the `Material UI` for the theming. For the rest api call, used `axios` library. For the OHLC chart i have used React wrapper of HighCharts `highcharts-react-official`.
Used the `socket.io-client`.

## Folder Structure

```
app
└── src
    └── components
        ├── stockChart
    └── constants
        ├── stockOptions
    └── layout
        ├── mainLayout
    └── pages
        ├── home
        ├── liveStock
    └── routes
        ├── layoutRoute
        ├── routes
    └── services
        ├── home
        ├── localStorage
    └── state
        ├── model
            ├── home
        ├── store
    └── utils
        ├── api
```

## Components

Created a common component for displaying the chart, StockChart, used by the Home and Livestock views

## Pages

Created the Home and Live Stock views inside the pages folder
