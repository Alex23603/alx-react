import { Seq } from 'immutable';

/**
 * Filters and transforms student data to print the best students.
 * @param {Object} grades - The object containing student data.
 */
export default function printBestStudents(grades) {
  // Convert the input object into an Immutable.js Seq for lazy evaluation
  const seq = Seq(grades);

  // Filter students with scores >= 70 and transform their names
  const bestStudents = seq
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  // Convert back to a plain JavaScript object and log to the console
  console.log(bestStudents.toObject());
}
