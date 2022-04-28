import { render } from "@testing-library/react";
import Register from "pages/register";
import React from "react";

it("Home page renders initial todos correctly", () => {
    const { getByTestId, debug } = render(<Register />);
});
