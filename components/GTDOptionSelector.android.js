// @ts-check
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

/**
 * @typedef {Object} Option
 * @property {string} title
 * @property {string} value
 */

/**
 * @param {Object} params
 * @param {string} params.title
 * @param {Option[]} params.options
 * @param {(option: Option) => void} params.onOptionChange,
 * @param {Object} params.children
 *
 * @returns {Object} React component
 */
const OptionPicker = ({ title, options, onOptionChange, children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Picker
        mode={"dialog"}
        prompt={title}
        style={styles.picker}
        onValueChange={(value, index) => {
          if (value !== "cancel") {
            onOptionChange({
              title: options[index].title,
              value,
            });
          }
        }}
      >
        {[...options, { title: "Abbrechen", value: "cancel" }].map(
          (option, index) => {
            return (
              <Picker.Item
                key={index}
                label={option.title}
                value={option.value}
                color={option.value === "cancel" ? "#457b9d" : undefined}
              />
            );
          }
        )}
      </Picker>
    </View>
  );
};

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
    <OptionPicker
      title={title}
      options={[{ title: message, value: null }, ...options]}
      onOptionChange={onOptionChange}
    >
      {children}
    </OptionPicker>
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
