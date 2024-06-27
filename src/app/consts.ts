import { HexString } from '@gear-js/api';

interface ContractData {
  programId: HexString,
  idl: string
}

export const ONE_VARA = 1_000_000_000_000n;

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

// To use the example code, enter the details of the account that will pay the vouchers, etc. (name and mnemonic)
export const sponsorName = "";
export const sponsorMnemonic = "";

export const CONTRACT: ContractData = {
  programId: "0x144e44f6ff9a4a0aa028016ce295ec4aceb0148fb7e85ee24219311a38303838",
  idl: `type PingEvent = enum {
  Ping,
  Pong,
  Error: SignlessError,
};

type SignlessError = enum {
  SignlessAccountHasInvalidSession,
  SignlessAccountNotApproved,
  SignlessAddressAlreadyEsists,
  UserAddressAlreadyExists,
  UserDoesNotHasSignlessAccount,
  NoWalletAccountAlreadyExists,
  NoWalletAccountDoesNotHasSignlessAccount,
  SessionHasInvalidSignlessAccount,
};

type QueryEvent = enum {
  LastWhoCall: actor_id,
  SignlessAccountAddress: opt actor_id,
  SignlessAccountData: opt SignlessAccount,
};

type SignlessAccount = struct {
  address: str,
  encoded: str,
  encoding: SignlessEncodingData,
  meta: SignlessMetaData,
};

type SignlessEncodingData = struct {
  content: struct { str, str },
  encoding_type: struct { str, str },
  version: str,
};

type SignlessMetaData = struct {
  name: str,
};

type SignlessEvent = enum {
  SignlessAccountSet,
  Error: SignlessError,
};

constructor {
  New : ();
};

service Ping {
  Ping : (user_data: struct { opt actor_id, opt str }) -> PingEvent;
  Pong : (user_data: struct { opt actor_id, opt str }) -> PingEvent;
};

service Query {
  query LastWhoCall : () -> QueryEvent;
  query SignlessAccountData : (signless_address: actor_id) -> QueryEvent;
  query SignlessAddressFromNoWalletAccount : (no_wallet_account: str) -> QueryEvent;
  query SignlessAddressFromUserAddress : (user_address: actor_id) -> QueryEvent;
};

service Signless {
  BindSignlessDataToAddress : (user_address: actor_id, signless_data: SignlessAccount) -> SignlessEvent;
  BindSignlessDataToNoWalletAccount : (no_wallet_account: str, signless_data: SignlessAccount) -> SignlessEvent;
};`
}


