import { render, screen } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    render(<Root name="home" />);

    expect(screen.getByText(/home is mounted!/i)).toBeInTheDocument();
  });
});
