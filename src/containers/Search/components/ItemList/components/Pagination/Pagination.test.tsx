import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../../../../../testUtils";
import * as stories from "./Pagination.stories";

const { Basic } = composeStories(stories);

describe("Container/Search/Components/Pagination", () => {
  it("Should render pagination", () => {
    render(<Basic />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("button", { current: true })).toHaveTextContent(
      "1"
    );
    expect(
      screen.getByRole("button", { name: "Go to next page" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Go to previous page" })
    ).toBeInTheDocument();
  });

  it("Should calculate the right amount of pages", () => {
    const items = 100;
    const maxItemsPerPage = 2;
    render(
      <Basic
        activePage={1}
        itemCount={items}
        maxVisibleItems={maxItemsPerPage}
      />
    );
    expect(
      screen.getByRole("button", {
        name: `Go to page ${items / maxItemsPerPage}`,
      })
    ).toBeInTheDocument;
  });

  it("Should react to button clicks", () => {
    const callback = jest.fn();
    render(<Basic onChange={callback} activePage={2} />);
    userEvent.click(screen.getByRole("button", { name: "Go to next page" }));
    expect(callback).toHaveBeenCalledWith(3);
    userEvent.click(
      screen.getByRole("button", { name: "Go to previous page" })
    );
    expect(callback).toHaveBeenCalledWith(1);
    userEvent.click(screen.getByRole("button", { name: "Go to page 5" }));
    expect(callback).toHaveBeenCalledWith(5);
  });
});
