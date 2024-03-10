import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    console.log(user, "this is user from authenticated layout", user.name);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (isClient && !user?.email) {
        router.replace("/login");
    }
    return <div>{user?.email ? children : null}</div>;
}

export default AuthenticatedLayout;
