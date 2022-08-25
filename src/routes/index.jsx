import { Route, Switch } from "react-router";
import Home from "../pages/Cooperator";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useContext } from "react";
import { UserContext } from "../providers/User";

import NavBar from "../components/NavBar";

function Routes() {
  const { logout } = useContext(UserContext);
  return (
    <Switch>
      <Route exact path="/cooperators">
        <NavBar
          text={"logout"}
          handleNavigation={logout}
          path={"/login"}
          action={"sair"}
        ></NavBar>
        <Home></Home>
      </Route>
      <Route path="/login">
        <NavBar></NavBar>
        <Login></Login>
      </Route>
      <Route path="/register">
        <NavBar text={"voltar"} path={"/login"}></NavBar>
        <Register></Register>
      </Route>
    </Switch>
  );
}

export default Routes;
