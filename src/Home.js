import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feed from "./components/Feed";
import Register from "./components/Register";
import Login from "./components/Login";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import { AuthProvider} from './context/auth'
import AuthRoute from './util/AuthRoute'

function Index() {
  return (
    <AuthProvider>
        <Router>
          <Navbar/>
          <Switch>
            <AuthRoute component={Register} exact path='/signup'/>
             <AuthRoute component={Login} exact path='/login'/>
            <Route exact path='/'>
                <Hero/>
            </Route>
            <Route component={Feed} exact path='/feed'/>
           
          </Switch>
        </Router>
    </AuthProvider>
    
  );
}

export default Index;
