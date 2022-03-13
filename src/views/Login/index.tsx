import Button from "components/Form/Button";
import Input from "components/Form/Input";
import useLoginState from "./hooks/useLoginState";
import { Form, Wrapper } from "./styles";

const Login = () => {
    const [emailProps, passwordProps, { invalidLogin }, { goToDragonList }] =
        useLoginState();

    return (
        <Wrapper>
            <Form onSubmit={goToDragonList}>
                <Input.Group>
                    <Input
                        id="emailInput"
                        label="Email"
                        type="email"
                        placeholder="Email address"
                        {...emailProps}
                    />
                    <Input
                        id="passwordInput"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        {...passwordProps}
                    />
                </Input.Group>
                <Button.Group>
                    <Button type="submit">Login</Button>
                </Button.Group>
                {invalidLogin && <p>Invalid login! Please try again.</p>}
            </Form>
        </Wrapper>
    );
};

export default Login;
