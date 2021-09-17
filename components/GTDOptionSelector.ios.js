// @ts-check
import React from "react";
import PropTypes from "prop-types";
import { ActionSheetIOS, StyleSheet, TouchableOpacity } from "react-native";

/**
 * @typedef {Object} Option
 * @property {string} title
 * @property {string} value
 */

/**
 * @param {Object} params
 * @param {string} params.title
 * @param {string} [params.message]
 * @param {Option[]} params.options
 * @param {(option: Option) => void} params.onOptionChange,
 * @param {Object} params.children
 *
 * @returns {Object} React component
 */
const OptionActionSheet = ({
  title,
  message,
  options,
  onOptionChange,
  children,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          title,
          message,
          options: ["Abbrechen", ...options.map((option) => option.title)],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex > 0) {
            onOptionChange(options[buttonIndex - 1]);
          }
        }
      );
    }}
  >
    {children}
  </TouchableOpacity>
);

/**
 * @param {Object} params
 * @param {string} params.title
 * @param {string} [params.message]
 * @param {Option[]} params.options
 * @param {(option: Option) => void} params.onOptionChange,
 * @param {Object} params.children
 *
 * @returns {Object} React component
 */
const GTDOptionSelector = ({
  title,
  message,
  options,
  onOptionChange,
  children,
}) => {
  return (
    <OptionActionSheet
      title={title}
      message={message}
      options={options}
      onOptionChange={onOptionChange}
    >
      {children}
    </OptionActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  picker: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },
});

GTDOptionSelector.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
};

GTDOptionSelector.defaultProps = {
  message: "",
};

export { GTDOptionSelector };
