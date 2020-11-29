import { createContext, useState } from 'react';

export const itemContext = createContext();

function ItemProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState({});

  return (
    <itemContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </itemContext.Provider>
  );
}

export default ItemProvider;
