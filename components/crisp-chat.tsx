"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export function CrispChat() {
    useEffect(() => {
        Crisp.configure("37a15c50-8f2a-4ac2-a3d9-64467d5b31da");
    }, []);

    return null;
}
