// @ts-check
import { createSelector } from "@reduxjs/toolkit";
import _ from "lodash";
// eslint-disable-next-line no-unused-vars
import typedefs from "./../typedefs";

/**
 * @type {typedefs.Item[]}
 */
const initialState = [];

/**
 * Actions
 */

const ADD_ITEM = "items/add";
const UPDATE_ITEM = "items/update";
const DELETE_ITEM = "items/delete";
const RESET_ITEMS = "items/reset";

/**
 * @typedef {Object} ItemAction
 * @property {string} type
 * @property {typedefs.Item} [payload]
 */

/**
 * @param {typedefs.Item} item
 *
 * @returns {ItemAction}
 */
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

/**
 * @param {typedefs.Item} item
 *
 * @returns {ItemAction}
 */
export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item,
  };
};

/**
 * @param {typedefs.Item} item
 *
 * @returns {ItemAction}
 */
export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

/**
 * @returns {ItemAction}
 */
export const resetItems = () => {
  return {
    type: RESET_ITEMS,
  };
};

/**
 * @param {typedefs.Item[]} state
 * @param {Object} action
 * @param {typedefs.Item} [action.payload]
 *
 * @returns {typedefs.Item[]}
 */
const addItemReducer = (state, action) => {
  return [...state, action.payload];
};

/**
 * @param {typedefs.Item[]} state
 * @param {Object} action
 * @param {typedefs.Item} [action.payload]
 *
 * @returns {typedefs.Item[]}
 */
const updateItemReducer = (state, action) => {
  return state.map((item) =>
    item?.id === action.payload?.id ? action.payload : item
  );
};

/**
 * @param {typedefs.Item[]} state
 * @param {Object} action
 * @param {typedefs.Item} [action.payload]
 *
 * @returns {typedefs.Item[]}
 */
const deleteItemReducer = (state, action) => {
  return state.filter((item) => item?.id !== action.payload?.id);
};

/**
 * @returns Item[]
 */
const resetItemsReducer = () => initialState;

/**
 * @param {typedefs.Item[]} state
 * @param {ItemAction} action
 *
 * @returns {typedefs.Item[]}
 */
export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addItemReducer(state, action);
    case UPDATE_ITEM:
      return updateItemReducer(state, action);
    case DELETE_ITEM:
      return deleteItemReducer(state, action);
    case RESET_ITEMS:
      return resetItemsReducer();
    default:
      return state;
  }
};

/**
 * @param {Object} state
 * @param {typedefs.Item[]} state.items
 *
 * @returns {typedefs.Item[]}
 */
const itemsSelector = (state) => state.items;

export const itemsOrderedByDoneAtDescAndCreatedAtDesc = createSelector(
  itemsSelector,
  (items) => _.orderBy(items, ["doneAt", "createdAt"], ["desc", "desc"])
);
