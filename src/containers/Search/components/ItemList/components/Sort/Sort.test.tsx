import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../../../../../testUtils";
import * as stories from "./Sort.stories";

const { Basic } = composeStories(stories);

describe("Container/Search/Components/Sort", () => {
  it("Should render the component", () => {
    render(<Basic />);
    expect(screen.getByRole("group")).toBeInTheDocument();
  });

  it("Should select the activeValue", () => {
    render(<Basic activeValue="ALPHABET_DESC" />);
    expect(
      screen.getByRole("button", { name: "Sort by alphabet desc" })
    ).toBeEnabled();
  });

  it("Should react to clicks on inactive buttons", () => {
    const callback = jest.fn();
    render(<Basic activeValue="ALPHABET_DESC" onChange={callback} />);
    userEvent.click(
      screen.getByRole("button", { name: "Sort by alphabet desc" })
    );
    expect(callback).not.toHaveBeenCalled();
    userEvent.click(
      screen.getByRole("button", { name: "Sort by alphabet asc" })
    );
    expect(callback).toHaveBeenCalled();
  });
});
