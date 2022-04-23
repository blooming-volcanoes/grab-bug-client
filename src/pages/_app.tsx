/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import AuthProvider from "context/AuthProvider";
import ContextProvider from "context/SocketContext";
import AuthenticatedLayout from "Layouts/AuthenticatedLayout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "styles/globals.css";

const noAuthRequired = ["/", "/login", "/register"];

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <AuthProvider>
            <ContextProvider>
                {noAuthRequired.includes(router.pathname) ? (
                    <Component {...pageProps} />
                ) : (
                    <AuthenticatedLayout>
                        <Component {...pageProps} />
                    </AuthenticatedLayout>
                )}
            </ContextProvider>
        </AuthProvider>
    );
}

export default MyApp;
