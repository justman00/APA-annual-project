import React from 'react';
import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import { ITEMS } from '../contants/data';
import { Link } from 'react-router-dom';

function Produse() {
  return (
    <Flex direction="column" alignItems="center" p="24px">
      <Heading p="48px 0" as="h1" size="lg" textAlign="center">
        Please select which products do you need the most
      </Heading>
      <Flex
        w="100%"
        p="48px 24px"
        borderRadius="lg"
        wrap="wrap"
        backgroundColor="#fff"
        justifyContent="space-between"
        mb="48px"
      >
        {ITEMS.map((item) => (
          <Box
            key={item.name}
            mb="48px"
            cursor="pointer"
            w="45%"
            minH="150px"
            backgroundImage={`url(${item.img})`}
            borderRadius="lg"
            overflow="hidden"
            borderColor="yellow.500"
            borderWidth="1px"
          >
            <Link to={`/produse/${item.name}`}>
              <Heading pt="24px" textAlign="center" size="md">
                {item.displayName}
              </Heading>
            </Link>
          </Box>
        ))}
      </Flex>
      <Button
        position="absolute"
        bottom="24px"
        outline="variant"
        backgroundColor="gray.600"
        color="#fff"
        boxShadow="md"
        _hover={{
          color: 'gray.600',
          backgroundColor: 'gray.200',
        }}
      >
        <Link to={`/configurator`}>Next -></Link>
      </Button>
    </Flex>
  );
}

export default Produse;
