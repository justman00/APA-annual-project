import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ITEMS } from '../contants/data';
import { Flex, Heading, Box, Checkbox } from '@chakra-ui/react';
import { itemContext } from '../providers/itemsProvider';

function ProduseAlegere() {
  const { id } = useParams();
  const { selectedItems, setSelectedItems } = useContext(itemContext);

  const { items } = ITEMS.find((item) => item.name === id) || {};

  const createOnChangeHandler = (item) => (e) => {
    if (e.target.checked) {
      setSelectedItems((allItems) => ({ ...allItems, [item.name]: item }));
    } else {
      Reflect.deleteProperty(selectedItems, item.name);
      setSelectedItems({ ...selectedItems });
    }
  };

  return (
    <Flex direction="column" alignItems="center" p="24px">
      <Heading p="48px 0" as="h1" size="lg" textAlign="center">
        <Link style={{ color: 'blue' }} to="/produse">
          {'<-'}
        </Link>{' '}
        Check preferred products
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
        {items.map((item) => (
          <Box w="100%">
            <Checkbox
              colorScheme="green"
              isChecked={!!selectedItems[item.name]}
              onChange={createOnChangeHandler(item)}
            >
              {item.displayName}
            </Checkbox>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default ProduseAlegere;
