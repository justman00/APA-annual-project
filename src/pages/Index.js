import React from 'react';
import { RESULTS } from '../contants/data';
import { Box, Flex, Heading } from '@chakra-ui/react';

function Index() {
  return (
    <Flex direction="column" alignItems="center" p="24px">
      <Heading p="48px 0" as="h1" size="lg" textAlign="center">
        This is your cart
      </Heading>
      {RESULTS.map((item) => (
        <Box w="100%">{item.displayName}</Box>
      ))}
      <Heading pt="18px" size="md">
        The price is: 65lei.
      </Heading>
    </Flex>
  );
}

export default Index;
