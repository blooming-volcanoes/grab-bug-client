/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import Header from "components/common/Header";
import useAuth from "hooks/useAuth";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function UnAuthenticatedLayout({ children, title }: { children: React.ReactNode; title?: string }) {
    const { user } = useAuth();
    const router = useRouter();
    if (user?.user?.email) {
        router.replace("/");
    }
    return (
        <section>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <div>{user?.user?.email ? null : children}</div>
        </section>
    );
}

export default UnAuthenticatedLayout;
