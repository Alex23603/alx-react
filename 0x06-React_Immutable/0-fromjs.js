import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable.js Map.
 * @param {Object} object - The input object to convert.
 * @returns {Map} An Immutable Map representation of the input object.
 */
export default function getImmutableObject(object) {
    return fromJS(object);
}
