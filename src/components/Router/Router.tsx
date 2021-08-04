import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChangeNumberPhone } from "../../pages/ChangeNumberPhone";
import { EditAccount } from "../../pages/EditAccount";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChangeNumberPhone} />
        <Route exact path="/editAccount" component={EditAccount} />
      </Switch>
    </BrowserRouter>
  )
}