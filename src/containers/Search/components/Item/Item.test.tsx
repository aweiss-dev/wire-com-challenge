import { composeStories } from "@storybook/testing-react";

import { render, screen } from "../../../../testUtils";
import { Library } from "../../Search.types";
import { CompleteData } from "./Item.mockdata";
import * as stories from "./Item.stories";

const { Basic } = composeStories(stories);

describe("Container/Search/Components/Item", () => {
  it("Should render the component", () => {
    render(<Basic />);
    expect(screen.getByText(`${CompleteData.stars} Stars`)).toBeInTheDocument();
    expect(screen.getByText(`${CompleteData.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${CompleteData.description}`)).toBeInTheDocument();
    expect(screen.getByText(`${CompleteData.homepage}`)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: `${CompleteData.homepage}` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: `Check Repository` })
    ).toHaveAttribute("href", `${CompleteData.repository_url}`);
  });

  it("Should render ignore optional data", () => {
    const data: Library = {
      ...CompleteData,
      description: null,
      homepage: null,
    };
    render(<Basic {...data} />);

    expect(
      screen.queryByText(`${CompleteData.description}`)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(`${CompleteData.homepage}`)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: `${CompleteData.homepage}` })
    ).not.toBeInTheDocument();
  });
});
