import { Detail, Form, Home, Landing } from "./views";
import  NavBar from "./components/NavBar/NavBar";
import { useLocation, Switch, Route} from "react-router-dom";

function App() {

  const pathName = useLocation();

  return (
    <div>
      {pathName.pathname === "/home" && <NavBar />}
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Route path="/create" component={Form} />
      </Switch>
    </div>
  );
}

export default App;






















 // return (
  //   <div>
  //       
  //       <Route exact path="/" component={Landing} />
  //       <Route exact path="/home"> 
  //         <Home /> 
  //       </Route> 
  //       <Route exact  path="/detail" render={() =>  <Detail />} />
  //       <Route exact  path="/create" component={Form} />
  //   </div>
  // )
