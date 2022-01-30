require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note often million hover problem off gas'; 
let testAccounts = [
"0x646946f5e5934bfd43863a20a970566a93743cc0d7569a093478c2243ec99353",
"0x4f6b02d32e1a0b2d62a00f04ac3987974918856c9f5cc30e787bde678bd064c6",
"0x2baccef753e322bc794c2933e0368daabc800b3fdacefde9ab9b6750864be46a",
"0x4bd40db7427f0feedf5d52836fc3debd1837eb79be224008591e056532cf615a",
"0xae1041c082cf89f20310c1643989b2186433cc7becf730c497af6ebb836480b8",
"0xbd46f58ce51b0026093021800bbb25a5a7365d4ad1f4098a9086c8492b7bcca2",
"0x69cd16ac8a7931b4ca18766e4be5d6b496bcf08202fd54dd6809569e5f6da350",
"0x1f5861fa30d77ad3780b9df49cea7ac51b1ff9f2129cc17e1b949130dff27ade",
"0x706fbc7ae061116ae8fbd3b93f10e2170f53033fa86b5a9e705996bc638e230a",
"0x4f4dc043a548471dcdda42f687345a69cdda3b967bf8448ddb76d43cdbbeb462"
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

