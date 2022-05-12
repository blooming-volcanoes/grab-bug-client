<<<<<<< HEAD
=======
/* eslint-disable no-unused-vars */
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import AuthProvider from "context/AuthProvider";
<<<<<<< HEAD
import ChatProvider from "context/ChatProvider";
import ContextProvider from "context/SocketContext";
import AuthenticatedLayout from "Layouts/AuthenticatedLayout";
import { useRouter } from "next/router";
import "styles/globals.css";
=======
import AuthenticatedLayout from "Layouts/AuthenticatedLayout";
import GlobalLayout from "Layouts/GlobalLayout";
import { useRouter } from "next/router";
import DataProvider from "redux/store";
import "../styles/global.css";
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a

const noAuthRequired = ["/", "/login", "/register", "/about", "/contact", "/documentation"];

function MyApp({ Component, pageProps }: any) {
    const router = useRouter();

    return (
        <AuthProvider>
<<<<<<< HEAD
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
=======
            <DataProvider>
                {noAuthRequired.includes(router.pathname) ? (
                    <Component {...pageProps} />
                ) : (
                    <AuthenticatedLayout>
                        <GlobalLayout>
                            <Component {...pageProps} />
                        </GlobalLayout>
                    </AuthenticatedLayout>
                )}
            </DataProvider>
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
        </AuthProvider>
    );
}

export default MyApp;
