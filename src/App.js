import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import ProvideAuth from './providers/authProvider';
import PrivateRoute from './wrappers/PrivateRoute';
import CreateAccount from './pages/CreateAccount';

export default function App() {
  return (
    <Box maxW="480px" m="0 auto" bgColor="gray.100">
      <ProvideAuth>
        <Router>
          <Switch>
            <Route path="/create-account">
              <CreateAccount />
            </Route>
            <PrivateRoute path="/">
              <div>nice</div>
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideAuth>
    </Box>
  );
}
