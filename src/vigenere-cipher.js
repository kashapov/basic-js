/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
function processMessage(text, key, encrypt, direct) {
  if (text === undefined || key === undefined) {
    throw new Error('Incorrect arguments!');
  }

  const message = String(text).toUpperCase();
  const keyword = String(key).toUpperCase();
  let result = '';
  let keyIndex = 0;

  for (const char of message) {
    if (char >= 'A' && char <= 'Z') {
      const shift = keyword[keyIndex % keyword.length].charCodeAt(0) - 65;
      const code = char.charCodeAt(0) - 65;
      const next = encrypt
        ? (code + shift) % 26
        : (code - shift + 26) % 26;
      result += String.fromCharCode(next + 65);
      keyIndex += 1;
    } else {
      result += char;
    }
  }

  return direct ? result : result.split('').reverse().join('');
}

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return processMessage(message, key, true, this.direct);
  }

  decrypt(encryptedMessage, key) {
    return processMessage(encryptedMessage, key, false, this.direct);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
