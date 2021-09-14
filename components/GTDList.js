// @ts-check
import React, { useState } from "react";
import { SectionList, StyleSheet, Text } from "react-native";
import _ from "lodash";
import { GTDListItem } from "./GTDListItem";

/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} title
 * @property {boolean} done
 */

/**
 * @param {Object} params
 * @param {Item[]} params.items
 * @param {Item} params.item
 *
 * @return {Item[]}
 */
const updateItems = ({ items, item }) => {
  return items.map((i) => (i.id === item.id ? item : i));
};

/**
 * @returns {Object} React component
 */
const GTDList = () => {
  const [items, setItems] = useState([
    { id: "1", title: "Item One", done: false },
    { id: "2", title: "Item Two", done: false },
    { id: "3", title: "Item Three", done: false },
  ]);
  return (
    <SectionList
      sections={Object.entries(
        _.groupBy(_.orderBy(items, ["done"]), "done")
      ).map(([status, items]) => ({
        title: status,
        data: items,
      }))}
      renderItem={({ item }) => (
        <GTDListItem
          item={item}
          onPress={() =>
            setItems(
              updateItems({ items, item: { ...item, done: !item.done } })
            )
          }
        />
      )}
      renderSectionHeader={({ section: { title: done } }) => (
        <Text style={styles.header}>{done === "false" ? "To Do" : "Done"}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 8,
    marginBottom: 4,
    alignSelf: "center",
    color: "#f1faee",
    fontWeight: "bold",
  },
});

export { GTDList };
