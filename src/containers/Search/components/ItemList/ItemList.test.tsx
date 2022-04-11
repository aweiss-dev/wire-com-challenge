import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import { render, screen, waitFor } from "../../../../testUtils";
import * as stories from "./ItemList.stories";

const { Basic, Loading, Error, EmptyResults } = composeStories(stories);

describe("Container/Search/Components/ResultList", () => {
  it("Should display 2 paginations", () => {
    render(<Basic />);
    expect(
      screen.getAllByRole("navigation", {
        name: "pagination navigation",
      }).length
    ).toBe(2);
  });

  it("Should display sorting options", () => {
    render(<Basic />);
    expect(
      screen.getByRole("group", {
        name: "list sorting",
      })
    ).toBeInTheDocument();
  });

  it("Should display 5 search results", () => {
    render(<Basic />);
    expect(
      screen.getByRole("list", { name: "search results" })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("listitem", { name: "search result item" }).length
    ).toBe(5);
  });

  it("Should display loading animation", () => {
    render(<Loading />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("Should display error message", () => {
    const message = "This is an error";
    render(<Error error={message} />);
    expect(screen.getByRole("alert")).toHaveErrorMessage(message);
  });

  it("Should display default message when no search results", () => {
    render(<EmptyResults />);
    expect(screen.getByRole("alert")).toHaveErrorMessage(
      "No results found, please try a different query!"
    );
  });

  it("Should sort items by modes", async () => {
    render(<Basic />);

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("bootstrap");

    userEvent.click(
      screen.getByRole("button", { name: "Sort by alphabet desc" })
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("vue");

    userEvent.click(screen.getByRole("button", { name: "Sort by stars asc" }));
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("qunit");

    userEvent.click(screen.getByRole("button", { name: "Sort by stars desc" }));
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("vue");
  });

  it("Should change pages", async () => {
    render(<Basic />);

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("bootstrap");

    userEvent.click(
      screen.getAllByRole("button", {
        name: "Go to next page",
      })[0]
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("ionic");

    userEvent.click(
      screen.getAllByRole("button", {
        name: "Go to previous page",
      })[0]
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("bootstrap");

    userEvent.click(
      screen.getAllByRole("button", {
        name: "Go to page 5",
      })[0]
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(
      screen.getAllByRole("listitem", {
        name: "search result item",
      })[0]
    ).toHaveTextContent("select2");
  });
});
