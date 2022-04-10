import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import { render, screen, waitFor } from "../../testUtils";
import * as client from "./Search.client";
import { MockedLibraries } from "./Search.mockdata";
import * as stories from "./Search.stories";

jest.mock("./Search.client", () => ({
  fetchLibraries: jest.fn(),
}));
const mockClient = client as jest.Mocked<typeof client>;

const { Basic } = composeStories(stories);

describe("Container/Search", () => {
  it("Should render search and loader initially", async () => {
    mockClient.fetchLibraries.mockImplementationOnce(() =>
      Promise.resolve({
        data: { libraries: MockedLibraries },
        loading: false,
        networkStatus: 200,
      })
    );
    render(<Basic />);
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    await waitFor(() =>
      expect(mockClient.fetchLibraries).toHaveBeenCalledTimes(1)
    );

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("bootstrap");
  });

  it("Should show message when network error", async () => {
    mockClient.fetchLibraries.mockImplementationOnce(() =>
      Promise.reject("error")
    );

    render(<Basic />);
    await waitFor(() =>
      expect(mockClient.fetchLibraries).toHaveBeenCalledTimes(1)
    );

    expect(screen.getByRole("alert")).toHaveErrorMessage(
      "Oops, something went wrong when accessing data. Please try again later!"
    );
  });

  it("Should search for input value", async () => {
    mockClient.fetchLibraries.mockImplementation(() => Promise.reject("Nope"));

    render(<Basic />);
    await waitFor(() =>
      expect(mockClient.fetchLibraries).toHaveBeenCalledTimes(1)
    );

    const searchParam = "typescript";
    userEvent.type(screen.getByRole("searchbox"), searchParam);
    await waitFor(() =>
      expect(mockClient.fetchLibraries).toHaveBeenLastCalledWith(searchParam)
    );
  });
});
