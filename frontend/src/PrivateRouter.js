/* eslint-disable no-unused-vars */
import React, { useContext} from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
import { CourseContext } from './context';

export default function PrivateRoute({ component: Component, ...rest }) {
    const context = useContext(CourseContext);
    const {user} = context;
    return (
      <Route
        {...rest}
        render={props =>
          user.auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/dangnhap",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }