import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    Web3AddressType,
    Web3NetworkType,
    Web3ProviderType,
} from '../../types/web3';

export type Web3State = {
    provider: any;
    web3Provider: Web3ProviderType;
    address: Web3AddressType;
    network: Web3NetworkType;
};

const initialState: Web3State = {
    provider: null,
    web3Provider: null,
    address: null,
    network: null,
};

const web3StateSlice = createSlice({
    name: 'web3State',
    initialState,
    reducers: {
        setWeb3State(state, action: PayloadAction<Web3State>) {
            return action.payload;
        },
        setWeb3Address(state, action: PayloadAction<Web3AddressType>) {
            state.address = action.payload;
            return state;
        },
        setWeb3Network(state, action: PayloadAction<Web3NetworkType>) {
            state.network = action.payload;
            return state;
        },
        resetWeb3State(state) {
            state = { ...initialState };
            return state;
        },
    },
});

const web3StateReducer = web3StateSlice.reducer;
export default web3StateReducer;
export const { setWeb3State, setWeb3Address, setWeb3Network, resetWeb3State } =
    web3StateSlice.actions;
