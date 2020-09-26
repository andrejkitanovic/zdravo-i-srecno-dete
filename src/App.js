import React from "react";
import "./App.scss";

import Layout from "./hoc/Layout/Layout";

import { BrowserRouter , Switch, Route } from "react-router-dom";

import Pocetna from './containers/views/Pocetna/Pocetna'
import Simptomi from './containers/views/Simptomi/Simptomi'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route path="/" exact component={Pocetna}/>
              <Route path="/simptomi-i-roditeljstvo" component={Simptomi} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
