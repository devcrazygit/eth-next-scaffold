import React, { PropsWithChildren } from 'react';
import { useWeb3 } from '../lib/hooks/web3client';

export type ConnectProps = PropsWithChildren<{
    connect: (() => Promise<void>) | null;
}> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

export type DisconnectProps = PropsWithChildren<{
    disconnect: (() => Promise<void>) | null;
}> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Web3ButtonProps = PropsWithChildren<{}> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

const ConnectButton: React.FC<ConnectProps> = ({ connect, ...rest }) => {
    return connect ? (
        <button {...rest} onClick={connect}>
            Connect
        </button>
    ) : (
        <button {...rest}>Loading ...</button>
    );
};

const DisconnectButton: React.FC<DisconnectProps> = ({
    disconnect,
    ...rest
}) => {
    return disconnect ? (
        <button onClick={disconnect} {...rest}>
            Disconnect
        </button>
    ) : (
        <button {...rest}>Loading ...</button>
    );
};

export const Web3Button: React.FC<Web3ButtonProps> = ({ ...props }) => {
    const { web3Provider, connect, disconnect } = useWeb3();
    return web3Provider ? (
        <DisconnectButton disconnect={disconnect} {...props} />
    ) : (
        <ConnectButton connect={connect} {...props} />
    );
};
