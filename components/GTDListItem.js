// @ts-check
// eslint-disable-next-line no-unused-vars
import typedefs from "./../typedefs";
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "./../store/items";
import { DateTime } from "luxon";

/**
 * @param {Object} props
 * @param {typedefs.Item} props.item
 *
 * @returns {Object} React component
 */
const GTDListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(
          updateItem({
            ...item,
            done: !item.done,
            doneAt: !item.done ? DateTime.now().toISO() : undefined,
          })
        );
      }}
      onLongPress={() => dispatch(deleteItem(item))}
      style={styles.item}
    >
      <Text
        style={[
          styles.text,
          item.done ? { textDecorationLine: "line-through" } : {},
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 48,
    justifyContent: "center",
  },
  text: {
    color: "#f1faee",
  },
});

GTDListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

GTDListItem.defaultProps = {};

export { GTDListItem };
