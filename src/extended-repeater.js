/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const base = String(str);
  const hasAddition = Object.prototype.hasOwnProperty.call(options, 'addition');
  const additionPart = hasAddition
    ? Array(additionRepeatTimes)
        .fill(String(addition))
        .join(additionSeparator)
    : '';

  return Array(repeatTimes)
    .fill(base + additionPart)
    .join(separator);
}

module.exports = {
  repeater
};
