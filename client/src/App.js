import React,{Fragment} from 'react';
import NavBar from './components/layouts/NavBar';
import { BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Provider} from 'react-redux';
import store from './store';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>  
          <NavBar/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
            </Switch>
            
          </div>
        </Fragment>

      </Router>
    </Provider>
  );
}

export default App;
