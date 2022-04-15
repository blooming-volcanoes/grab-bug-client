/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import AuthProvider from "context/AuthProvider";
import type { AppProps } from "next/app";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Component {...pageProps} />;
        </AuthProvider>
    );
}

export default MyApp;
