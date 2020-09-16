import React from "react";
import classes from "./App.module.scss";

import Layout from "./hoc/Layout/Layout";

import { BrowserRouter , Switch, Route } from "react-router-dom";

import Pocetna from './containers/views/Pocetna'

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route path="/" exact component={Pocetna}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
