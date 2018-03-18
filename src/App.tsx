import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css';

const Home = () => <h1>Home</h1>;
const Admin = () => <h1>Admin</h1>;

const App = () => (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <NavBar />
            <Route exact={true} path="/" component={Home} />
            <Route path="/admin" component={Admin} />
          </div>
        </Router>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
);

export default App;
