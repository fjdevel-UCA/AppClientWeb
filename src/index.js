import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import ListadoPaises from "./Views/ListadoPaises";
import FormPaises from "./Views/FormPaises";
import FormPaisesEdit from "./Views/FormPaisesEdit";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={ListadoPaises} />
        <Route exact path="/agregar" component={FormPaises} />
        <Route exact path="/edit" component={FormPaisesEdit} />
        </Switch>
      </Layout>
    </BrowserRouter>,
    document.getElementById("root")
  );