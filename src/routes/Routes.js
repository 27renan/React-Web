import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Main from '../pages/Main'
import Product from '../pages/Product'

export default function Routes() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
      <Redirect from="*" to="/" />
    </Switch>
    </BrowserRouter>
  );
}
