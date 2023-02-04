import { Detail, Form, Home, Landing } from "./views";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom";


function App() {
  const pathName = useLocation();
  return (
    <div>
      {pathName.pathname === "/home" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route exact path="/home"> <Home /> </Route>
      <Route exact  path="/detail" render={() =>  <Detail />} />
      <Route exact  path="/create" component={Form} />
    </div>
  );
}

export default App;
