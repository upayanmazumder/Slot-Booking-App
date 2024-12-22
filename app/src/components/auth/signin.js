"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div class="container container-center">
                <Image src={session.user.image} alt="Profile Picture" width={50} height={50} />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }

    return (
        <div class="container container-center">
            <button onClick={() => signIn("google")}>Signin with Google</button>
        </div>
    );
}