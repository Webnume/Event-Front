import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image", () => {
  it("renders the Image", () => {
    render(
        <Image url="#"  alt="Img test"/>
    );
    const headline = screen.getByAltText("Img test");
    expect(headline).toBeInTheDocument();
  });
  
});
