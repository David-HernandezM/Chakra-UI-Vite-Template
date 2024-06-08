import { HexString } from '@gear-js/api';

interface ContractData {
  programId: HexString,
  metadata: string
}

export const ACCOUNT_ID_LOCAL_STORAGE_KEY = 'account';

export const ADDRESS = {
  NODE: import.meta.env.VITE_NODE_ADDRESS,
  BACK: import.meta.env.VITE_BACKEND_ADDRESS,
  GAME: import.meta.env.VITE_CONTRACT_ADDRESS as HexString,
};

export const ROUTES = {
  HOME: '/',
  EXAMPLES: '/examples',
  NOTFOUND: '*',
};

export const sponsorName = "DavidAdmin";
export const sponsorMnemonic = "strong orchard plastic arena pyramid lobster lonely rich stomach label clog rubber";

export const CONTRACT: ContractData = {
  programId: "0x4a8d99e4925dc0285ae7d2f16f97869390880b83a36cfce17b54f31529ec53a3",
  metadata: "00020000000100000000010c00000000000000010d000000010e0000002d1640000840636f6e74726163745f746573745f696f38436f6e7472616374416374696f6e0001101050696e67040130757365725f6163636f756e74040184284f7074696f6e3c4163746f7249643e2c204f7074696f6e3c537472696e673e2900000010506f6e67040130757365725f6163636f756e74040184284f7074696f6e3c4163746f7249643e2c204f7074696f6e3c537472696e673e290001007842696e645369676e6c6573734163636f756e745769746841646472657373080130757365725f616464726573730c011c4163746f7249640001347369676e6c6573735f6461746120013c5369676e6c6573734163636f756e740002007c42696e645369676e6c6573734163636f756e74576974684e6f57616c6c65740801246e6f5f77616c6c65741c0118537472696e670001347369676e6c6573735f6461746120013c5369676e6c6573734163636f756e740003000004000004080818000804184f7074696f6e040454010c0108104e6f6e6500000010536f6d6504000c00000100000c10106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001001205b75383b2033325d0000100000032000000014001400000503001804184f7074696f6e040454011c0108104e6f6e6500000010536f6d6504001c00000100001c0000050200200840636f6e74726163745f746573745f696f3c5369676e6c6573734163636f756e74000010011c616464726573731c0118537472696e6700011c656e636f6465641c0118537472696e67000120656e636f64696e672401505369676e6c657373456e636f64696e67446174610001106d6574612c01405369676e6c6573734d657461446174610000240840636f6e74726163745f746573745f696f505369676e6c657373456e636f64696e674461746100000c011c636f6e74656e7428014028537472696e672c20537472696e6729000134656e636f64696e675f7479706528014028537472696e672c20537472696e672900011c76657273696f6e1c0118537472696e67000028000004081c1c002c0840636f6e74726163745f746573745f696f405369676e6c6573734d6574614461746100000401106e616d651c0118537472696e670000300840636f6e74726163745f746573745f696f34436f6e74726163744576656e740001201c47657450696e670000001c476574506f6e670001003c436f6e747261637453746172746564000200485369676e6c6573734163636f756e74536574000300484261645369676e6c65737353657373696f6e0004008041646472657373416c72656164794861735369676e6c6573734163636f756e74000500844e6f57616c6c6574416c72656164794861735369676e6c6573734163636f756e74000600705369676e6c65737341646472657373416c726561647945736973747300070000340840636f6e74726163745f746573745f696f48436f6e7472616374537461746551756572790001104c4c61737457686f43616c6c436f6e7472616374000000605369676e6c6573734164647265737342794164647265737304000c011c4163746f724964000100645369676e6c6573734164647265737342794e6f57616c6c657404001c0118537472696e67000200305369676e6c6573734461746104000c011c4163746f72496400030000380840636f6e74726163745f746573745f696f48436f6e747261637453746174655265706c7900010c4c4c61737457686f43616c6c436f6e747261637404000c011c4163746f7249640000003c5369676e6c65737341646472657373040008013c4f7074696f6e3c4163746f7249643e000100305369676e6c6573734461746104003c015c4f7074696f6e3c5369676e6c6573734163636f756e743e000200003c04184f7074696f6e04045401200108104e6f6e6500000010536f6d650400200000010000"
}