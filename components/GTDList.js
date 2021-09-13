import React from "react";
import { FlatList } from "react-native";
import { GTDListItem } from "./GTDListItem"

/**
 * @returns {Object} React component
 */
const GTDList = () => {
  const items = [{ title: 'Item One' }, { title: 'Item Two' }, { title: 'Item Three' }]
  return (
    <FlatList 
      data={items} 
      renderItem={({ item }) => <GTDListItem item={item} />} 
      keyExtractor={(item, index) => `${index}`} 
    />
  );
};

export { GTDList };
