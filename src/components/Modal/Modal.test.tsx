import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "./Modal";

const onClose = vi.fn();
beforeEach(() => {
  render(
    <Modal open={true} onClose={onClose}>
      <h1>Modal Title</h1>
      <p>Modal Content</p>
    </Modal>
  );
});
describe("Modal", () => {
  it("renders modal content", () => {
    expect(screen.getByText("Modal Title")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
    const closeButton = screen.getByRole("button", { name: /X/i });
    expect(closeButton).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const closeButton = screen.getByRole("button", { name: /X/i });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
