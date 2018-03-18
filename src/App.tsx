import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Button } from 'react-md';
import { NavigationDrawer } from 'react-md';

import './App.css';

const Home = () => <h1>Home</h1>;
const Admin = () => <h1>Admin</h1>;

const App = () => (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
      >
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
            <Button flat={true} primary={true} iconChildren="chat_bubble_outline">Chat</Button>
            <Button flat={true}>Hello, World!</Button>
            <Button raised={true} primary={true} swapTheming={true}>Hello</Button>
            <Button raised={true} secondary={true} swapTheming={true}>World</Button>
          </p>
        </div>
      </NavigationDrawer>
);

export default App;
