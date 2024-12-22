"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import authStyles from "./auth.module.css";

export default function SignIn() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className={authStyles.auth}>
                <a href="/profile"><Image src={session.user.image} alt="Profile Picture" width={50} height={50} /></a>
            </div>
        );
    }

    return (
        <div className={authStyles.auth}>
            <button onClick={() => signIn("google")}><Image src="/media/unknown-person.svg" alt="Not logged in" width={50} height={50}></Image></button>
        </div >
    );
}