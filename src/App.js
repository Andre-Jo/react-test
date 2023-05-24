import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  return <Router>
    <Switch>
        <Route path="/movie/:id">
            <Detail />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />                    
    </Switch>
  </Router>;
};

  export default App;