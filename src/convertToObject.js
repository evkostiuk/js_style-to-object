'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line);
  const stylesObject = {};

  for (const line of lines) {
    const [property, value] = line.split(':').map((part) => part.trim());

    if (property && value) {
      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
