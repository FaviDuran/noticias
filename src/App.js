import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as 
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/Home" component={Home} />
      <Route exact path="/">
        <Redirect to="/Home/Noticias" />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
