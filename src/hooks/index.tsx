import React, { ReactNode } from "react";
import { ToastProvider } from "./toast";
import { ApiProvider } from "./api";
import { SessionProvider } from "./session";

export * from './api';
export * from './session';
export * from './toast';

type HooksProps = {
    children: ReactNode;
}

export const Hooks = ({ children }: HooksProps): JSX.Element => {
    return (
        <ApiProvider>
            <ToastProvider>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </ToastProvider>
        </ApiProvider>
    );
};