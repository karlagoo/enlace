import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import Chatroom from './pages/Chatroom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <Switch>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/" component={Home} />
            {/* Define a route that will take in variable data */}
            <Route exact path="/profiles/" component={Profile} />
            <Route exact path="/aboutus/" component={AboutUs}/>
            <Route exact path="/chatroom/" component={Chatroom}/>
            {/* Import Navbar test - Jess */}
            
     

          </div>
        </div>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;