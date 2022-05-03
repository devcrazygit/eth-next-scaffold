import WalletConnectProvider from '@walletconnect/web3-provider';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
    resetWeb3State,
    setWeb3Address,
    setWeb3State,
    Web3State,
} from '../store/reducers/web3state';
import { web3StateSelector } from '../store/selectors/web3state';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
        },
    },
};

let web3Modal: Web3Modal | null;
if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions,
    });
}
type Web3Client = Web3State & {
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
};

export const useWeb3 = (): Web3Client => {
    const dispatch = useAppDispatch();
    const { provider, web3Provider, address, network } =
        useAppSelector(web3StateSelector);
    const connect = useCallback(async () => {
        if (web3Modal) {
            try {
                const provider = await web3Modal.connect();
                const web3Provider = new ethers.providers.Web3Provider(
                    provider
                );
                const signer = web3Provider.getSigner();
                const address = await signer.getAddress();
                const network = await web3Provider.getNetwork();
                dispatch(
                    setWeb3State({
                        provider,
                        web3Provider,
                        address,
                        network,
                    })
                );
            } catch (e) {
                console.error(e);
            }
        }
    }, []);
    const disconnect = useCallback(async () => {
        if (web3Modal) {
            web3Modal.clearCachedProvider();
            if (
                provider?.disconnect &&
                typeof provider.disconnect === 'function'
            ) {
                await provider.disconnect();
            }
            dispatch(resetWeb3State());
        } else {
            console.error('No web3modal');
        }
    }, [provider]);
    useEffect(() => {
        if (web3Modal && web3Modal.cachedProvider) {
            connect();
        }
    }, [connect]);

    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = (accounts: string[]) => {
                dispatch(setWeb3Address(accounts[0]));
            };

            const handleChainChanged = (_hexChainId: string) => {
                if (typeof window !== 'undefined') {
                    console.log('switched to chain...', _hexChainId);
                    window.location.reload();
                } else {
                    console.log('window is undefined');
                }
            };

            const handleDisconnect = (error: {
                code: number;
                message: string;
            }) => {
                console.log('disconnect', error);
                disconnect();
            };
            provider.on('accountsChanged', handleAccountsChanged);
            provider.on('chainChanged', handleChainChanged);
            provider.on('disconnect', handleDisconnect);

            return () => {
                if (provider.removeListener) {
                    provider.removeListener(
                        'accountsChanged',
                        handleAccountsChanged
                    );
                    provider.removeListener('chainChanged', handleChainChanged);
                    provider.removeListener('disconnect', handleDisconnect);
                }
            };
        }
    }, [provider, disconnect]);

    return {
        provider,
        web3Provider,
        address,
        network,
        connect,
        disconnect,
    };
};
