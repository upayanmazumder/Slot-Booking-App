"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <Image src={session.user.image} alt="Profile Picture" width={50} height={50} /> <p>{session.user.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }

    return (
        <div>
            You are not logged in!
            <button onClick={() => signIn("google")}>Signin with Google</button>
        </div>
    );
}