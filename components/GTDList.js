// @ts-check
import React from "react";
import { SectionList, StyleSheet, Text } from "react-native";
import _ from "lodash";
import { GTDListItem } from "./GTDListItem";
import { useSelector } from "react-redux";
import { itemsOrderedByDoneAtDescAndCreatedAtDesc } from "./../store/items";

/**
 * @returns {Object} React component
 */
const GTDList = () => {
  const items = useSelector(itemsOrderedByDoneAtDescAndCreatedAtDesc);
  return (
    <SectionList
      sections={Object.entries(_.groupBy(items, "done")).map(
        ([status, items]) => ({
          title: status,
          data: items,
        })
      )}
      renderItem={({ item }) => <GTDListItem item={item} />}
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
