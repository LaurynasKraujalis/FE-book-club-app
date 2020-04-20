import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUserWithStoredToken } from "./store/user/actions";
import Homepage from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import BookDetails from "./pages/BookDetails";
import NewBook from "./pages/NewBook";
import Navigation from "./components/Navigation/index";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <main>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/book/:id" component={BookDetails} />
        <Route path="/newbook" component={NewBook} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </main>
  );
}

export default App;
