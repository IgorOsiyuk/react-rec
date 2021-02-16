import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import EmployeesPage from "./pages/employees/EmployeesPage";
import './main.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="/employees">
          <EmployeesPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
