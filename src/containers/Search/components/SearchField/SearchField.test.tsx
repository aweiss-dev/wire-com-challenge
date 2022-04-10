import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../../../testUtils";
import * as stories from "./SearchField.stories";

const { Basic } = composeStories(stories);

describe("Container/Search/Components/SearchField", () => {
  it("Should render searchbox", () => {
    render(<Basic />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("Should display value", () => {
    const value = "demo value";
    render(<Basic value={value} />);
    expect(screen.getByRole("searchbox")).toHaveValue(value);
  });

  it("Should react to value change", () => {
    const typeValue = "thats neat";
    const callback = jest.fn();
    render(<Basic onValueChange={callback} />);
    userEvent.type(screen.getByRole("searchbox"), typeValue);
    expect(callback).toBeCalledTimes(typeValue.length);
  });
});
