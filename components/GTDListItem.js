// @ts-check
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} title
 * @property {boolean} done
 */

/**
 * @param {Object} props
 * @param {Item} props.item
 * @param {() => void} props.onPress
 *
 * @returns {Object} React component
 */
const GTDListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
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
