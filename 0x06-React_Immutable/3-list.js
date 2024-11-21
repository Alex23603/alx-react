import { List } from 'immutable';

/**
 * Converts an array into an Immutable.js List.
 * @param {Array} array - The input array.
 * @returns {List} - An Immutable.js List.
 */
export function getListObject(array) {
  return List(array);
}

/**
 * Appends an element to an Immutable.js List.
 * @param {List} list - The Immutable.js List.
 * @param {string} element - The element to add.
 * @returns {List} - A new Immutable.js List.
 */
export function addElementToList(list, element) {
  return list.push(element);
}
