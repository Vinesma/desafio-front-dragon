import Button from "components/Form/Button";
import Input from "components/Form/Input";
import Heading from "components/Typography/Heading";
import Text from "components/Typography/Text";
import useLoginState from "./hooks/useLoginState";
import { Form, Wrapper } from "./styles";

const Login = () => {
    const [emailProps, passwordProps, { login, invalidLogin }] =
        useLoginState();

    return (
        <Wrapper>
            <Form onSubmit={login}>
                <Heading type="h2" center>
                    DragonPal
                </Heading>
                <Input.Group>
                    <Input
                        id="emailInput"
                        label="Email"
                        type="email"
                        placeholder="Email address"
                        autoFocus
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
                {invalidLogin && (
                    <Text center>Invalid login! Please try again.</Text>
                )}
            </Form>
        </Wrapper>
    );
};

export default Login;
