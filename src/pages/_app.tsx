/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import AuthProvider from "context/AuthProvider";
import AuthenticatedLayout from "Layouts/AuthenticatedLayout";
import GlobalLayout from "Layouts/GlobalLayout";
import { useRouter } from "next/router";
import DataProvider from "redux/store";
import "../styles/global.css";

const noAuthRequired = ["/", "/login", "/register", "/about", "/contact", "/documentation"];

function MyApp({ Component, pageProps }: any) {
    const router = useRouter();

    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}

export default MyApp;
