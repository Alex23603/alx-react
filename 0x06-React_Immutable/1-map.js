import { Map } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable.js Map.
 * @param {Object} object - The input object.
 * @returns {Map} - Immutable.js Map representation.
 */
export default function getImmutableObject(object) {
  return Map(object);
}
