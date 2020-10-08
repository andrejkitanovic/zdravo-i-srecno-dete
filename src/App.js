import React from "react";
import "./App.scss";

import Layout from "./hoc/Layout/Layout";

import { BrowserRouter , Switch, Route } from "react-router-dom";

import Pocetna from './containers/views/Pocetna/Pocetna'
import Simptomi from './containers/views/Simptomi/Simptomi'
import Kategorija from './containers/views/Kategorija/Kategorija'
import Post from './containers/views/Post/Post'
import Proizvod from './containers/views/Proizvod/Proizvod'
import Clanci from './containers/views/Clanci/Clanci'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route path="/" exact component={Pocetna}/>

              <Route path="/simptomi-i-roditeljstvo/proizvod/:id" component={Proizvod} />
              <Route path="/simptomi-i-roditeljstvo/:kategorija/:id" component={Post} />
              <Route path="/simptomi-i-roditeljstvo/:kategorija" component={Kategorija} />
              <Route path="/simptomi-i-roditeljstvo" component={Simptomi} />
            
              <Route path="/clanci" component={Clanci} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
