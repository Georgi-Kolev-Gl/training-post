import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";
import Header from "./Header";
import Home from "./Home";
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className={styles.pageContainer}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/upload">
            <h3>Upload Page</h3>
          </Route>
          <Route path="/users/:userId">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
