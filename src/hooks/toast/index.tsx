import React, { ReactNode, createContext, useContext } from "react";
import { toast } from "react-toastify";

type ToastContextType = {
    toastError: (message: string) => void;
    toastSuccess: (message: string) => void;
    toastWarning: (message: string) => void;
    toastInfo: (message: string) => void;
}

const ToastContext = createContext({} as ToastContextType);

type ToastProviderType = {
    children: ReactNode
}

const ToastProvider = ({ children }: ToastProviderType): JSX.Element => {
    const toastInfo = (message: string) => {
        toast(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const toastSuccess = (message: string) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    
    const toastError = (message: string) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const toastWarning = (message: string) => {
        toast.warning(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <ToastContext.Provider
            value={{
                toastInfo,
                toastSuccess,
                toastError,
                toastWarning
            }}
        >
            {children}
        </ToastContext.Provider>
    )
}

function useToast() {
    const context = useContext(ToastContext);
    return context;
}

export { ToastProvider, useToast };