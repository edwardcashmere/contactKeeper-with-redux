import React,{Fragment} from 'react';
import NavBar from './components/layouts/NavBar';
import { BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login.js';
import Alert from './components/layouts/Alert.js'
import setAuthToken from './utils/setAuthToken.js'
import { Provider} from 'react-redux';
import store from './store';

import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>  
          <NavBar/>
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>

            </Switch>
            
          </div>
        </Fragment>

      </Router>
    </Provider>
  );
}

export default App;
