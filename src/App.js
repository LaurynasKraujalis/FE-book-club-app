import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import BookDetails from "./pages/BookDetails";
import NewBook from "./pages/NewBook";
import Navigation from "./components/Navigation/index";

function App() {
  return (
    <main>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/book/:id" component={BookDetails} />
        <Route path="/newbook" component={NewBook} />
        <Route path="/profile" component={MyProfile} />
      </Switch>
    </main>
  );
}

export default App;
