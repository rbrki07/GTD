import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

/**
 * @param {Object} props
 * @param {Object} props.item
 * @param {string} props.item.title
 *
 * @returns {Object} React component
 */
const GTDListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 48,
    justifyContent: "center",
  },
  text: {
    color: "#f1faee"
  }
});

GTDListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

GTDListItem.defaultProps = {};

export { GTDListItem };
