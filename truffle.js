var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "august enough agree pupil spatial pyramid hurry bleak heavy author fine more";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*',
      gas: 6721975
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};