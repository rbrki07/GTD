// @ts-check
// eslint-disable-next-line no-unused-vars
import typedefs from "./../typedefs";
import { v4 } from "uuid";
import { DateTime } from "luxon";

/**
 * @param {Object} params
 * @param {string} [params.title]
 * @param {string} [params.description]
 * @param {string} [params.image]
 *
 * @returns {typedefs.Item}
 */
export const createItem = ({ title, description, image }) => {
  return {
    id: v4(),
    title,
    description,
    image,
    done: false,
    createdAt: DateTime.now().toISO(),
  };
};
