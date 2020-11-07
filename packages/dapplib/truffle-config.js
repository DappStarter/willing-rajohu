require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note sister coil hunt dry equal gauge'; 
let testAccounts = [
"0x60dc1d60186859715579832369786d076e576953066ee83ce7643b684b3a1411",
"0x43540b9e4cb975ad36f24879af6044e039f1592d40171c25910ecb81404f462d",
"0x7b58c55bceb4b483936b27fe3027d1cdd1c3096cd35acaac3b99ea509089640c",
"0x77e02bc4d2d0a74a48efd8750389000ef0af562ee84f6786063ceb794cb5bcc8",
"0x6475190ab438f9d16ce8af5d0afa82f59f45fe8f0a9dec72095808eb6f5cd38b",
"0x6df09c4f1e031ce86c4488f9e9133c84d41762fd6c6e31fc5b749fdff64f6503",
"0x187692e0cde3a516b833aee33574f1215ca5382b83c8578e8f5a4856d9920c03",
"0xb9d12413bda908b4fa0cc6e294b15290a076a9435867f750556346f64011afbd",
"0x6466a3f78080b0e4066fc325d8c56bd5142082ccf1bd53c5e4774406676e1dcf",
"0x486e4e3bd2ac7a7d3af84ba5f4e218385242c4ca2ef217480d6add5e690842e1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
