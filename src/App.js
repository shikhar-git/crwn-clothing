import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./components/header-component/header-component.jsx";

const HatsPage = () => {
  return (
    <div>
      <h1>hats wuhu</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
