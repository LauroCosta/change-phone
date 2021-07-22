import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChangeNumberPhone } from "../../pages/ChangeNumberPhone";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChangeNumberPhone} />
      </Switch>
    </BrowserRouter>
  )
}