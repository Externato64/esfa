import React, { ReactNode } from "react";
import { ToastProvider } from "./toast";
import { ApiProvider } from "./api";

type HooksProps = {
    children: ReactNode;
}

export const Hooks = ({ children }: HooksProps): JSX.Element => {
    return (
        <ApiProvider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </ApiProvider>
    );
};