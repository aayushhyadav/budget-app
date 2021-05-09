import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <p>This is the dashboard</p>
    </div>
  );
};
const AddExpensePage = () => {
  return (
    <div>
      <p>This is the add expense page</p>
    </div>
  );
};
const EditExpensePage = () => {
  return (
    <div>
      <p>This is the edit expense page</p>
    </div>
  );
};
const HelpPage = () => {
  return (
    <div>
      <p>This is the help page</p>
    </div>
  );
};
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
