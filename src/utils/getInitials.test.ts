import getInitials from "./getInitials";

describe("Initials", () => {
  it("shoud be displayed", () => {
    const initials = getInitials("John", "Doe");
    expect(initials).toStrictEqual(["J", "D"]);
  });
});
