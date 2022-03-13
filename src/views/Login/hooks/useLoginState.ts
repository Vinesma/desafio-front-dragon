import React, { useCallback, useEffect, useState } from "react";
import { users } from "db/users";
import useGoToPage from "hooks/useGoToPage";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

export default function useLoginState() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidLogin, setInvalidLogin] = useState(false);
    const [{ goToDragonList }] = useGoToPage();

    const loginIsValid = useCallback((_email, _password) => {
        for (const user of users) {
            const validEmail = user.email === _email;
            const validPassword = user.password === _password;

            if (validEmail && validPassword) return true;
        }

        return false;
    }, []);

    const login = useCallback(
        (event: FormEvent) => {
            event.preventDefault();
            if (loginIsValid(email, password)) {
                localStorage.setItem("user", email);
                setInvalidLogin(false);
                goToDragonList();
            } else {
                setInvalidLogin(true);
            }
        },
        [goToDragonList, email, password, loginIsValid]
    );

    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            goToDragonList();
        }
    }, [goToDragonList]);

    return [
        {
            value: email,
            onChange: (e: ChangeEvent) => setEmail(e.target.value),
            onBlur: () => setInvalidLogin(false),
        },
        {
            value: password,
            onChange: (e: ChangeEvent) => setPassword(e.target.value),
            onBlur: () => setInvalidLogin(false),
        },
        { invalidLogin, login },
    ] as const;
}
