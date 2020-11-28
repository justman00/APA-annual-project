import React from 'react';
import {
  Flex,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/use-auth';

function CreateAccount() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = (e) => {
    e.preventDefault();
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <Flex direction="column" alignItems="center">
      <Heading pt="48px" pb="48px" as="h1" size="xl">
        Welcome
      </Heading>
      <Box>
        <form onSubmit={login}>
          <FormControl p="12px 0" id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl p="12px 0" id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button m="12px 0" type="submit">
            Confirm
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default CreateAccount;