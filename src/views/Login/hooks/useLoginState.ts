import React, { useState } from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function useLoginState() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return [
        {
            value: email,
            onChange: (e: ChangeEvent) => setEmail(e.target.value),
        },
        {
            value: password,
            onChange: (e: ChangeEvent) => setPassword(e.target.value),
        },
    ] as const;
}
