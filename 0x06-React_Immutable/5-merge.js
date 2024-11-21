import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into an Immutable.js List.
 * @param {Array} page1 - First array.
 * @param {Array} page2 - Second array.
 * @returns {List} - An Immutable.js List.
 */
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

/**
 * Merges two objects into an Immutable.js Map.
 * @param {Object} page1 - First object.
 * @param {Object} page2 - Second object.
 * @returns {Map} - An Immutable.js Map.
 */
export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}
