import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import React from "react";

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();
    const router = useRouter();
    if (!user?.user?.email) {
        router.replace("/login");
    }
    return <div>{user?.user?.email ? children : null}</div>;
}

export default AuthenticatedLayout;
