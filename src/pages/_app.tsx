/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import AuthProvider from "context/AuthProvider";
import AuthenticatedLayout from "Layouts/AuthenticatedLayout";
import GlobalLayout from "Layouts/GlobalLayout";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import DataProvider from "redux/store";
import "../styles/global.css";

NProgress.configure({ showSpinner: false });
const noAuthRequired = ["/", "/login", "/register", "/about", "/contact", "/documentation"];

function MyApp({ Component, pageProps }: any) {
    const router = useRouter();

    Router.events.on("routeChangeStart", () => {
        NProgress.start();
    });
    Router.events.on("routeChangeComplete", () => {
        NProgress.done();
    });
    Router.events.off("routeChangeError", () => {
        NProgress.done();
    });

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
