import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "db/users";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

export default function useLoginState() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidLogin, setInvalidLogin] = useState(false);
    const navigate = useNavigate();

    const loginIsValid = useCallback((_email, _password) => {
        for (const user of users) {
            const validEmail = user.email === _email;
            const validPassword = user.password === _password;

            if (validEmail && validPassword) return true;
        }

        return false;
    }, []);

    const goToDragonList = useCallback(
        (event: FormEvent) => {
            event.preventDefault();
            if (loginIsValid(email, password)) {
                localStorage.setItem("user", email);
                setInvalidLogin(false);
                navigate("/dragons");
            } else {
                setInvalidLogin(true);
            }
        },
        [navigate, email, password, loginIsValid]
    );

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
        { invalidLogin },
        { goToDragonList },
    ] as const;
}
