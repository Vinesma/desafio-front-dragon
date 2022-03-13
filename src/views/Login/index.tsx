import Button from "components/Form/Button";
import Input from "components/Form/Input";
import Heading from "components/Typography/Heading";
import useLoginState from "./hooks/useLoginState";
import { Form, InnerWrapper, Wrapper } from "./styles";

const Login = () => {
    const [emailProps, passwordProps, { invalidLogin }, { goToDragonList }] =
        useLoginState();

    return (
        <Wrapper>
            <InnerWrapper>
                <Form onSubmit={goToDragonList}>
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
                    {invalidLogin && <p>Invalid login! Please try again.</p>}
                </Form>
            </InnerWrapper>
        </Wrapper>
    );
};

export default Login;
