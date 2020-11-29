import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import ProvideAuth from './providers/authProvider';
import PrivateRoute from './wrappers/PrivateRoute';
import CreateAccount from './pages/CreateAccount';
import Produse from './pages/Produse';
import ProduseAlegere from './pages/ProduseAlegere';
import ItemProvider from './providers/itemsProvider';
import Configurator from './pages/Configurator';
import Index from './pages/Index';

export default function App() {
  return (
    <Box maxW="480px" m="0 auto" bgColor="gray.100">
      <ProvideAuth>
        <ItemProvider>
          <Router>
            <Switch>
              <Route path="/create-account">
                <CreateAccount />
              </Route>
              <PrivateRoute exact path="/">
                <Index />
              </PrivateRoute>
              <PrivateRoute exact path="/produse">
                <Produse />
              </PrivateRoute>
              <PrivateRoute exact path="/produse/:id">
                <ProduseAlegere />
              </PrivateRoute>
              <PrivateRoute exact path="/configurator">
                <Configurator />
              </PrivateRoute>
            </Switch>
          </Router>
        </ItemProvider>
      </ProvideAuth>
    </Box>
  );
}
