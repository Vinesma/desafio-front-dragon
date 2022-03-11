import Input from "components/Form/Input";
import useLoginState from "./hooks/useLoginState";
import { InnerWrapper, Wrapper } from "./styles";

const Login = () => {
    const [emailProps, passwordProps] = useLoginState();

    return (
        <Wrapper>
            <InnerWrapper>
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
            </InnerWrapper>
        </Wrapper>
    );
};

export default Login;
