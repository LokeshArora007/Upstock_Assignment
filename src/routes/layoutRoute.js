/**
 * @desc Attaches a layout to a given route and checks for token in local storage
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../services/localStorage";

const LayoutRoute = ({
  page: Component,
  layout: Layout,
  requireAuth,
  activeIcon,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Layout) {
          return (
            <Layout activeMenu={activeIcon}>
              <Component {...props} />
            </Layout>
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default LayoutRoute;
