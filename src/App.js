import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import LayoutRoute from "./routes/layoutRoute";
import { routes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes &&
          routes.map((route, index) => (
            <LayoutRoute
              exact
              key={index}
              requireAuth={route.requireAuth} // Does it require authentication to view page
              path={route.path} // URL path
              layout={route.layoutType} // If a different layout then mainlayout
              page={route.page} // Component to be rendered
            />
          ))}
        {/* If the route is not defined, the default page is login and if the user is authenticated it will take to home page */}
        <Redirect to={{ pathname: "/" }} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
