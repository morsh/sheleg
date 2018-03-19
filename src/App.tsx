import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import NavLink from './components/NavLink';

import './App.css';

import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'Page 1',
  to: '/page-1',
  icon: 'bookmark',
}, {
  label: 'Page 2',
  to: '/page-2',
  icon: 'donut_large',
}, {
  label: 'Page 3',
  to: '/page-3',
  icon: 'flight_land',
}];

class App extends React.Component {

  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="react-md with CRA"
            toolbarTitle="Welcome to react-md"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              <Route exact={true} path="/" location={location} component={Home} />
              <Route path="/page-1" location={location} component={Page1} />
              <Route path="/page-2" location={location} component={Page2} />
              <Route path="/page-3" location={location} component={Page3} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
  
  // render () {
  //   return (
  //     <NavigationDrawer
  //       drawerTitle="react-md with CRA"
  //       toolbarTitle="Welcome to react-md"
  //       navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
  //     >
  //       <div className="App">
  //         <header className="App-header">
  //           <NavBar />
  //           <Route exact={true} path="/" component={Home} />
  //           <Route path="/admin" component={Admin} />
  //         </header>
  //         <p className="App-intro">
  //           To get started, edit <code>src/App.js</code> and save to reload.
  //           <Button flat={true} primary={true} iconChildren="chat_bubble_outline">Chat</Button>
  //           <Button flat={true}>Hello, World!</Button>
  //           <Button raised={true} primary={true} swapTheming={true}>Hello</Button>
  //           <Button raised={true} secondary={true} swapTheming={true}>World</Button>
  //         </p>
  //       </div>
  //     </NavigationDrawer>
  //   );
  // }
}

export default App;
