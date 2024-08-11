// src/context/TrashContext.js
import React, { createContext, useState, useContext } from 'react';

const TrashContext = createContext();

export const useTrash = () => {
  return useContext(TrashContext);
};

export const TrashProvider = ({ children }) => {
  const [deletedItems, setDeletedItems] = useState([]);

  const addToTrash = (item) => {
    setDeletedItems([...deletedItems, item]);
  };

  const restoreFromTrash = (item) => {
    setDeletedItems(deletedItems.filter(i => i !== item));
  };

  return (
    <TrashContext.Provider value={{ deletedItems, addToTrash, restoreFromTrash }}>
      {children}
    </TrashContext.Provider>
  );
};
