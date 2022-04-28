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
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resEncrypt = [];

    message = message.toUpperCase();
    key = key.toUpperCase();

    let messageTmp = message;

    message = message.split('').filter((elem) => alphabet.includes(elem)).join('');

    let keyCount = 0;
    if (message.length > key.length) {
      keyCount = Math.ceil(message.length / key.length);
      key = key.repeat(keyCount);
    }
    key = key.slice(0, message.length);

    for (let i = 0; i < message.length; i++) {
      let num = (message.charCodeAt(i) + key.charCodeAt(i)) % 26;
      num += 'A'.charCodeAt(0);
      resEncrypt.push(String.fromCharCode(num));
    }

    for (let i = 0; i < messageTmp.length; i++) {
      if (!alphabet.includes(messageTmp[i])) {
        resEncrypt.splice(i, 0, messageTmp[i]);
      }
    }

    if (!this.direct) {
      return resEncrypt.reverse().join('');
    } else {
      return resEncrypt.join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resDecrypt = [];

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessageTmp = encryptedMessage;

    encryptedMessage = encryptedMessage.split('').filter((elem) => alphabet.includes(elem)).join('');

    let keyCount = 0;
    if (encryptedMessage.length > key.length) {
      keyCount = Math.ceil(encryptedMessage.length / key.length);
      key = key.repeat(keyCount);
    }
    key = key.slice(0, encryptedMessage.length);

    for (let i = 0; i < encryptedMessage.length; i++) {
      let num = (encryptedMessage.charCodeAt(i) - key.charCodeAt(i) + 26) % 26;
      num += 'A'.charCodeAt(0);
      resDecrypt.push(String.fromCharCode(num));
    }

    for (let i = 0; i < encryptedMessageTmp.length; i++) {
      if (!alphabet.includes(encryptedMessageTmp[i])) {
        resDecrypt.splice(i, 0, encryptedMessageTmp[i]);
      }
    }

    if (!this.direct) {
      return resDecrypt.reverse().join('');
    } else {
      return resDecrypt.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
