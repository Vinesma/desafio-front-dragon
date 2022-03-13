import Login from ".";
import { render, screen } from "test-utils";
import userEvent from "@testing-library/user-event";
import { users } from "db/users";

const setup = () => render(<Login />);
const getInputs = () => {
    return [screen.getByLabelText("Email"), screen.getByLabelText("Password")];
};

describe("<Login />", () => {
    it("Loads with email input focused", () => {
        setup();
        const [emailInput] = getInputs();

        expect(emailInput).toHaveFocus();
    });

    it("Cannot log in with invalid credentials", () => {
        setup();
        const [emailInput, passwordInput] = getInputs();
        const submitButton = screen.getByText("Login");

        userEvent.type(emailInput, "wrong@email.com");
        userEvent.type(passwordInput, "123");
        userEvent.click(submitButton);

        const errorMessage = screen.getByText(
            "Invalid login! Please try again."
        );

        expect(errorMessage).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it("Can log in with valid credentials", () => {
        setup();
        const [emailInput, passwordInput] = getInputs();
        const submitButton = screen.getByText("Login");

        userEvent.type(emailInput, users[0].email);
        userEvent.type(passwordInput, users[0].password);
        userEvent.click(submitButton);

        expect(emailInput).not.toBeInTheDocument();
        expect(passwordInput).not.toBeInTheDocument();
        expect(submitButton).not.toBeInTheDocument();
    });
});
