import { ethers } from 'ethers';

export type Web3ProviderType = ethers.providers.Web3Provider | null | undefined;
export type Web3AddressType = string | null | undefined;
export type Web3NetworkType = ethers.providers.Network | null | undefined;