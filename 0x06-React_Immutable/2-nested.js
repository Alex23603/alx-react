import { fromJS } from 'immutable';

/**
 * Accesses the value of an object at a defined path.
 * @param {Object} object - The plain JavaScript object.
 * @param {Array} array - The path array.
 * @returns {string|Map|undefined} - The value at the path.
 */
export default function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);
  return immutableObject.getIn(array);
}
