"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <p>Welcome, {session.user.name}!</p>
                <img src={session.user.image} alt="Profile Picture" width={50} />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={() => signIn("google")}>Signin with Google</button>
        </div>
    );
}