const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = "";
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message.charAt(i);
      if (this.alphabet.indexOf(char) === -1) {
        encryptedMessage += char;
        continue;
      }
      const keyChar = key.charAt(keyIndex % key.length);
      const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);
      const charIndexInAlphabet = this.alphabet.indexOf(char);
      const encryptedCharIndex = (charIndexInAlphabet + keyIndexInAlphabet) % 26;
      encryptedMessage += this.alphabet.charAt(encryptedCharIndex);
      keyIndex++;
    }
    return this.isDirect ? encryptedMessage : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = "";
    let keyIndex = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage.charAt(i);
      if (this.alphabet.indexOf(char) === -1) {
        decryptedMessage += char;
        continue;
      }
      const keyChar = key.charAt(keyIndex % key.length);
      const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);
      const charIndexInAlphabet = this.alphabet.indexOf(char);
      const decryptedCharIndex = (charIndexInAlphabet + 26 - keyIndexInAlphabet) % 26;
      decryptedMessage += this.alphabet.charAt(decryptedCharIndex);
      keyIndex++;
    }
    return this.isDirect ? decryptedMessage : decryptedMessage.split("").reverse().join("");
  }
}


module.exports = {
  VigenereCipheringMachine
};
