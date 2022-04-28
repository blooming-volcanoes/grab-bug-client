/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import AuthProvider from "context/AuthProvider";
import ChatProvider from "context/ChatProvider";
import ContextProvider from "context/SocketContext";
import AuthenticatedLayout from "Layouts/AuthenticatedLayout";
import { useRouter } from "next/router";
import "styles/globals.css";

const noAuthRequired = ["/", "/login", "/register", "/about", "/contact", "/documentation"];

function MyApp({ Component, pageProps }: any) {
    const router = useRouter();

    return (
        <AuthProvider>
            <ChatProvider>
                <ContextProvider>
                    {noAuthRequired.includes(router.pathname) ? (
                        <Component {...pageProps} />
                    ) : (
                        <AuthenticatedLayout>
                            <Component {...pageProps} />
                        </AuthenticatedLayout>
                    )}
                </ContextProvider>
            </ChatProvider>
        </AuthProvider>
    );
}

export default MyApp;
