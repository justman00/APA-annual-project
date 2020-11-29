import { useContext, useState } from 'react';
import { itemContext } from '../providers/itemsProvider';
import {
  Flex,
  Heading,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Button,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

function getInitialState(selectedItems) {
  return selectedItems.reduce((acc, item) => ({ ...acc, [item.name]: 1 }), {});
}

function Configurator() {
  const { selectedItems } = useContext(itemContext);
  const selectedItemsArr = Object.values(selectedItems);
  const history = useHistory();
  const [frequency, setFrequency] = useState(() =>
    getInitialState(selectedItemsArr)
  );

  const createOnChangeHandler = (item) => (value) => {
    setFrequency((prevState) => ({ ...prevState, [item.name]: value }));
  };

  const onSubmitClick = (e) => {
    e.preventDefault();

    history.push('/')
  }

  return (
    <Flex direction="column" alignItems="center" p="24px">
      <Heading p="48px 0" as="h1" size="lg" textAlign="center">
        How often do you buy these products (days)
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
        {selectedItemsArr.map((item) => (
          <Box
            mb="24px"
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>{item.displayName}</Text>
            <NumberInput
              onChange={createOnChangeHandler(item)}
              value={frequency[item.name]}
              min={1}
              max={20}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        ))}
      </Flex>

      <Button onClick={onSubmitClick} backgroundColor="gray.600" color="gray.100" variant="outline">
        Submit
      </Button>
    </Flex>
  );
}

export default Configurator;
