import React, { ReactNode } from "react";
import { ToastProvider } from "./toast";

type HooksProps = {
    children: ReactNode;
}

export const Hooks = ({ children }: HooksProps): JSX.Element => {
    return (
        <ToastProvider>
            {children}
        </ToastProvider>
    )
}