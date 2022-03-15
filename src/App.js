import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import _navBar from './component/layout/_navBar';
import _User from './component/user/_User';
import _alert from './component/layout/_alert';

import _About  from './component/layout/_About';
import _Home  from './component/layout/_Home';
import NotFound from './component/layout/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App= () => {  
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <_navBar />
                <div className="container">
                  <_alert />
                    <Switch>
                      <Route 
                        exact 
                        path='/'
                        component={_Home}
                      />
                      <Route
                      exact 
                      path='/about'
                      component={_About}/>
                      <Route exact path='/user/:login'
                      component={_User}
                      />
                      <Route component={NotFound} />
                    </Switch>
                </div>
              </div >
          </Router>
        </AlertState>
      </GithubState>
    );
  
}

export default App;
/***
 * 
 * return (
      //this is JSX-Javascript Syntax Extension
      <div className="App">
          <h1>My app</h1>
        {loading ?  <h4>Loading...</h4> : <h1>Hello {name.toUpperCase()} </h1>}
      </div >
    );
 */