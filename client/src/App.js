import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import {Route} from "react-router-dom"


function App() {
  return (
    <div clasname="App">
      <Route exact path="/" render={() => <Landing />} />
      <Route exact  path="/home" render={() =>  <Home />} />
      <Route exact  path="/detail" render={() =>  <Detail />} />
      <Route exact  path="/form" render={() =>  <Form />} />
    </div>
  );
}

export default App;
