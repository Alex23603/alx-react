import { is, Map } from 'immutable';

/**
 * Checks if two Immutable.js Maps are equal.
 * @param {Map} map1 - First Immutable.js Map.
 * @param {Map} map2 - Second Immutable.js Map.
 * @returns {boolean} - `true` if Maps are equal, `false` otherwise.
 */
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

