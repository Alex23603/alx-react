import { Map } from 'immutable';

/**
 * Deeply merges two objects into an Immutable.js Map.
 * @param {Object} page1 - First object.
 * @param {Object} page2 - Second object.
 * @returns {Map} - Deeply merged Immutable.js Map.
 */
export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
