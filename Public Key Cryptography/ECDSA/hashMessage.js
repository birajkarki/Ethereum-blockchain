// Public Key Cryptography with ECDSA using secp256k1 curve, used in both Bitcoin and Ethereum.

// The first step in ECDSA is to hash the message before applying the signature algorithm.

const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  return keccak256(utf8ToBytes(message));
}

module.exports = hashMessage;
