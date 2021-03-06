import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserWithStoredToken } from "./store/user/actions";
import { selectAppLoading } from "./store/appState/selectors";
import Homepage from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import DetailsPage from "./pages/DetailsPage";
import NewBook from "./pages/NewBook";
import Navigation from "./components/Navigation/index";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import MessageBox from "./components/MessageBox";
import LoadingSpinner from "./components/LoadingSpinner";
import Members from "./pages/Members";

import "./App.css";

function App() {
  const isLoading = useSelector(selectAppLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <body>
      <main>
        <Navigation />
        <MessageBox />
        {isLoading ? <LoadingSpinner /> : null}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/books/:id" component={DetailsPage} />
          <Route path="/newbook" component={NewBook} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/members" component={Members} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </main>
    </body>
  );
}

export default App;
