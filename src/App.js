import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./components/header-component/header-component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.util";
import { createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

const HatsPage = () => {
  return (
    <div>
      <h1>hats wuhu</h1>
    </div>
  );
};
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapStateToProps)(App);
