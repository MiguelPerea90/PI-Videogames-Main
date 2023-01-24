import { Detail, Form, Home, Landing } from "./views";
import { Route } from "react-router-dom";

function App() {
  return (
    <div clasname="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home"> <Home /> </Route>
      <Route exact  path="/detail" render={() =>  <Detail />} />
      <Route exact  path="/create" render={() =>  <Form />} />
    </div>
  );
}

export default App;
