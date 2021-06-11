import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import 'bootstrap/dist/cc/bootstrap.min.css'

function App() {

  return (
      <div className="container-fluid">
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
